from django.test import TestCase

# Create your tests here.
import sys
import PyPDF2
import docx

def extract_text_from_pdf(file_path):
    text = ""
    with open(file_path, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        for page in reader.pages:
            text += page.extract_text() or ""
    return text

def extract_text_from_docx(file_path):
    doc = docx.Document(file_path)
    return "\n".join(para.text for para in doc.paragraphs)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python test.py <resume.pdf/docx>")
        sys.exit(1)

    file_path = sys.argv[1]
    ext = file_path.split(".")[-1].lower()

    if ext == "pdf":
        text = extract_text_from_pdf(file_path)
    elif ext == "docx":
        text = extract_text_from_docx(file_path)
    else:
        print("Only PDF or DOCX files allowed")
        sys.exit(1)

    # Show first 1500 chars for debugging
    print("===== RAW EXTRACTED TEXT START =====")
    print(text[:1500])
    print("===== RAW EXTRACTED TEXT END =====")
