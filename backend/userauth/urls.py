from django.urls import path
from .views import (
    RegisterView, profile_view, SubmitSubscriptionView,
    RequestPasswordResetLinkView, ConfirmPasswordResetView
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', profile_view, name='profile'),
    path('submit-subscription/', SubmitSubscriptionView.as_view(), name='submit-subscription'),
    
    # Password Reset
    path('request-password-reset/', RequestPasswordResetLinkView.as_view(), name='request-password-reset'),
    path('confirm-password-reset/', ConfirmPasswordResetView.as_view(), name='confirm-password-reset'),
]


