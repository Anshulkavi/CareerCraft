
# import re
# from datetime import datetime
# from dateutil import parser


# # ---------------- EMAIL EXTRACTION ----------------
# def extract_email(text):
#     match = re.search(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', text)
#     if match and "reallygreatsite" not in match.group(0).lower():
#         return match.group(0)
#     return ""


# # ---------------- PHONE EXTRACTION ----------------
# def extract_phone(text):
#     phone_pattern = re.compile(r'(?:\+?\d{1,3}[-\s]?)?(?:0)?(?:\d{2,5}[-\s]?){2,4}\d{2,5}')
#     matches = phone_pattern.findall(text)
#     for number in matches:
#         digits = re.sub(r'\D', '', number)
#         if len(digits) >= 10:
#             return digits[-10:]
#     return ""

# # ---------------- NAME EXTRACTION ----------------
# def extract_name(text):
#     lines = text.split("\n")
#     for line in lines:
#         clean = line.strip()
#         if clean and clean.lower() not in ['resume', 'profile', 'contact']:
#             words = clean.split()
#             if len(words) >= 2 and all(w[0].isupper() for w in words[:2]):
#                 return " ".join(words[:2])
#     return "Unknown"

# # ---------------- EXPERIENCE EXTRACTION ----------------
# def extract_experience(text):
#     keywords = r'(?i)(experience|work experience|internship|professional experience)'
#     match = re.search(keywords, text)
#     if not match:
#         return "Not specified"
#     text = text[match.end():]

#     years = re.search(r'(\d+)\+?\s*(years?|yrs?)\s+(of\s+)?(experience|exp)', text, re.IGNORECASE)
#     if years:
#         return f"{years.group(1)} years"

#     date_pattern = re.compile(r'(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})\s*[-–to]+\s*(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|present)', re.IGNORECASE)
#     total_months = 0

#     for start, end in date_pattern.findall(text):
#         try:
#             start_date = parser.parse(start, dayfirst=True)
#             end_date = parser.parse(end, dayfirst=True) if "present" not in end.lower() else datetime.now()
#             total_months += (end_date.year - start_date.year) * 12 + (end_date.month - start_date.month)
#         except:
#             continue

#     if total_months:
#         y, m = divmod(total_months, 12)
#         return f"{y} years {m} months" if y else f"{m} months"
#     return "Not specified"

# # ---------------- SKILLS EXTRACTION ----------------
# def extract_skills(text):
#     text = text.lower()
#     section_pattern = re.compile(
#         r'(languages|skills|technical skills|tools & platforms)\s*[:\-]?\s*(.*?)(?=\n[a-z]{3,}|$)',
#         re.IGNORECASE | re.DOTALL
#     )
#     matches = section_pattern.findall(text)
#     section_text = " ".join([m[1] for m in matches]) if matches else text
#     section_text = re.sub(r'[^\w+#.,/ ]', '', section_text)
#     section_text = re.sub(r'\s+', ' ', section_text)

#     skills_list = [
#         'python', 'java', 'html', 'css', 'javascript', 'sql', 'mongodb',
#         'react', 'react.js', 'node.js', 'django', 'flask', 'c++', 'c#',
#         'ruby', 'php', 'swift', 'kotlin', 'go', 'typescript', 'r',
#         'bootstrap', 'tailwind css', 'git', 'github', 'c', 'Machine Learning', 'Data analyis'
#     ]
#     found = [skill for skill in skills_list if re.search(r'\b' + re.escape(skill) + r'\b', section_text)]
#     return sorted(found)


import re
import fitz  # PyMuPDF
import docx
from datetime import datetime
from dateutil import parser

def extract_text_from_pdf(file):
    text = ""
    with fitz.open(stream=file.read(), filetype="pdf") as doc:
        for page in doc:
            text += page.get_text("text")
    return text

def extract_text_from_docx(file):
    doc = docx.Document(file)
    return "\n".join(para.text for para in doc.paragraphs)

