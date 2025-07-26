from django.urls import path
from .views import upload_resume,SaveResumeView,GetResumeView, get_resume_by_id
from . import views

urlpatterns = [
    path('upload_resume/', upload_resume, name='upload_resume'),
    path('save-resume/', SaveResumeView.as_view(), name='save-resume'),
    path('get-resume/', GetResumeView.as_view(), name='get-resume'),  # list all
    path('get-resume/<str:resume_id>/', get_resume_by_id, name='get-single-resume'),  # get single
    path('health_check/', views.health_check, name='health_check'),
    path('test_cors/', views.test_cors, name='test_cors'),
]
