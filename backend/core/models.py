# from mongoengine import Document, StringField,ListField, EmailField,DictField, ReferenceField ,connect,disconnect
# from django.contrib.auth.models import User
# from django.contrib.auth import get_user_model
# from mongoengine import DateTimeField
# from datetime import datetime, timezone

# from mongoengine import connect
# from urllib.parse import quote_plus

# username = quote_plus("John")
# password = quote_plus("JohnDoe256")

# connect(
#     db="resumejobf",
#     host=f"mongodb+srv://{username}:{password}@resumejobf.hm4jqor.mongodb.net/resumejobf?retryWrites=true&w=majority",
#     alias="default"
# )


# class ResumeData(Document):
#     name = StringField()
#     email = EmailField()
#     phone = StringField()
#     skills = ListField(StringField())
#     experience = StringField()  # ✅ New field for experience
#     extracted_text = StringField()  # Optional: full extracted resume text


# User = get_user_model()

# class Resume(Document):
#     user_id = StringField(required=True)
#     title = StringField(required=True)  # ✅ this must exist
#     data = DictField()
#     created_at = DateTimeField(default=lambda: datetime.now(timezone.utc))
#     updated_at = DateTimeField(default=lambda: datetime.now(timezone.utc))
#     meta = {'collection': 'resumes'}

#     def save(self, *args, **kwargs):
#         self.updated_at = datetime.utcnow()
#         if not self.created_at:
#             self.created_at = datetime.utcnow()
#         return super().save(*args, **kwargs)

from mongoengine import Document, StringField, ListField, EmailField, DictField, DateTimeField, connect
from django.contrib.auth import get_user_model
from datetime import datetime, timezone
from urllib.parse import quote_plus

# ---------------- DB Connection ----------------
username = quote_plus("John")
password = quote_plus("JohnDoe256")

connect(
    db="resumejobf",
    host=f"mongodb+srv://{username}:{password}@resumejobf.hm4jqor.mongodb.net/resumejobf?retryWrites=true&w=majority",
    alias="default"
)

# ---------------- ResumeData (Parsed Resume Store) ----------------
class ResumeData(Document):
    name = StringField(required=True)
    email = EmailField(required=True)
    phone = StringField()
    # ✅ Skills ko DictField se ListField me convert kiya for simplicity
    # flat list ["python","django","flask"] etc.
    skills = ListField(StringField())
    experience = StringField()
    extracted_text = StringField()  # optional: full text store
    created_at = DateTimeField(default=lambda: datetime.now(timezone.utc))
    updated_at = DateTimeField(default=lambda: datetime.now(timezone.utc))

    meta = {'collection': 'resume_data'}

    def save(self, *args, **kwargs):
        self.updated_at = datetime.now(timezone.utc)
        return super().save(*args, **kwargs)

# ---------------- Resume (User Saved Versions) ----------------
User = get_user_model()

class Resume(Document):
    user_id = StringField(required=True)
    title = StringField(required=True)  # user-applied title
    data = DictField()                  # resume structured JSON
    created_at = DateTimeField(default=lambda: datetime.now(timezone.utc))
    updated_at = DateTimeField(default=lambda: datetime.now(timezone.utc))
    meta = {'collection': 'resumes'}

    def save(self, *args, **kwargs):
        self.updated_at = datetime.utcnow()
        if not self.created_at:
            self.created_at = datetime.utcnow()
        return super().save(*args, **kwargs)
