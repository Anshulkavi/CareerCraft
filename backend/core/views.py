
# from bson import ObjectId
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import ResumeData
# from .utils import (
#     extract_text_from_pdf, extract_text_from_docx,
#     extract_name, extract_email, extract_phone,
#     extract_skills, extract_experience, flatten_skills
    
# )
# import os
# from .job_finder import fetch_relevant_jobs, count_matching_skills
# import PyPDF2
# import docx
# from django.core.validators import EmailValidator
# from django.core.exceptions import ValidationError
# from .models import Resume
# from .serializers import ResumeSerializer
# from rest_framework.decorators import api_view
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status

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

#             # Extract candidate info
#             name = extract_name(text)
#             email = extract_email(text)
#             phone = extract_phone(text)
#             skills = extract_skills(text)
#             experience = extract_experience(text)

#             # Basic email validation
#             if not email or '@' not in email or '.' not in email:
#                 email = None

#             if not skills:
#                 return JsonResponse({'error': 'No skills found in the resume.'}, status=400)

#             # Save to DB
#             ResumeData.objects.create(
#                 name=name or "Not specified",
#                 email=email,
#                 phone=phone or "Not specified",
#                 skills=skills,
#                 experience=experience or "Not specified"
#             )

#             # Prioritize these skills and get top 5
#             priority_skills = ['python', 'django', 'react']
#             top_skills = sorted(skills, key=lambda s: s.lower() not in priority_skills)[:5]

#             # Fetch relevant jobs
#             job_results = fetch_relevant_jobs(top_skills)

#             # Calculate matching skill count per job
#             for job in job_results:
#                 job["matching_skills"] = count_matching_skills(job, top_skills)

#             # Deduplicate jobs by (title, company_name)
#             unique_jobs = {(job['title'], job.get('company_name', 'Unknown')): job for job in job_results}
#             sorted_jobs = sorted(unique_jobs.values(), key=lambda x: -x.get("matching_skills", 0))[:5]

#             return JsonResponse({
#                 'message': 'Resume processed successfully!',
#                 'matches': sorted_jobs,
#                 'extracted': {
#                     'name': name or "Not specified",
#                     'email': email or "Not specified",
#                     'phone': phone or "Not specified",
#                     'skills': top_skills,
#                     'experience': experience or "Not specified"
#                 }
#             })

#         except Exception as e:
#             return JsonResponse({'error': f'Internal server error: {str(e)}'}, status=500)

#     return JsonResponse({'error': 'Invalid request. POST with resume file required.'}, status=400)

# @csrf_exempt
# def upload_resume(request):
#     if request.method != 'POST' or not request.FILES.get('resume'):
#         return JsonResponse({'error': 'Invalid request. POST with resume file required.'}, status=400)

#     f = request.FILES['resume']
#     ext = f.name.split('.')[-1].lower()

#     # ✅ File validation
#     if f.size > 10 * 1024 * 1024:
#         return JsonResponse({'error': 'File too large. Max 10MB'}, status=400)
#     if ext not in ['pdf', 'docx']:
#         return JsonResponse({'error': 'Only PDF or DOCX allowed'}, status=400)

#     try:
#         # ✅ Extract text
#         if ext == 'pdf':
#             text = extract_text_from_pdf(f)
#         else:
#             text = extract_text_from_docx(f)

#         if not text.strip():
#             return JsonResponse({'error': 'Could not extract text from resume'}, status=400)

#         # ✅ Extract fields
#         name = extract_name(text)
#         email = extract_email(text) or "Not specified"
#         phone = extract_phone(text) or "Not specified"
#         skills = extract_skills(text)
#         experience = extract_experience(text)

#         # ✅ Save to DB (safe insert)
#         resume = ResumeData.objects.create(
#             name=name,
#             email=email,
#             phone=phone,
#             skills=skills if skills else [],
#             experience=experience,
#             extracted_text=text
#         )

#         # ✅ Prepare flat skills for job search
#         flat_skills = flatten_skills(skills) if isinstance(skills, dict) else skills

#         job_results, sorted_jobs = [], []
#         if flat_skills:
#             job_results = fetch_relevant_jobs(skills)
#             for job in job_results:
#                 job["matching_skills"] = count_matching_skills(job, flat_skills)

#             unique_jobs = {(job['title'], job.get('company_name', 'Unknown')): job for job in job_results}
#             sorted_jobs = sorted(unique_jobs.values(), key=lambda x: -x.get("matching_skills", 0))[:5]

#         # ✅ Response
#         return JsonResponse({
#             'message': 'Resume processed successfully!',
#             'resume_id': str(resume.id),  # easy fetch later
#             'matches': sorted_jobs,
#             'extracted': {
#                 'name': name,
#                 'email': email,
#                 'phone': phone,
#                 'skills': flat_skills,
#                 'experience': experience
#             }
#         })

#     except Exception as e:
#         import traceback
#         traceback.print_exc()
#         return JsonResponse({'error': f'Internal server error: {str(e)}'}, status=500)

# class SaveResumeView(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         user_id = str(request.user.id)
#         title = request.data.get("title")
#         data = request.data.get('data', {})  # ✅ default to empty dict

#         if not title or not data:
#             return Response({"error": "Missing title or data"}, status=400)

#         # Overwrite if same user + title exists
#         existing = Resume.objects(user_id=user_id, title=title).first()
#         if existing:
#             existing.data = data
#             existing.save()
#         else:
#             Resume(user_id=user_id, title=title, data=data).save()

#         return Response({"message": "Resume saved successfully"})


# class GetResumeView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         user_id = str(request.user.id)

#         # Fetch all resumes for this user, sorted by latest updated
#         resumes = Resume.objects(user_id=user_id).order_by("-updated_at")

