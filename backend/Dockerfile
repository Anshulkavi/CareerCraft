# Use official Python base image
FROM python:3.11-slim

WORKDIR /app

# Install required system dependencies (EasyOCR needs these)
RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    poppler-utils \
    build-essential \
    && apt-get clean

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt \
    && python -c "import easyocr; easyocr.Reader(['en'], download_enabled=True)"

# Copy app source
COPY . .

# Collect static files if needed
RUN python manage.py collectstatic --noinput

EXPOSE 8000

# Start server
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000", "--timeout", "120"]
