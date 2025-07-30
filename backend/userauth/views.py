from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import os
from .models import Subscription
from .utils import generate_reset_token, send_html_email,verify_reset_token
from .serializers import RequestPasswordResetLinkSerializer
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_decode


User = get_user_model()

# ------------------ Registration ------------------

class RegisterView(APIView):
    def post(self, request):
        try:
            data = request.data
            username = data.get("username")
            email = data.get("email")
            password = data.get("password")

            if User.objects.filter(username=username).exists():
                return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already registered'}, status=status.HTTP_400_BAD_REQUEST)

            User.objects.create(
                username=username,
                email=email,
                password=make_password(password)
            )

            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# ------------------ Login with Email ------------------

class EmailTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        email = attrs.get("username")
        password = attrs.get("password")

        try:
            user = User.objects.get(email=email)
            attrs["username"] = user.username
        except User.DoesNotExist:
            raise serializers.ValidationError("No active account found with this email")

        return super().validate(attrs)


class EmailTokenObtainPairView(TokenObtainPairView):
    serializer_class = EmailTokenObtainPairSerializer

# ------------------ Profile View ------------------

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    user = request.user
    return Response({
        "email": user.email,
        "username": user.username
    })

# ------------------ Subscription Upload ------------------

class SubmitSubscriptionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        amount = request.data.get("amount")
        upi_reference = request.data.get("upi_reference", "")
        screenshot = request.FILES.get("screenshot")

        if not screenshot:
            return Response({"error": "Screenshot is required."}, status=status.HTTP_400_BAD_REQUEST)

        Subscription.objects.create(
            user=request.user,
            amount=amount,
            upi_reference=upi_reference,
            screenshot=screenshot,
            status="pending"
        )
        return Response({"message": "Subscription submitted. Awaiting verification."}, status=status.HTTP_200_OK)

# ------------------ Password Reset Link Request ------------------

class RequestPasswordResetLinkView(APIView):
    def post(self, request):
        serializer = RequestPasswordResetLinkSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'No user found with this email'}, status=status.HTTP_404_NOT_FOUND)

        # Use Django's built-in token generator
        uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
        token = default_token_generator.make_token(user)

        FRONTEND_BASE_URL = os.environ.get("FRONTEND_BASE_URL", "http://localhost:5173")
        reset_link = f"{FRONTEND_BASE_URL}/reset-password/{uidb64}/{token}"

        send_html_email(
            subject="Reset Your Password",
            to_email=user.email,
            user_email=user.email,
            reset_link=reset_link,
        )

        return Response({"message": "Password reset link sent to your email."}, status=status.HTTP_200_OK)

User = get_user_model()

class ConfirmPasswordResetView(APIView):
    def post(self, request):
        uidb64 = request.data.get('uidb64')
        token = request.data.get('token')
        new_password = request.data.get('new_password')

        if not uidb64 or not token or not new_password:
            return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
        except (User.DoesNotExist, ValueError, TypeError, OverflowError):
            return Response({'error': 'Invalid reset link.'}, status=status.HTTP_400_BAD_REQUEST)

        if not default_token_generator.check_token(user, token):
            return Response({'error': 'Invalid or expired token.'}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()

        return Response({'message': 'Password has been reset successfully.'}, status=status.HTTP_200_OK)
