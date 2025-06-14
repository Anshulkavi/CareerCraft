import re
import os
from datetime import datetime
from dateutil import parser
import pdfplumber

MASTER_SKILLS = [
    'Python', 'Java', 'JavaScript', 'React', 'React.js', 'C', 'C++', 'HTML', 'CSS',
    'AWS', 'Git', 'GitHub', 'Bootstrap', 'R', 'Tailwind CSS'
]

SKILL_NORMALIZATION = {
    'react.js': 'React',
    'tailwind css': 'Tailwind CSS',
    'github': 'GitHub'
}

def extract_text_from_file(file_path):
    text = ""
    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    return text

def extract_experience(text):
    experience_section_keywords = [
        "experience", "work experience", "professional experience", "internship", "work history"
    ]
    experience_section_pattern = re.compile(r'(?i)(' + '|'.join(experience_section_keywords) + r')')

    experience_section_match = experience_section_pattern.search(text)
    if not experience_section_match:
        return "Not specified"

    experience_text = text[experience_section_match.end():]

    experience_pattern = re.compile(r'(\d{1,2})\+?\s+(years?|yrs?)\s+(of\s+)?(experience|exp)', re.IGNORECASE)
    matches = experience_pattern.findall(experience_text)
    if matches:
        return matches[0][0] + " years"

    irrelevant_keywords = ["degree", "education", "certificate", "project"]
    if any(keyword in experience_text.lower() for keyword in irrelevant_keywords):
        return "Not specified"

    date_pattern = re.compile(
        r'(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})\s*[-–to]+\s*(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|present)', re.IGNORECASE
    )

    total_months = 0
    for match in date_pattern.findall(experience_text):
        start_str, end_str = match
        try:
            start_date = parser.parse(start_str, dayfirst=True)
            end_date = parser.parse(end_str, dayfirst=True) if "present" not in end_str.lower() else datetime.now()

            months = (end_date.year - start_date.year) * 12 + (end_date.month - start_date.month)
            if months > 0:
                total_months += months
        except Exception:
            continue

    if total_months:
        years = total_months // 12
        months = total_months % 12

        if years and months:
            return f"{years} years {months} months"
        elif years:
            return f"{years} years"
        else:
            return f"{months} months"

    return "Not specified"

def extract_email(text):
    match = re.search(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', text)
    if match:
        email = match.group(0)
        if "reallygreatsite" not in email.lower():
            return email
    return "Not specified"

def extract_phone(text):
    phone_pattern = re.compile(
        r'(?:\+?\d{1,3}[-\s]?)?(?:0)?(?:\d{2,5}[-\s]?){2,4}\d{2,5}'
    )
    
    matches = phone_pattern.findall(text)
    
    for number in matches:
        digits_only = re.sub(r'\D', '', number)
        if len(digits_only) >= 10 and digits_only[-10:].isdigit():
            return digits_only[-10:]
    
    return "Not specified"

def extract_name(text):
    lines = text.strip().split('\n')
    for line in lines:
        line = line.strip()
        if line and len(line) <= 40 and not any(char.isdigit() for char in line):
            # Filter out common headings
            if line.lower() not in ['resume', 'curriculum vitae', 'cv', 'contact', 'profile', 'summary']:
                return line
    return "Not specified"

def extract_skills(text):
    text_lower = text.lower()
    found_skills = set()

    for skill in MASTER_SKILLS:
        skill_lower = skill.lower()
        pattern = r'\b' + re.escape(skill_lower) + r'\b'
        if re.search(pattern, text_lower):
            normalized_skill = SKILL_NORMALIZATION.get(skill_lower, skill)
            found_skills.add(normalized_skill)

    return sorted(found_skills)

if __name__ == "__main__":
    file_path = "D:/project/CareerCraft/backend/core/CV.pdf"  # Change as needed

    if not os.path.exists(file_path):
        print("❌ Resume file not found:", file_path)
    else:
        print(f"✅ Reading resume from: {file_path}")
        resume_text = extract_text_from_file(file_path)

        print("---- Resume Text Preview ----")
        print(resume_text[:500])
        print("-----------------------------")

        name = extract_name(resume_text)
        email = extract_email(resume_text)
        phone = extract_phone(resume_text)
        experience = extract_experience(resume_text)
        skills = extract_skills(resume_text)

        print("\n🎯 Final Extracted Data:")
        print("Name:", name)
        print("Email:", email)
        print("Phone:", phone)
        print("Experience:", experience)
        print("Skills:", skills)
