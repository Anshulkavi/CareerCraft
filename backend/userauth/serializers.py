from rest_framework import serializers
from django.contrib.auth import authenticate
from django.core.cache import cache
from .models import User
from .utils import generate_otp  # optional if used elsewhere


# 1. Registration
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email is already registered.")
        return value

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username is already taken.")
        return value

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


# 2. Login
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])

        if not user:
            raise serializers.ValidationError("Invalid credentials.")

        if not user.is_email_verified:
            raise serializers.ValidationError("Email not verified.")

        data["user"] = user
        return data


# 3. Request Password Reset Link (via email)
class RequestPasswordResetLinkSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("No user is associated with this email.")
        return value


# 4. Confirm Password Reset with OTP (Optional if not using link-based reset)
class ResetPasswordConfirmSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField()
    new_password = serializers.CharField(write_only=True, min_length=6)

    def validate(self, data):
        email = data['email'].strip().lower()
        cached_otp = cache.get(f"reset_otp_{email}")
        if cached_otp != data["otp"]:
            raise serializers.ValidationError("Invalid or expired OTP.")
        return data

    def save(self):
        email = self.validated_data['email'].strip().lower()
        new_password = self.validated_data['new_password']
        user = User.objects.get(email=email)
        user.set_password(new_password)
        user.save()
        cache.delete(f"reset_otp_{email}")  # cleanup
        return user


# 5. OPTIONAL: Profile Serializer
class ProfileSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'full_name',
            'phone_number',
            'is_email_verified',
            'is_profile_completed',
        ]

    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}".strip()

    def update(self, instance, validated_data):
        for field in ['first_name', 'last_name', 'phone_number']:
            setattr(instance, field, validated_data.get(field, getattr(instance, field)))

        instance.is_profile_completed = True
        instance.save()
        return instance
