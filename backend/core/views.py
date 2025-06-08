from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ResumeData
from .utils import extract_email, extract_phone, extract_name, extract_skills, extract_experience
from .job_finder import scrape_internshala_jobs
from django.core.validators import EmailValidator
from django.core.exceptions import ValidationError
import PyPDF2
import docx


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
                reader = PyPDF2.PdfReader(f)
                for p in reader.pages:
                    text += p.extract_text() or ""
            elif ext == 'docx':
                text = extract_text_from_docx(f)
            else:
                return JsonResponse({'error': 'Only PDF or DOCX files are allowed.'}, status=400)

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
            # Critical: Catch unhandled exceptions to return proper JSON
            return JsonResponse({'error': f'Internal server error: {str(e)}'}, status=500)

    return JsonResponse({'error': 'Invalid request. POST with resume file required.'}, status=400)

@csrf_exempt
def test_cors(request):
    return JsonResponse({"status": "ok"})

def health_check(request):
    return JsonResponse({'status': 'ok'}, status=200)


# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import ResumeData
# from .utils import extract_email, extract_phone, extract_name, extract_skills, extract_experience
# from .job_finder import scrape_internshala_jobs
# from django.core.validators import EmailValidator
# from django.core.exceptions import ValidationError
# import PyPDF2
# import docx
# import io
# from PIL import Image
# import easyocr
# import numpy as np

# # Initialize EasyOCR reader once
# reader = easyocr.Reader(['en'], gpu=False)

# def validate_email(email):
#     validator = EmailValidator()
#     try:
#         validator(email)
#         return True
#     except ValidationError:
#         return False

# def extract_text_from_docx(file):
#     doc = docx.Document(file)
#     return "\n".join(para.text for para in doc.paragraphs)

# def extract_text_from_pdf(file):
#     text = ""
#     try:
#         reader_pdf = PyPDF2.PdfReader(file)
#         for page in reader_pdf.pages:
#             page_text = page.extract_text()
#             if page_text:
#                 text += page_text + "\n"
#     except Exception as e:
#         print("PDF parsing error:", e)
#     return text

# def ocr_image(file):
#     try:
#         img_bytes = file.read()
#         img = Image.open(io.BytesIO(img_bytes))
#         img_np = np.array(img)
#         result = reader.readtext(img_np, detail=0)
#         return "\n".join(result)
#     except Exception as e:
#         print("OCR image error:", e)
#         return ""

# def ocr_pdf_with_easyocr(file):
#     # Not using pdf2image due to deploy constraints; fallback to text extract only
#     return extract_text_from_pdf(file)  # You can integrate OCR per page image in future

# def count_matching_skills(job, skills):
#     fields = [
#         job.get("title", ""),
#         job.get("location", ""),
#         job.get("salary", "")
#     ]
#     combined = " ".join(fields).lower()
#     return sum(1 for skill in skills if skill.lower() in combined)

# @csrf_exempt
# def upload_resume(request):
#     if request.method == 'POST' and request.FILES.get('resume'):
#         try:
#             f = request.FILES['resume']
#             ext = f.name.split('.')[-1].lower()

#             if f.size > 10 * 1024 * 1024:
#                 return JsonResponse({'error': 'File too large. Maximum size is 10MB.'}, status=400)

#             text = ""
#             use_ocr = False

#             if ext == 'pdf':
#                 text = extract_text_from_pdf(f)
#                 if len(text.strip()) < 30:
#                     use_ocr = True

#             elif ext == 'docx':
#                 text = extract_text_from_docx(f)

#             elif ext in ['png', 'jpg', 'jpeg']:
#                 use_ocr = True

#             else:
#                 return JsonResponse({'error': 'Only PDF, DOCX, PNG, JPG, or JPEG files are allowed.'}, status=400)

#             # Try extracting info before OCR
#             skills = extract_skills(text)
#             if not skills and not use_ocr and ext in ['pdf', 'docx']:
#                 use_ocr = True  # fallback to OCR only if no skills found

#             if use_ocr:
#                 if ext in ['png', 'jpg', 'jpeg']:
#                     text = ocr_image(f)
#                 else:
#                     text = ocr_pdf_with_easyocr(f)
#                 skills = extract_skills(text)

#             name = extract_name(text)
#             email = extract_email(text)
#             phone = extract_phone(text)
#             experience = extract_experience(text)

#             if not email or '@' not in email or '.' not in email:
#                 email = None
#             if not skills:
#                 return JsonResponse({'error': 'No skills found in the resume.'}, status=400)

#             ResumeData.objects.create(
#                 name=name or "Not specified",
#                 email=email or "Not specified",
#                 phone=phone or "Not specified",
#                 skills=skills,
#                 experience=experience or "Not specified"
#             )

#             all_jobs = []
#             for skill in skills:
#                 all_jobs += scrape_internshala_jobs([skill])

#             for job in all_jobs:
#                 job["matching_skills"] = count_matching_skills(job, skills)

#             unique_jobs = {(job['title'], job.get('company_name', 'Unknown')): job for job in all_jobs}
#             sorted_jobs = sorted(unique_jobs.values(), key=lambda x: -x.get("matching_skills", 0))
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
#             return JsonResponse({'error': f'Internal server error: {str(e)}'}, status=500)

#     return JsonResponse({'error': 'Invalid request. POST with resume file required.'}, status=400)

# @csrf_exempt
# def test_cors(request):
#     return JsonResponse({"status": "ok"})

# def health_check(request):
#     return JsonResponse({'status': 'ok'}, status=200)
