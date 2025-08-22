# import requests
# from bs4 import BeautifulSoup


# def count_matching_skills(job, skills):
#     fields = [job.get("title", ""), job.get("location", ""), job.get("salary", "")]
#     combined = " ".join(fields).lower()
#     return sum(1 for skill in skills if skill.lower() in combined)


# def scrape_internshala_jobs(skills):
#     headers = {"User-Agent": "Mozilla/5.0"}
#     results = []
#     seen = set()

#     for skill in skills:
#         query = skill.lower()
#         url = f"https://internshala.com/internships/keywords-{query}"
#         try:
#             res = requests.get(url, headers=headers, timeout=10)
#             soup = BeautifulSoup(res.content, "html.parser")
#             internships = soup.select(".container-fluid.individual_internship")

#             for div in internships:
#                 title_elem = div.select_one(".job-internship-name a")
#                 if not title_elem:
#                     continue

#                 title = title_elem.text.strip()
#                 url = "https://internshala.com" + title_elem.get("href", "")
#                 company = div.select_one(".company-name")
#                 location = div.select_one(".locations a")
#                 stipend = div.select_one(".stipend")

#                 job_key = (title, company.text.strip() if company else "Unknown")
#                 if job_key in seen:
#                     continue
#                 seen.add(job_key)

#                 results.append({
#                     "title": title,
#                     "company_name": company.text.strip() if company else "Unknown",
#                     "location": location.text.strip() if location else "No location",
#                     "salary": stipend.text.strip() if stipend else "No stipend",
#                     "url": url,
#                     "description": ""
#                 })

#                 if len(results) >= 10:
#                     return results

#         except Exception as e:
#             print(f"[Internshala] Error for '{skill}': {e}")

#     return results


# def fetch_relevant_jobs(skills):
#     print(f"[DEBUG] Fetching Internshala jobs for: {skills}")
#     return scrape_internshala_jobs(skills)

import requests
from bs4 import BeautifulSoup
import concurrent.futures

# --- CONFIGURATION FOR ACCURATE MATCHING ---
DEV_ROLES = [
    "software developer", "web developer", "backend developer",
    "full stack developer", "data analyst", "python developer"
]
NEGATIVE_KEYWORDS = [
    "chartered accountant", "ca intern", "finance", "accounts", "marketing",
    "sales", "business development", "hr", "human resources", "customer service"
]

def calculate_match_score(job_title, job_description, user_skills):
    job_title_lower = job_title.lower()
    if any(keyword in job_title_lower for keyword in NEGATIVE_KEYWORDS):
        return {"score": 0, "matching_skills": []}

    job_text = job_title_lower + " " + job_description.lower()
    user_skills_lower = {skill.lower() for skill in user_skills}
    skill_weights = {
        "react": 3, "django": 3, "python": 3, "node.js": 3, "flask": 3, "fastapi": 3,
        "data structures": 2, "algorithms": 2, "dsa": 2, "aws": 2, "sql": 2, "postgresql": 2, "rest apis": 2,
        "git": 1, "postman": 1, "html": 1, "css": 1
    }
    score = sum(skill_weights.get(skill, 1) for skill in user_skills_lower if skill in job_text)
    matching_skills = [skill for skill in user_skills_lower if skill in job_text]
    return {"score": score, "matching_skills": matching_skills}

def scrape_job_description(job_url):
    try:
        headers = {"User-Agent": "Mozilla/5.0"}
        response = requests.get(job_url, headers=headers, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, "html.parser")
        desc_div = soup.select_one(".internship_details .text-container")
        return desc_div.get_text(separator=" ", strip=True) if desc_div else ""
    except requests.RequestException:
        return ""

def scrape_internshala_for_query(query, max_results=10):
    headers = {"User-Agent": "Mozilla/5.0"}
    url = f"https://internshala.com/internships/keywords-{query.lower().replace(' ', '-')}"
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, "html.parser")
        internships = soup.select(".individual_internship")
        
        results = []
        for div in internships[:max_results]:
            title_elem = div.select_one("h3.job-internship-name a")
            company_elem = div.select_one("p.company-name")

            # --- NEW: Scrape location and salary ---
            location_elem = div.select_one(".locations")
            salary_elem = div.select_one(".stipend")

            if title_elem:
                results.append({
                    "title": title_elem.text.strip(),
                    "company_name": company_elem.text.strip() if company_elem else "Unknown",
                    "url": "https://internshala.com" + title_elem.get("href", ""),
                    # --- NEW: Add location and salary to the job dictionary ---
                    "location": location_elem.text.strip() if location_elem else "Not specified",
                    "salary": salary_elem.text.strip() if salary_elem else "Not specified"
                })
        return results
    except requests.RequestException:
        return []

def fetch_relevant_jobs(skills):
    if not skills:
        return []

    skill_priorities = {"django": 10, "react": 10, "fastapi": 9, "python": 8, "flask": 8, "aws": 7}
    top_skills = sorted(skills, key=lambda s: skill_priorities.get(s.lower(), 0), reverse=True)[:2]
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        job_lists = list(executor.map(scrape_internshala_for_query, top_skills))
        job_pool = [job for sublist in job_lists for job in sublist]
        
        unique_jobs_to_scrape = { (j['title'], j['company_name']): j for j in job_pool }.values()
        
        future_to_job = {executor.submit(scrape_job_description, job['url']): job for job in unique_jobs_to_scrape}
        for future in concurrent.futures.as_completed(future_to_job):
            job = future_to_job[future]
            job['description'] = future.result()

    final_unique_jobs = {}
    for job in unique_jobs_to_scrape:
        if job.get('description'):
            match_data = calculate_match_score(job.get('title', ''), job.get('description', ''), skills)
            if match_data['score'] > 0:
                job.update(match_data)
                job_key = (job.get('title'), job.get('company_name'))
                if job_key not in final_unique_jobs or final_unique_jobs[job_key]['score'] < job['score']:
                    final_unique_jobs[job_key] = job

    return sorted(final_unique_jobs.values(), key=lambda j: j['score'], reverse=True)[:5]