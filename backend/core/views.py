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

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ResumeData
from .utils import extract_email, extract_phone, extract_name, extract_skills, extract_experience
from .job_finder import scrape_internshala_jobs
from django.core.validators import EmailValidator
from django.core.exceptions import ValidationError
import PyPDF2
import docx
import pytesseract
from PIL import Image
import pdfplumber
import tempfile
import os


# ---------------- EMAIL VALIDATOR ----------------
def validate_email(email):
    validator = EmailValidator()
    try:
        validator(email)
        return True
    except ValidationError:
        return False


# ---------------- TEXT EXTRACTOR ----------------
def extract_text_from_docx(file):
    doc = docx.Document(file)
    return "\n".join(para.text for para in doc.paragraphs)


# ---------------- SKILL MATCHER ----------------
def count_matching_skills(job, skills):
    fields = [
        job.get("title", ""),
        job.get("location", ""),
        job.get("salary", "")
    ]
    combined = " ".join(fields).lower()
    return sum(1 for skill in skills if skill.lower() in combined)


# ---------------- RESUME UPLOAD VIEW ----------------
@csrf_exempt
def upload_resume(request):
    if request.method == 'POST' and request.FILES.get('resume'):
        try:
            f = request.FILES['resume']
            ext = f.name.split('.')[-1].lower()

            if f.size > 10 * 1024 * 1024:
                return JsonResponse({'error': 'File too large. Maximum size is 10MB.'}, status=400)

            text = ""
            if ext == 'pdf':
                # Try to extract text normally first
                reader = PyPDF2.PdfReader(f)
                for p in reader.pages:
                    text += p.extract_text() or ""

                # If text is too short, do OCR fallback
                if len(text.strip()) < 30:
                    # Save uploaded file temporarily for pdfplumber
                    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_pdf:
                        for chunk in f.chunks():
                            temp_pdf.write(chunk)
                    temp_pdf_path = temp_pdf.name

                    text = ""
                    with pdfplumber.open(temp_pdf_path) as pdf:
                        for page in pdf.pages:
                            # Convert page to image and do OCR
                            image = page.to_image(resolution=300)
                            pil_img = image.original.convert("L")  # convert to grayscale
                            text += pytesseract.image_to_string(pil_img)
                    os.remove(temp_pdf_path)

            elif ext == 'docx':
                text = extract_text_from_docx(f)

            elif ext in ['png', 'jpg', 'jpeg']:
                img = Image.open(f)
                text = pytesseract.image_to_string(img)

            else:
                return JsonResponse({'error': 'Only PDF, DOCX, JPG, or PNG files are allowed.'}, status=400)

            name = extract_name(text)
            email = extract_email(text)
            phone = extract_phone(text)
            skills = extract_skills(text)
            experience = extract_experience(text)

            if not email or '@' not in email or '.' not in email:
                email = None
            if not skills:
                return JsonResponse({'error': 'No skills found in the resume.'}, status=400)

            # Save extracted data
            ResumeData.objects.create(
                name=name or "Not specified",
                email=email,
                phone=phone or "Not specified",
                skills=skills,
                experience=experience or "Not specified"
            )

            # Fetch jobs
            all_jobs = []
            for skill in skills:
                all_jobs += scrape_internshala_jobs([skill])

            # Count matches
            for job in all_jobs:
                job["matching_skills"] = count_matching_skills(job, skills)

            unique_jobs = {(job['title'], job.get('company_name', 'Unknown')): job for job in all_jobs}
            all_jobs = list(unique_jobs.values())
            sorted_jobs = sorted(all_jobs, key=lambda x: -x.get("matching_skills", 0))
            top_matches = sorted_jobs[:5]

            return JsonResponse({
                'message': 'Resume processed successfully!',
                'matches': top_matches,
                'extracted': {
                    'name': name or "Not specified",
                    'email': email or "Not specified",
                    'phone': phone or "Not specified",
                    'skills': skills,
                    'experience': experience or "Not specified"
                }
            })

        except Exception as e:
            return JsonResponse({'error': f'Internal server error: {str(e)}'}, status=500)

    return JsonResponse({'error': 'Invalid request. POST with resume file required.'}, status=400)


def health_check(request):
    return JsonResponse({'status': 'ok'}, status=200)
