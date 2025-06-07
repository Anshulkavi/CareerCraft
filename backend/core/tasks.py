from celery import shared_task
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
import os

@shared_task
def test_celery_task():
    print("Celery task ran successfully")
    return "Task Completed"


def validate_email(email):
    validator = EmailValidator()
    try:
        validator(email)
        return True
    except ValidationError:
        return False

@shared_task(bind=True)
def parse_resume_and_match_jobs(self, resume_path):
    try:
        ext = os.path.splitext(resume_path)[1].lower()
        text = ""

        if ext == '.pdf':
            # Extract text from PDF
            with open(resume_path, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                for p in reader.pages:
                    text += p.extract_text() or ""

            # OCR fallback if text too short
            if len(text.strip()) < 30:
                with pdfplumber.open(resume_path) as pdf:
                    for page in pdf.pages:
                        image = page.to_image(resolution=300)
                        pil_img = image.original.convert("L")
                        text += pytesseract.image_to_string(pil_img)

        elif ext == '.docx':
            import docx
            doc = docx.Document(resume_path)
            text = "\n".join(para.text for para in doc.paragraphs)

        elif ext in ['.png', '.jpg', '.jpeg']:
            img = Image.open(resume_path)
            text = pytesseract.image_to_string(img)

        else:
            return {'error': 'Unsupported file type.'}

        # Extract fields
        name = extract_name(text)
        email = extract_email(text)
        phone = extract_phone(text)
        skills = extract_skills(text)
        experience = extract_experience(text)

        if not email or '@' not in email or '.' not in email:
            email = None

        if not skills:
            return {'error': 'No skills found in the resume.'}

        # Save extracted data to DB
        ResumeData.objects.create(
            name=name or "Not specified",
            email=email,
            phone=phone or "Not specified",
            skills=skills,
            experience=experience or "Not specified"
        )

        # Job scraping & matching
        all_jobs = []
        for skill in skills:
            all_jobs += scrape_internshala_jobs([skill])

        # Count matching skills helper
        def count_matching_skills(job, skills):
            fields = [
                job.get("title", ""),
                job.get("location", ""),
                job.get("salary", "")
            ]
            combined = " ".join(fields).lower()
            return sum(1 for skill in skills if skill.lower() in combined)

        for job in all_jobs:
            job["matching_skills"] = count_matching_skills(job, skills)

        unique_jobs = {(job['title'], job.get('company_name', 'Unknown')): job for job in all_jobs}
        all_jobs = list(unique_jobs.values())
        sorted_jobs = sorted(all_jobs, key=lambda x: -x.get("matching_skills", 0))
        top_matches = sorted_jobs[:5]

        # Delete temp file after processing
        if os.path.exists(resume_path):
            os.remove(resume_path)

        return {
            'message': 'Resume processed successfully!',
            'matches': top_matches,
            'extracted': {
                'name': name or "Not specified",
                'email': email or "Not specified",
                'phone': phone or "Not specified",
                'skills': skills,
                'experience': experience or "Not specified"
            }
        }

    except Exception as e:
        if os.path.exists(resume_path):
            os.remove(resume_path)
        self.update_state(state='FAILURE', meta={'exc': str(e)})
        raise e
