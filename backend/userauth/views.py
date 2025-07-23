from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Subscription

class RegisterView(APIView):
    def post(self, request):
        try:
            data = request.data
            username = data.get("username")
            email = data.get("email")
            password = data.get("password")

            if User.objects.filter(username=username).exists():
                return Response({'error': 'Username already exists'}, status=400)

            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already registered'}, status=400)

            user = User.objects.create(
                username=username,
                email=email,
                password=make_password(password)
            )

            return Response({'message': 'User created successfully'}, status=201)

        except Exception as e:
            return Response({'error': str(e)}, status=500)


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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    user = request.user
    return Response({
        "email": user.email,
        "username": user.username
    })    

class SubmitSubscriptionView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self,request):
        amount = request.data.get("amount")
        upi_reference = request.data.get("upi_reference", "")
        screenshot = request.FILES.get("screenshot")

        if not screenshot:
            return Response({"error": "Screenshot is required."}, status=400)
        Subscription.objects.create(
            user=request.user,
            amount=amount,
            upi_reference=upi_reference,
            screenshot=screenshot,
            status="pending"
        )
        return Response({"message": "Subscription submitted. Awaiting verification."})

