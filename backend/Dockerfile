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
    && apt-get clean


# Set working directory
WORKDIR /app

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy entire app
COPY . .

# Set Tesseract environment
ENV TESSDATA_PREFIX=/usr/share/tesseract-ocr/5/tessdata
ENV PATH="/usr/bin:$PATH"

# Expose port
EXPOSE 8000

# Run both Gunicorn and Celery using honcho
CMD ["honcho", "start"]
