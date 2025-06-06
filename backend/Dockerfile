# Use official Python base image
FROM python:3.11-slim

# Install system dependencies for Tesseract, PDF, image, and docx support
RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    tesseract-ocr-eng \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    poppler-utils \
    && apt-get clean

# Set the correct tessdata directory (based on actual install path)
ENV TESSDATA_PREFIX=/usr/share/tesseract-ocr/5/tessdata

# Set working directory
WORKDIR /app

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the project
COPY . .

# (Optional) Collect static files for Django
# RUN python backend/manage.py collectstatic --noinput

# Expose the port (Render expects this)
EXPOSE 8000

# Start the Django app with Gunicorn
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
