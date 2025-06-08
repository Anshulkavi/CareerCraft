import pytesseract
from PIL import Image

# 💡 Change this path to your actual Tesseract install path (from Windows)
pytesseract.pytesseract.tesseract_cmd = r"E:\tesseract\tesseract.exe"  # ✅ <-- Update this!

# Path to your image
image_path = r"D:\project\CareerCraft\backend\core\Basic.png"

try:
    # Open the image file
    image = Image.open(image_path)

    # Perform OCR using pytesseract
    text = pytesseract.image_to_string(image)

    print("✅ OCR Extracted Text:\n")
    print(text)

except Exception as e:
    print(f"❌ Error: {e}")
