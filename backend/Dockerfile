# Use official Python base image
FROM python:3.11-slim

# Install Tesseract + dependencies
RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    tesseract-ocr-eng \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    poppler-utils \
    build-essential \
    && apt-get clean

# Set working directory
WORKDIR /app

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy full app
COPY . .

# Tell pytesseract where tesseract is
ENV TESSDATA_PREFIX=/usr/share/tesseract-ocr/5/tessdata
ENV PATH="/usr/bin:$PATH"

# Expose default Django/Gunicorn port
EXPOSE 8000

# Start the app with gunicorn
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000", "--timeout", "120"]

