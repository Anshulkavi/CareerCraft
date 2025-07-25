from rest_framework import serializers

class ResumeSerializer(serializers.Serializer):
    user_id = serializers.CharField()
    data = serializers.DictField()
