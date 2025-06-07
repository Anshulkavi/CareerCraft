from django.urls import path
from .views import upload_resume
from . import views

urlpatterns = [
    path('upload_resume/', upload_resume, name='upload_resume'),
    path('health_check/', views.health_check, name='health_check'),
    path('task_status/<str:task_id>/', views.task_status, name='task_status'),
]
