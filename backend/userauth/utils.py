import random
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.core.signing import TimestampSigner, BadSignature, SignatureExpired
from datetime import datetime


# Signer instance with salt for password reset tokens
signer = TimestampSigner(salt='password-reset')

# ===============================
# 🔐 Password Reset Token Helpers
# ===============================
def generate_reset_token(email):
    """
    Sign the user's email to generate a secure reset token.
    """
    return signer.sign(email)

def verify_reset_token(token, max_age=300):  # Token valid for 5 minutes
    """
    Verify the token and return the email if valid; else return None.
    """
    try:
        email = signer.unsign(token, max_age=max_age)
        return email
    except (BadSignature, SignatureExpired):
        return None

# ===============================
# 🔢 OTP Utilities (Optional)
# ===============================
def generate_otp():
    """
    Generate a 6-digit numeric OTP.
    """
    return str(random.randint(100000, 999999))

# def send_html_email(subject, to_email, username, heading, body_text, button_text=None, button_link=None):
#     """
#     Generic reusable HTML email sender.
#     """
#     button_html = f"""
#         <a href="{button_link}" style="padding:10px 20px;background:#2ecc71;color:white;text-decoration:none;border-radius:4px;">
#             {button_text}
#         </a>
#     """ if button_text and button_link else ""

#     html_message = f"""
#     <html>
#       <body style="font-family: Arial, sans-serif;">
#         <h2>{heading}</h2>
#         <p>Hi <strong>{username}</strong>,</p>
#         <p>{body_text}</p>
#         {button_html}
#         <p style="color: #999;">If you didn’t request this, you can ignore this email.</p>
#       </body>
#     </html>
#     """

#     send_mail(
#         subject=subject,
#         message=body_text,
#         from_email=settings.DEFAULT_FROM_EMAIL,
#         recipient_list=[to_email],
#         html_message=html_message,
#         fail_silently=False,
#     )

def send_html_email(subject, to_email, user_email, reset_link):
    """
    Sends a styled reset password email using a custom HTML template.
    """
    current_year = datetime.now().year

    html_message = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>{subject}</title>
      <style>
        body {{
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f4f7;
          margin: 0;
          padding: 0;
        }}
        .container {{
          max-width: 480px;
          margin: 40px auto;
          background-color: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }}
        .button {{
          display: inline-block;
          padding: 12px 24px;
          margin: 20px 0;
          background-color: #4f46e5;
          color: #ffffff !important;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
        }}
        .footer {{
          font-size: 12px;
          color: #888;
          text-align: center;
          margin-top: 30px;
        }}
        a {{
          color: #4f46e5;
        }}
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Reset Your Password</h2>
        <p>Hi {user_email},</p>
        <p>You recently requested to reset your password. Click the button below to set a new one:</p>
        <p style="text-align: center;">
          <a href="{reset_link}" class="button">Reset Password</a>
        </p>
        <p>If the button doesn’t work, copy and paste this link into your browser:</p>
        <p><a href="{reset_link}">{reset_link}</a></p>
        <p>If you didn’t request a password reset, you can safely ignore this email.</p>
        <div class="footer">
          © {current_year} CareerCraft. All rights reserved.
        </div>
      </div>
    </body>
    </html>
    """

    plain_text = f"""
Hi {user_email},

You recently requested to reset your password. Use the following link to set a new one:
{reset_link}

If you didn’t request this, you can safely ignore this email.

© {current_year} CareerCraft. All rights reserved.
    """

    email = EmailMultiAlternatives(
        subject=subject,
        body=plain_text,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[to_email]
    )
    email.attach_alternative(html_message, "text/html")
    email.send(fail_silently=False)