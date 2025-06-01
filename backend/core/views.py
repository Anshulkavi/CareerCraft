from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ResumeData
from .utils import extract_email, extract_phone, extract_name, extract_skills, extract_experience
from .job_finder import scrape_internshala_jobs
from django.core.validators import EmailValidator
from django.core.exceptions import ValidationError
import PyPDF2
import docx
from datetime import datetime

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
        f = request.FILES['resume']
        ext = f.name.split('.')[-1].lower()

        if f.size > 10 * 1024 * 1024:
            return JsonResponse({'error': 'File too large. Maximum size is 10MB.'}, status=400)

        try:
            text = ""
            if ext == 'pdf':
                reader = PyPDF2.PdfReader(f)
                for p in reader.pages:
                    text += p.extract_text() or ""
            elif ext == 'docx':
                text = extract_text_from_docx(f)
            else:
                return JsonResponse({'error': 'Only PDF or DOCX files are allowed.'}, status=400)
        except Exception as e:
            return JsonResponse({'error': f'Failed to read resume: {str(e)}'}, status=500)

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

        # Fetch and match Internshala jobs
        all_jobs = []
        for skill in skills:
            all_jobs += scrape_internshala_jobs([skill])

        # Count matching skills
        for job in all_jobs:
            job["matching_skills"] = count_matching_skills(job, skills)

        # Deduplicate by (title, company)
        unique_jobs = {(job['title'], job.get('company_name', 'Unknown')): job for job in all_jobs}
        all_jobs = list(unique_jobs.values())

        # Sort by matching_skills (descending) and select top 5
        sorted_jobs = sorted(all_jobs, key=lambda x: -x.get("matching_skills", 0))
        top_matches = sorted_jobs[:5]

        print(f"[DEBUG] Extracted skills from resume: {skills}")
        print(f"[DEBUG] Top matching Internshala jobs: {top_matches}")

        return JsonResponse({
            'message': 'Resume processed successfully!',
            'matches': top_matches,
            'extracted': {
                'name': name if name else "Not specified",
                'email': email if email else "Not specified",
                'phone': phone if phone else "Not specified",
                'skills': skills,
                'experience': experience if experience else "Not specified"
            }
        })

    return JsonResponse({'error': 'Invalid request. POST with resume file required.'}, status=400)


# import re
# import traceback
# from datetime import datetime
# from PIL import Image
# import io
# import docx
# import fitz  # PyMuPDF
# import pdfplumber
# import pytesseract
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt

# from .job_finder import scrape_internshala_jobs
# from .models import ResumeData
# from .utils import extract_email, extract_phone, extract_name, extract_skills, extract_experience

# # Set Tesseract path - update as per your system
# # pytesseract.pytesseract.tesseract_cmd = r"E:\tesseract\tesseract.exe"


# # -------- TEXT EXTRACTION --------
# def extract_text_from_pdf(file):
#     text = ""
#     try:
#         with pdfplumber.open(file) as pdf:
#             for page in pdf.pages:
#                 text += page.extract_text() or ""

#         if len(text.strip()) < 50:
#             try:
#                 file.seek(0)
#                 doc = fitz.open(stream=file.read(), filetype="pdf")
#                 for page_num in range(len(doc)):
#                     page = doc.load_page(page_num)
#                     pix = page.get_pixmap(dpi=300)
#                     img_data = pix.tobytes("png")
#                     page_text = pytesseract.image_to_string(img_data)
#                     text += page_text + "\n"
#             except Exception as ocr_error:
#                 print("OCR failed:", ocr_error)
#                 pass  # silently skip OCR if it fails

#     except Exception as pdf_error:
#         print("PDF extraction failed:", pdf_error)
#         text = ""

#     return text


# def extract_text_from_docx(file):
#     """
#     Extract text from DOCX files.
#     """
#     doc = docx.Document(file)
#     return "\n".join(para.text for para in doc.paragraphs)


# # -------- SKILL MATCHING --------
# def count_matching_skills(job, skills):
#     """
#     Count how many of the candidate's skills appear in
#     job's title, location or salary fields (case insensitive).
#     """
#     fields = [job.get("title", ""), job.get("location", ""), job.get("salary", "")]
#     combined = " ".join(fields).lower()
#     return sum(1 for skill in skills if skill.lower() in combined)


# # -------- VIEW --------
# @csrf_exempt
# def upload_resume(request):
#     if request.method != 'POST' or 'resume' not in request.FILES:
#         return JsonResponse({'error': 'Invalid request. POST with resume file required.'}, status=400)

#     f = request.FILES['resume']
#     ext = f.name.split('.')[-1].lower()

#     if f.size > 10 * 1024 * 1024:
#         return JsonResponse({'error': 'File too large. Maximum size is 10MB.'}, status=400)

#     if ext not in ['pdf', 'docx']:
#         return JsonResponse({'error': 'Only PDF or DOCX files are allowed.'}, status=400)

#     try:
#         # Extract text based on file type
#         if ext == 'pdf':
#             text = extract_text_from_pdf(f)
#         else:  # docx
#             text = extract_text_from_docx(f)

#         # Clean garbled characters
#         text = re.sub(r'[\uE000-\uF8FF\uFFF0-\uFFFF]', '', text)  # Remove private-use Unicode
#         text = re.sub(r'[^\x00-\x7F]+', ' ', text)  # Remove non-ASCII artifacts

#         # Extract structured data
#         name = extract_name(text) or "Not specified"
#         email = extract_email(text)
#         phone = extract_phone(text) or "Not specified"
#         skills = extract_skills(text)
#         experience = extract_experience(text) or "Not specified"

#         # Validate email format simply
#         if not email or '@' not in email or '.' not in email:
#             email = None

#         if not skills:
#             return JsonResponse({'error': 'No skills found in the resume.'}, status=400)

#         # Save extracted data to MongoDB (via Django ORM)
#         ResumeData.objects.create(
#             name=name,
#             email=email,
#             phone=phone,
#             skills=skills,  # assumed to be a list field
#             experience=experience,
#             extracted_text=text
#         )

#         # Fetch jobs from Internshala using extracted skills
#         all_jobs = []
#         for skill in skills:
#             all_jobs.extend(scrape_internshala_jobs([skill]))

#         # Add matching skills count for ranking
#         for job in all_jobs:
#             job["matching_skills"] = count_matching_skills(job, skills)

#         # Deduplicate jobs by (title, company_name)
#         unique_jobs = {}
#         for job in all_jobs:
#             key = (job.get('title', '').lower(), job.get('company_name', 'Unknown').lower())
#             if key not in unique_jobs or job["matching_skills"] > unique_jobs[key]["matching_skills"]:
#                 unique_jobs[key] = job

#         # Sort jobs by matching_skills descending and limit to top 5
#         top_matches = sorted(unique_jobs.values(), key=lambda j: -j.get("matching_skills", 0))[:5]

#         print(f"[DEBUG] Extracted skills: {skills}")
#         print(f"[DEBUG] Top jobs: {top_matches}")

#         # Respond with extracted info + job matches
#         return JsonResponse({
#             'message': 'Resume processed successfully!',
#             'matches': top_matches,
#             'extracted': {
#                 'name': name,
#                 'email': email or "Not specified",
#                 'phone': phone,
#                 'skills': skills,
#                 'experience': experience
#             }
#         })

#     except Exception as e:
#         traceback.print_exc()
#         return JsonResponse({'error': f'Server error: {str(e)}'}, status=500)