#         resume_list = [
#             {
#                 "id": str(resume.id),
#                 "title": resume.title,
#                 "created_at": resume.created_at.strftime("%Y-%m-%d %H:%M"),
#                 "updated_at": resume.updated_at.strftime("%Y-%m-%d %H:%M"),
#             }
#             for resume in resumes
#         ]

#         return Response(resume_list)
    
# @api_view(['GET'])
# def get_resume_by_id(request, resume_id):
#     try:
#         resume = Resume.objects.get(id=resume_id)
#         serializer = ResumeSerializer(resume)
#         return Response(serializer.data, status=200)
#     except Resume.DoesNotExist:
#         return Response({"error": "Resume not found"}, status=404)

# class DeleteResumeView(APIView):
#     permission_classes = [IsAuthenticated]

#     def delete(self, request, resume_id):
#         try:
#             resume = Resume.objects.get(id=ObjectId(resume_id), user_id=str(request.user.id))
#             resume.delete()
#             return Response({"message": "Resume deleted ✅"}, status=200)
#         except Resume.DoesNotExist:
#             return Response({"error": "Resume not found"}, status=404)
#         except Exception as e:
#             import traceback
#             traceback.print_exc()
#             return Response({"error": str(e)}, status=500)
         
# @csrf_exempt
# def test_cors(request):
#     return JsonResponse({"status": "ok"})

# def health_check(request):
#     return JsonResponse({'status': 'ok'}, status=200)

import traceback
from bson import ObjectId
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
from django.core.validators import EmailValidator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated

from .models import ResumeData, Resume
from .serializers import ResumeSerializer
from .utils import (
    extract_text_from_pdf,
    extract_text_from_docx,
    extract_name,
    extract_email,
    extract_phone,
    extract_skills,
    extract_experience,
)
# Make sure to import the best scoring function
from .job_finder import fetch_relevant_jobs


# ---------------- EMAIL VALIDATOR ----------------
def validate_email(email):
    """Checks if the given email string is valid."""
    validator = EmailValidator()
    try:
        validator(email)
        return True
    except ValidationError:
        return False


# ---------------- UPLOAD RESUME (IMPROVED) ----------------
@csrf_exempt
def upload_resume(request):
    # 1. Validate Request
    if request.method != 'POST' or not request.FILES.get('resume'):
        return JsonResponse({'error': 'Invalid request. POST with resume file required.'}, status=400)

    resume_file = request.FILES['resume']
    file_extension = resume_file.name.split('.')[-1].lower()

    if file_extension not in ['pdf', 'docx']:
        return JsonResponse({'error': 'Invalid file type. Only PDF and DOCX are allowed.'}, status=400)

    try:
        # 2. Extract Text using utils.py
        text = extract_text_from_pdf(resume_file) if file_extension == 'pdf' else extract_text_from_docx(resume_file)
        if not text.strip():
            return JsonResponse({'error': 'Could not extract text from the resume.'}, status=400)

        # 3. Parse Information using utils.py
        skills = extract_skills(text)
        name = extract_name(text)
        email = extract_email(text)
        phone = extract_phone(text)
        experience = extract_experience(text)
        
        # 4. Find Job Matches using job_finder.py (one clean call)
        top_job_matches = fetch_relevant_jobs(skills) if skills else []

        # 5. Save and Respond
        valid_email = email if validate_email(email) else "Not specified"
        resume_instance = ResumeData.objects.create(
            name=name, email=valid_email, phone=phone or "Not specified",
            skills=skills, experience=experience, extracted_text=text
        )

        return JsonResponse({
            'message': 'Resume processed successfully! ✅',
            'resume_id': str(resume_instance.id),
            'matches': top_job_matches,
            'extracted': {
                'name': name, 'email': valid_email, 'phone': phone or "Not specified",
                'skills': skills, 'experience': experience
            }
        })
    except Exception as e:
        traceback.print_exc()
        return JsonResponse({'error': f'An unexpected error occurred: {str(e)}'}, status=500)

# ---------------- SAVE RESUME ----------------
class SaveResumeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user_id = str(request.user.id)
        title = request.data.get("title")
        data = request.data.get('data', {})

        if not title or not data:
            return Response({"error": "Missing title or data"}, status=400)

        Resume.objects.update_one(
            {"user_id": user_id, "title": title},
            {"$set": {"data": data}},
            upsert=True
        )
        return Response({"message": "Resume saved successfully ✅"})


# ---------------- GET RESUMES ----------------
class GetResumeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_id = str(request.user.id)
        resumes = Resume.objects(user_id=user_id).order_by("-updated_at")
        serializer = ResumeSerializer(resumes, many=True)
        return Response(serializer.data)


# ---------------- GET RESUME BY ID ----------------
@api_view(['GET'])
def get_resume_by_id(request, resume_id):
    try:
        resume = Resume.objects.get(id=resume_id)
        serializer = ResumeSerializer(resume)
        return Response(serializer.data)
    except Resume.DoesNotExist:
        return Response({"error": "Resume not found"}, status=404)


# ---------------- DELETE RESUME ----------------
class DeleteResumeView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, resume_id):
        try:
            resume_to_delete = Resume.objects.get(id=ObjectId(resume_id), user_id=str(request.user.id))
            resume_to_delete.delete()
            return Response({"message": "Resume deleted ✅"}, status=200)
        except Resume.DoesNotExist:
            return Response({"error": "Resume not found or you do not have permission to delete it."}, status=404)
        except Exception as e:
            traceback.print_exc()
            return Response({"error": str(e)}, status=500)
        
@csrf_exempt
def test_cors(request):
    return JsonResponse({"status": "ok"})

def health_check(request):
    return JsonResponse({'status': 'ok'}, status=200)
