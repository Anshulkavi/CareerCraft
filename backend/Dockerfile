# Use official Python base image
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies needed for your app (adjust if needed)
RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    poppler-utils \
    build-essential \
    && apt-get clean

COPY requirements.txt . 
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Optional: collect static files if you use them
RUN python manage.py collectstatic --noinput

EXPOSE 8000

CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000", "--timeout", "120"]
