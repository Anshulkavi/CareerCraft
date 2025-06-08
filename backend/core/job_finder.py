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

import requests
from bs4 import BeautifulSoup


def count_matching_skills(job, skills):
    fields = [job.get("title", ""), job.get("location", ""), job.get("salary", "")]
    combined = " ".join(fields).lower()
    return sum(1 for skill in skills if skill.lower() in combined)


def scrape_internshala_jobs(skills):
    headers = {"User-Agent": "Mozilla/5.0"}
    results = []
    seen = set()

    for skill in skills:
        query = skill.lower()
        url = f"https://internshala.com/internships/keywords-{query}"
        try:
            res = requests.get(url, headers=headers, timeout=10)
            soup = BeautifulSoup(res.content, "html.parser")
            internships = soup.select(".container-fluid.individual_internship")

            for div in internships:
                title_elem = div.select_one(".job-internship-name a")
                if not title_elem:
                    continue

                title = title_elem.text.strip()
                url = "https://internshala.com" + title_elem.get("href", "")
                company = div.select_one(".company-name")
                location = div.select_one(".locations a")
                stipend = div.select_one(".stipend")

                job_key = (title, company.text.strip() if company else "Unknown")
                if job_key in seen:
                    continue
                seen.add(job_key)

                results.append({
                    "title": title,
                    "company_name": company.text.strip() if company else "Unknown",
                    "location": location.text.strip() if location else "No location",
                    "salary": stipend.text.strip() if stipend else "No stipend",
                    "url": url,
                    "description": ""
                })

                if len(results) >= 10:
                    return results

        except Exception as e:
            print(f"[Internshala] Error for '{skill}': {e}")

    return results


def fetch_relevant_jobs(skills):
    print(f"[DEBUG] Fetching Internshala jobs for: {skills}")
    return scrape_internshala_jobs(skills)