def sanitize_text(text):
    text = re.sub(r'([a-z])([A-Z])', r'\1 \2', text)
    text = re.sub(r'([A-Z])([A-Z][a-z])', r'\1 \2', text)
    text = re.sub(r'\s+', ' ', text)
    return text

def extract_name(text):
    # This improved pattern handles ALL-CAPS names correctly.
    # It looks for two or more consecutive words in all caps.
    match = re.search(r'\b[A-Z]{2,}(?:\s+[A-Z]{2,})+\b', text)
    if match:
        return match.group(0).title() # .title() makes it look cleaner (e.g., "Anshul Kavishwar")
    
    # Fallback for standard capitalized names
    match = re.search(r'\b[A-Z][a-z]+ [A-Z][a-z]+\b', text)
    return match.group(0) if match else "Unknown"

def extract_email(text):
    match = re.search(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', text)
    return match.group(0) if match else ""

def extract_phone(text):
    match = re.search(r'(?:\+91)?[-\s]?(?:[7-9][0-9]{9})\b', text)
    return match.group(0) if match else ""

def extract_skills(text):
    clean_text = sanitize_text(text).lower()
    # A more comprehensive skills list for better matching
    skills_set = {
        "python", "django", "flask", "fastapi", "reactjs", "react", "aws", "ec2", "s3", "iam", "cloudwatch",
        "c++", "mongodb", "git", "postman", "data structures", "postgresql", "algorithms", "html", "css",
        "rest apis", "restful apis", "jwt", "cloudinary", "render", "ci/cd",
        "sql", "nosql", "firebase", "gunicorn", "geminiapi",
        "dsa", "oop", "system design", "dbms", "os"
    }
    found_skills = {skill for skill in skills_set if re.search(r'\b' + re.escape(skill) + r'\b', clean_text)}
    return sorted(list(found_skills))

def extract_experience(text):
    """
    Finds and calculates the duration of internships only.
    """
    text_lower = text.lower()
    
    # --- NEW: Isolate the Internships section ---
    try:
        # Find the start of the internships section
        internships_start_index = text_lower.index('internships')
        
        # Find the start of the next major section (e.g., projects) to define the end
        next_section_headers = ['projects', 'achievements', 'assessments', 'web links']
        end_indices = [text_lower.find(header, internships_start_index) for header in next_section_headers]
        # Filter out headers that weren't found (-1)
        valid_end_indices = [idx for idx in end_indices if idx != -1]
        
        internships_end_index = min(valid_end_indices) if valid_end_indices else len(text)
        
        # Slice the text to only include the content of the internships section
        experience_text = text[internships_start_index:internships_end_index]
    except ValueError:
        # "internships" section not found
        return "Not specified"
    # --- End of new logic ---

    clean_experience_text = sanitize_text(experience_text)
    total_months = 0
    pattern = re.compile(
        r'((?:\d{1,2}\s+)?[A-Za-z]{3,9},?\s+\d{4})\s*(?:to|–|-|—)?\s*(Present|Current|(?:\d{1,2}\s+)?[A-Za-z]{3,9},?\s+\d{4})',
        re.IGNORECASE
    )
    matches = pattern.findall(clean_experience_text)

    for start_str, end_str in matches:
        try:
            start_date = parser.parse(start_str.strip())
            end_date = datetime.now()
            if not any(word in end_str.lower() for word in ["present", "current"]):
                end_date = parser.parse(end_str.strip())
            months = (end_date.year - start_date.year) * 12 + (end_date.month - start_date.month) + 1
            if months > 0:
                total_months += months
        except (parser.ParserError, ValueError):
            continue

    if total_months > 0:
        years, months_rem = divmod(total_months, 12)
        result = []
        if years > 0:
            result.append(f"{years} year{'s' if years > 1 else ''}")
        if months_rem > 0:
            result.append(f"{months_rem} month{'s' if months_rem > 1 else ''}")
        return " ".join(result)
        
    return "Not specified"
