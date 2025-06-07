# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import ResumeData
# from .utils import extract_email, extract_phone, extract_name, extract_skills, extract_experience
# from .job_finder import scrape_internshala_jobs
# from django.core.validators import EmailValidator
# from django.core.exceptions import ValidationError
# import PyPDF2
# import docx


# # ---------------- EMAIL VALIDATOR ----------------
# def validate_email(email):
#     validator = EmailValidator()
#     try:
#         validator(email)
#         return True
#     except ValidationError:
#         return False

# # ---------------- TEXT EXTRACTOR ----------------
# def extract_text_from_docx(file):
#     doc = docx.Document(file)
#     return "\n".join(para.text for para in doc.paragraphs)

# # ---------------- SKILL MATCHER ----------------
# def count_matching_skills(job, skills):
#     fields = [
#         job.get("title", ""),
#         job.get("location", ""),
#         job.get("salary", "")
#     ]
#     combined = " ".join(fields).lower()
#     return sum(1 for skill in skills if skill.lower() in combined)

# # ---------------- RESUME UPLOAD VIEW ----------------
# @csrf_exempt
# def upload_resume(request):
#     if request.method == 'POST' and request.FILES.get('resume'):
#         try:
#             f = request.FILES['resume']
#             ext = f.name.split('.')[-1].lower()

#             if f.size > 10 * 1024 * 1024:
#                 return JsonResponse({'error': 'File too large. Maximum size is 10MB.'}, status=400)

#             text = ""
#             if ext == 'pdf':
#                 reader = PyPDF2.PdfReader(f)
#                 for p in reader.pages:
#                     text += p.extract_text() or ""
#             elif ext == 'docx':
#                 text = extract_text_from_docx(f)
#             else:
#                 return JsonResponse({'error': 'Only PDF or DOCX files are allowed.'}, status=400)

#             name = extract_name(text)
#             email = extract_email(text)
#             phone = extract_phone(text)
#             skills = extract_skills(text)
#             experience = extract_experience(text)

#             if not email or '@' not in email or '.' not in email:
#                 email = None 
#             if not skills:
#                 return JsonResponse({'error': 'No skills found in the resume.'}, status=400)

#             # Save extracted data
#             ResumeData.objects.create(
#                 name=name or "Not specified",
#                 email=email,
#                 phone=phone or "Not specified",
#                 skills=skills,
#                 experience=experience or "Not specified"
#             )

#             # Fetch jobs
#             all_jobs = []
#             for skill in skills:
#                 all_jobs += scrape_internshala_jobs([skill])

#             # Count matches
#             for job in all_jobs:
#                 job["matching_skills"] = count_matching_skills(job, skills)

#             unique_jobs = {(job['title'], job.get('company_name', 'Unknown')): job for job in all_jobs}
#             all_jobs = list(unique_jobs.values())
#             sorted_jobs = sorted(all_jobs, key=lambda x: -x.get("matching_skills", 0))
#             top_matches = sorted_jobs[:5]

#             return JsonResponse({
#                 'message': 'Resume processed successfully!',
#                 'matches': top_matches,
#                 'extracted': {
#                     'name': name or "Not specified",
#                     'email': email or "Not specified",
#                     'phone': phone or "Not specified",
#                     'skills': skills,
#                     'experience': experience or "Not specified"
#                 }
#             })

#         except Exception as e:
#             # Critical: Catch unhandled exceptions to return proper JSON
#             return JsonResponse({'error': f'Internal server error: {str(e)}'}, status=500)

#     return JsonResponse({'error': 'Invalid request. POST with resume file required.'}, status=400)


# def health_check(request):
#     return JsonResponse({'status': 'ok'}, status=200)

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import os, uuid

from .utils import extract_email, extract_phone, extract_name, extract_skills, extract_experience
from .job_finder import scrape_internshala_jobs
from .models import ResumeData

import PyPDF2, docx, pdfplumber, pytesseract
from PIL import Image

@csrf_exempt
def upload_resume(request):
    if request.method == 'POST' and request.FILES.get('resume'):
        resume_file = request.FILES['resume']
        file_ext = os.path.splitext(resume_file.name)[1].lower()
        temp_filename = f"temp_{uuid.uuid4().hex}{file_ext}"
        temp_path = os.path.join("media", temp_filename)

        with open(temp_path, 'wb+') as destination:
            for chunk in resume_file.chunks():
                destination.write(chunk)

        try:
            text = ""
            if file_ext == '.pdf':
                with open(temp_path, 'rb') as f:
                    reader = PyPDF2.PdfReader(f)
                    for page in reader.pages:
                        text += page.extract_text() or ""

                if len(text.strip()) < 30:
                    with pdfplumber.open(temp_path) as pdf:
                        for page in pdf.pages:
                            image = page.to_image(resolution=300)
                            pil_img = image.original.convert("L")
                            text += pytesseract.image_to_string(pil_img)

            elif file_ext == '.docx':
                doc = docx.Document(temp_path)
                text = "\n".join(para.text for para in doc.paragraphs)

            elif file_ext in ['.png', '.jpg', '.jpeg']:
                img = Image.open(temp_path)
                text = pytesseract.image_to_string(img)
            else:
                return JsonResponse({'error': 'Unsupported file type.'}, status=400)

            # Extract details
            name = extract_name(text)
            email = extract_email(text)
            phone = extract_phone(text)
            skills = extract_skills(text)
            experience = extract_experience(text)

            if not skills:
                return JsonResponse({'error': 'No skills found in resume'}, status=400)

            # Save to DB
            ResumeData.objects.create(
                name=name or "Not specified",
                email=email or "Not specified",
                phone=phone or "Not specified",
                skills=skills,
                experience=experience or "Not specified"
            )

            # Scrape jobs for each skill
            all_jobs = []
            for skill in skills:
                all_jobs += scrape_internshala_jobs([skill])

            # Remove duplicates
            unique_jobs = {(j['title'], j.get('company_name', '')): j for j in all_jobs}
            job_list = list(unique_jobs.values())

            def count_matching(job):
                combined = f"{job.get('title', '')} {job.get('location', '')} {job.get('salary', '')}".lower()
                return sum(skill.lower() in combined for skill in skills)

            for job in job_list:
                job['matching_skills'] = count_matching(job)

            top_jobs = sorted(job_list, key=lambda x: -x.get('matching_skills', 0))[:5]

            # Clean up temp file
            if os.path.exists(temp_path):
                os.remove(temp_path)

            return JsonResponse({
                "message": "Resume processed successfully!",
                "extracted": {
                    "name": name or "Not specified",
                    "email": email or "Not specified",
                    "phone": phone or "Not specified",
                    "skills": skills,
                    "experience": experience or "Not specified"
                },
                "matches": top_jobs
            })

        except Exception as e:
            if os.path.exists(temp_path):
                os.remove(temp_path)
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request'}, status=400)

def health_check(request):
    return JsonResponse({'status': 'ok'}, status=200)