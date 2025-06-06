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

# Debug: List tessdata directories and installed languages
RUN echo "Listing /usr/share/tesseract-ocr/4.00/tessdata:" && ls -l /usr/share/tesseract-ocr/4.00/tessdata || echo "Directory not found"
RUN echo "Listing /usr/share/tesseract-ocr/tessdata:" && ls -l /usr/share/tesseract-ocr/tessdata || echo "Directory not found"
RUN echo "Tesseract available languages:" && tesseract --list-langs

# Set TESSDATA_PREFIX (try the more common path)
ENV TESSDATA_PREFIX=/usr/share/tesseract-ocr/tessdata

# Set working directory
WORKDIR /app

# Copy dependency file and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Expose port (Render expects web services to run on 0.0.0.0:$PORT)
EXPOSE 8000

# Start the app
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
