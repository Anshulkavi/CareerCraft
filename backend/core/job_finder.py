# import requests
# from bs4 import BeautifulSoup

# # ---------------- FILTER JOBS ----------------

# def filter_jobs_by_skills(jobs, skills):
#     """
#     Filters job listings based on the skills extracted from the resume.
#     """
#     filtered_jobs = []
#     skills_lower = {skill.lower() for skill in skills}

#     for job in jobs:
#         title = job.get("title", "").lower()
#         description = job.get("description", "").lower()
#         matched = any(skill in title or skill in description for skill in skills_lower)

#         if matched:
#             job["matched_skills"] = [skill for skill in skills if skill.lower() in title or skill.lower() in description]
#             filtered_jobs.append(job)

#     return filtered_jobs


# # ---------------- INTERNSHALA SCRAPER ----------------

# def scrape_internshala_jobs(skills):
#     headers = {"User-Agent": "Mozilla/5.0"}
#     results = []

#     for skill in skills:
#         query = skill.lower()
#         url = f"https://internshala.com/internships/keywords-{query}"

#         try:
#             resp = requests.get(url, headers=headers, timeout=10)
#             soup = BeautifulSoup(resp.content, "html.parser")

#             internship_containers = soup.select(".container-fluid.individual_internship")

#             for div in internship_containers:
#                 title_elem = div.select_one(".job-internship-name a")
#                 if not title_elem:
#                     continue
#                 title = title_elem.text.strip()
#                 job_url = "https://internshala.com" + title_elem.get("href", "")

#                 company_elem = div.select_one(".company-name")
#                 company = company_elem.text.strip() if company_elem else "No company name"

#                 location_elem = div.select_one(".locations a")
#                 location = location_elem.text.strip() if location_elem else "No location"

#                 stipend_elem = div.select_one(".stipend")
#                 stipend = stipend_elem.text.strip() if stipend_elem else "No stipend"

#                 results.append({
#                     "title": title,
#                     "company_name": company,
#                     "location": location,
#                     "salary": stipend,
#                     "description": "",  # Internshala doesn't give full desc in list view
#                     "url": job_url
#                 })

#                 if len(results) >= 10:
#                     return results

#         except Exception as e:
#             print(f"[Internshala] Error for skill '{skill}': {e}")

#     return results


# # ---------------- COMBINED JOB FETCHING ----------------

# def fetch_relevant_jobs(skills):
#     """
#     Fetches relevant jobs from Internshala based on skills.
#     """
#     print(f"[DEBUG] Fetching Internshala jobs for skills: {skills}")
#     internshala_jobs = scrape_internshala_jobs(skills)
#     print(f"Total Internshala jobs found: {len(internshala_jobs)}")
#     return internshala_jobs


# 2ND CODE WORKS FASTER THAN 1ST CODE USE WHEN 3RD DOESNT WORK.
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
import re
from bs4 import BeautifulSoup

def scrape_internshala_jobs(skills):
    """
    Scrape Internshala jobs matching any of the skills.
    Return a list of job dicts with keys: title, company_name, location, skills (list).
    """

    base_url = "https://internshala.com/internships/keywords-"
    all_jobs = []

    for skill in skills:
        skill_encoded = skill.replace(' ', '-')
        url = f"{base_url}{skill_encoded}"

        try:
            response = requests.get(url, timeout=10)
            if response.status_code != 200:
                continue

            soup = BeautifulSoup(response.text, 'html.parser')
            job_cards = soup.find_all('div', class_='internship_meta')

            for job in job_cards:
                title_tag = job.find('a', class_='view_detail_button')
                title = title_tag.text.strip() if title_tag else "No Title"

                company_tag = job.find('a', class_='link_display_like_text')
                company_name = company_tag.text.strip() if company_tag else "Unknown"

                location_tag = job.find('a', attrs={'data-internship-location': True})
                location = location_tag.text.strip() if location_tag else "Unknown"

                skills_tag = job.find('div', class_='internship_other_details_container')
                skills_text = skills_tag.text.strip() if skills_tag else ""
                # Basic skills extraction from text (split by commas or whitespace)
                job_skills = re.findall(r'\b\w+\b', skills_text.lower())

                job_dict = {
                    'title': title,
                    'company_name': company_name,
                    'location': location,
                    'skills': list(set(job_skills))
                }
                all_jobs.append(job_dict)
        except Exception as e:
            continue

    return all_jobs


def filter_jobs_by_skill_matches(jobs, skills, min_match_count=1):
    """
    Filter jobs where matching skills count >= min_match_count.
    """
    filtered = []
    for job in jobs:
        job_skills = [s.lower() for s in job.get('skills', [])]
        match_count = sum(1 for skill in skills if skill.lower() in job_skills)
        if match_count >= min_match_count:
            job['matching_skills'] = match_count
            filtered.append(job)
    return filtered


def smart_match_jobs(all_jobs, skills):
    """
    Try strict matching first (2 or half of skills),
    then fallback to looser matching (1 skill).
    """

    n = len(skills)
    if n == 0:
        return []

    min_matches_strict = 2 if n < 4 else max(2, n // 2)

    strict_matches = filter_jobs_by_skill_matches(all_jobs, skills, min_match_count=min_matches_strict)

    if strict_matches:
        strict_matches = sorted(strict_matches, key=lambda x: -x['matching_skills'])[:5]
        return strict_matches

    loose_matches = filter_jobs_by_skill_matches(all_jobs, skills, min_match_count=1)
    loose_matches = sorted(loose_matches, key=lambda x: -x['matching_skills'])[:5]

    return loose_matches
