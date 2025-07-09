import { normalizeUrl, getDisplayUrl } from "@/utils/urlUtils";
export default function ModernTemplate({
  resumeData,
  customSectionConfig,
  isReplaced,
}) {
  const { personal } = resumeData || {};

  console.log("ResumeData received:", resumeData);

  const dummyExperience = [
    {
      jobTitle: "Senior Digital Marketing Specialist",
      company: "Tech Innovate",
      startDate: "01/2022",
      endDate: "Present",
      location: "San Francisco, CA",
      responsibilities: `Led the development and execution of comprehensive digital marketing campaigns across Meta, Google, and TikTok, increasing user acquisition by 45% within 12 months.
Managed a $500K quarterly budget for paid acquisition channels, optimizing spend for a 30% improvement in ROAS.
Implemented advanced targeting and retargeting strategies that reduced CPA by 20%, while increasing conversion rates by 15%.
Conducted A/B testing on over 100 ad creatives, identifying top performers that led to a 25% increase in engagement.
Collaborated with cross-functional teams to align marketing efforts with product launches, resulting in a 40% increase in product adoption.
Analyzed campaign data to provide actionable insights, leading to a strategic pivot that captured a new user segment and contributed to a 35% increase in market share.`,
    },
    {
      jobTitle: "Digital Marketing Manager",
      company: "MarketGuru",
      startDate: "06/2019",
      endDate: "12/2021",
      location: "San Francisco, CA",
      responsibilities: `Managed and scaled paid search and social campaigns across Snapchat and Apple Search Ads, achieving a 50% increase in leads.
Designed and executed a landing page optimization strategy that lifted conversion rates by 18%.
Utilized Looker and Google Analytics to monitor campaign performance, driving a 10% decrease in bounce rates.
Orchestrated the creative testing process, enhancing ad performance and contributing to a 30% increase in CTR.
Collaborated with engineering to integrate new tracking systems, improving data accuracy and campaign efficiency.`,
    },
    {
      jobTitle: "Performance Marketing Analyst",
      company: "AdVantage Media",
      startDate: "03/2017",
      endDate: "05/2019",
      location: "San Francisco, CA",
      responsibilities: `Analyzed performance data across multiple digital channels, identifying trends that informed strategic decisions.
Supported the execution of campaigns that resulted in a 15% increase in user engagement.
Developed and maintained reporting dashboards for real-time performance tracking, enhancing team responsiveness.
Assisted in managing a portfolio of digital ads, optimizing for a 10% improvement in ad efficiency.`,
    },
  ];

  const hasUserExperience =
    Array.isArray(resumeData.experience) &&
    resumeData.experience.some(
      (exp) =>
        exp.company?.trim() ||
        exp.jobTitle?.trim() ||
        exp.startDate?.trim() ||
        exp.endDate?.trim() ||
        exp.location?.trim() ||
        exp.responsibilities?.trim()
    );

  const experiences = hasUserExperience
    ? resumeData.experience
    : dummyExperience;

  console.log("Rendering experiences:", experiences);

  const educationData =
    resumeData.education?.length > 0 &&
    resumeData.education.some((edu) => edu.degree || edu.institution)
      ? resumeData.education
      : [
          {
            degree: "Master of Science in Marketing Analytics",
            institution: "University of California, Berkeley",
            location: "Berkeley, CA",
            startDate: "01/2015",
            endDate: "01/2017",
          },
          {
            degree: "Bachelor of Science in Business Administration",
            institution: "San Francisco State University",
            location: "San Francisco, CA",
            startDate: "01/2011",
            endDate: "01/2015",
          },
        ];

  const dummyLanguages = [
    { name: "English", level: "Native", proficiency: 5 },
    { name: "Spanish", level: "Advanced", proficiency: 3 },
  ];

  const hasUserLangs =
    resumeData.languages &&
    resumeData.languages.some((lang) => lang.name?.trim());

  const langs = hasUserLangs ? resumeData.languages : dummyLanguages;

  const renderCustomSection = () => {
    const { title, entries } = customSectionConfig || {};

    if (!entries || entries.length === 0) return null;

    return (
      <section>
        <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
          {title?.toUpperCase() || "Custom Section"}
        </h2>

        <div className="space-y-4">
          {entries.map((entry, idx) => (
            <div key={idx}>
              {/* Title */}
              {entry.title && (
                <h3 className="font-semibold text-black text-base">
                  {entry.title}
                </h3>
              )}

              {/* Description */}
              {entry.description && (
                <p className="text-gray-700 text-sm mt-1 whitespace-pre-line">
                  {entry.description}
                </p>
              )}

              {/* Year or extra line */}
              {entry.year && (
                <p className="text-sm text-gray-500 mt-1 italic">
                  {entry.year}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 font-sans text-gray-900">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-black mb-2 tracking-wide">
            {(personal?.firstName || "ELLEN") +
              " " +
              (personal?.lastName || "JOHNSON")}
          </h1>
          <p className="text-xl text-cyan-500 mb-4 font-medium">
            {personal?.jobTitle ||
              "Digital Marketing Manager | Growth Hacking | Data Analysis"}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a
                href={`mailto:${personal?.email || "careercraft325@gmail.com"}`}
                className="text-blue-600 underline hover:text-blue-800"
              >
                {personal?.email || "careercraft325@gmail.com"}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>

              <a
                href={normalizeUrl(
                  personal?.linkedin || "linkedin.com/in/Anshulkavi"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {getDisplayUrl(
                  personal?.linkedin || "linkedin.com/in/Anshulkavi"
                )}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{personal?.location || "San Francisco, California"}</span>
            </div>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="ml-8">
          <img
            src={
              personal?.photoUrl?.startsWith("data:image")
                ? personal.photoUrl
                : "https://randomuser.me/api/portraits/women/3.jpg"
            }
            alt={`${personal?.firstName || "John"} ${
              personal?.lastName || "Doe"
            }`}
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-100"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Experience */}
          <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              EXPERIENCE
            </h2>

            <div className="space-y-6">
              {experiences?.map((exp, idx) => (
                <div key={idx}>
                  {/* Job Title */}
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {exp.jobTitle || "Job Title"}
                  </h3>

                  {/* Company Name + Date + Location in one row */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm mb-2">
                    {/* Company */}
                    <p className="text-cyan-500 font-medium">
                      {exp.company || "Company Name"}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-1 text-gray-600 font-normal ml-auto">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        {exp.startDate || "Start"} - {exp.endDate || "End"}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-gray-600 font-normal mr-10">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{exp.location || "Location"}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  {exp.responsibilities && (
                    <ul className="list-disc ml-6 text-gray-700 space-y-2 text-sm">
                      {exp.responsibilities
                        .split("\n")
                        .filter((line) => line.trim() !== "")
                        .map((line, i) => (
                          <li key={i}>
                            {line
                              .replace(/^•\s*/, "") // remove bullet if already present
                              .replace(/[.,](?=\S)/g, " ") // space after comma/period if missing
                              .trim()}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          {/* <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              EDUCATION
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black text-base">
                  Master of Science in Marketing Analytics
                </h3>
                <p className="text-cyan-500 text-sm font-medium">
                  University of California, Berkeley
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>01/2015 - 01/2017</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Berkeley, CA</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black text-base">
                  Bachelor of Science in Business Administration
                </h3>
                <p className="text-cyan-500 text-sm font-medium">
                  San Francisco State University
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>01/2011 - 01/2015</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              EDUCATION
            </h2>

            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-black text-base">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-500 text-sm font-medium">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      {/* Date Icon */}
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {/* Location Icon */}
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          {/* <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              LANGUAGES
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-black">English</span>
                  <span className="text-sm text-gray-600 ml-4">Native</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-black">Spanish</span>
                  <span className="text-sm text-gray-600 ml-4">Advanced</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </section> */}
          {/* Languages */}

          {isReplaced("languages")
            ? renderCustomSection()
            : langs.length > 0 && (
                <section>
                  <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
                    LANGUAGES
                  </h2>
                  <div className="space-y-3">
                    {langs.map((lang, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <span className="font-semibold text-black">
                            {lang.name}
                          </span>
                          <span className="text-sm text-gray-600 ml-4">
                            {lang.level}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div
                              key={dot}
                              className={`w-3 h-3 rounded-full ${
                                lang.proficiency >= dot
                                  ? "bg-gray-800"
                                  : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Summary */}
          <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              SUMMARY
            </h2>
            {/* <p className="text-gray-700 leading-relaxed text-sm">
              Motivated Digital Marketing Manager with over 3 years of
              experience in driving user acquisition and growth through
              strategic paid campaigns. Expert in data analysis, creative
              optimization, and cross-functional collaboration to achieve
              business objectives. Proven track record of scaling campaigns and
              enhancing ROI.
            </p> */}
            <p className="text-gray-700 leading-relaxed text-sm">
              {resumeData?.personal?.summary?.trim()
                ? resumeData.personal.summary.trim()
                : "Motivated Digital Marketing Manager with over 3 years of experience in driving user acquisition and growth through strategic paid campaigns. Expert in data analysis, creative optimization, and cross-functional collaboration to achieve business objectives. Proven track record of scaling campaigns and enhancing ROI."}
            </p>
          </section>

          {/* Key Achievements
          <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              KEY ACHIEVEMENTS
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-cyan-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    45% User Acquisition Increase
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Spearheaded digital marketing initiatives at Tech Innovate
                    that led to a 45% increase in user acquisition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-cyan-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    30% ROAS Improvement
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Optimized ad spend across digital platforms at Tech
                    Innovate, resulting in a 30% improvement in ROAS.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-cyan-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    Market Share Expansion
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Identified and captured a new user segment, contributing to
                    a 35% increase in market share.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-cyan-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">
                    Conversion Rate Optimization
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Implemented a successful landing page optimization strategy,
                    lifting conversion rates by 18%.
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          {isReplaced("achievements")
            ? renderCustomSection()
            : (() => {
                const userAchievements =
                  resumeData.achievements?.filter(
                    (ach) => ach.title?.trim() || ach.description?.trim()
                  ) || [];

                const dummyAchievements = [
                  {
                    title: "45% User Acquisition Increase",
                    description:
                      "Spearheaded digital marketing initiatives at Tech Innovate that led to a 45% increase in user acquisition.",
                  },
                  {
                    title: "30% ROAS Improvement",
                    description:
                      "Optimized ad spend across digital platforms at Tech Innovate, resulting in a 30% improvement in ROAS.",
                  },
                  {
                    title: "Market Share Expansion",
                    description:
                      "Identified and captured a new user segment, contributing to a 35% increase in market share.",
                  },
                  {
                    title: "Conversion Rate Optimization",
                    description:
                      "Implemented a successful landing page optimization strategy, lifting conversion rates by 18%.",
                  },
                ];

                const achievementsToShow =
                  userAchievements.length > 0
                    ? userAchievements
                    : dummyAchievements;

                return (
                  <section>
                    <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
                      KEY ACHIEVEMENTS
                    </h2>
                    <div className="space-y-4">
                      {achievementsToShow.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-4 h-4 text-cyan-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-black mb-1">
                              {ach.title}
                            </h4>
                            <p className="text-gray-700 text-sm">
                              {ach.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })()}

          {/* Skills */}
          {/* <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              SKILLS
            </h2>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Data Analysis
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Paid Acquisition
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Retargeting
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                ROAS Optimization
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Cross-Functional Collaboration
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Google Analytics
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Looker</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Appsflyer
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Meta Advertising
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Google Ads
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                TikTok Ads
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Snapchat Ads
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">SQL</span>
            </div>
          </section> */}
          <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              SKILLS
            </h2>
            <div className="flex flex-wrap gap-2 text-sm">
              {(resumeData.skills?.technical?.trim() ||
              resumeData.skills?.soft?.trim()
                ? [
                    ...(resumeData.skills.technical?.split(",") || []),
                    ...(resumeData.skills.soft?.split(",") || []),
                  ]
                : [
                    "Data Analysis",
                    "Paid Acquisition",
                    "Retargeting",
                    "ROAS Optimization",
                    "Cross-Functional Collaboration",
                    "Google Analytics",
                    "Looker",
                    "Appsflyer",
                    "Meta Advertising",
                    "Google Ads",
                    "TikTok Ads",
                    "Snapchat Ads",
                    "SQL",
                  ]
              ).map((skill, idx) => (
                <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </section>

          {/* Certification */}
          {/* <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              CERTIFICATION
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-cyan-500 mb-1">
                  Advanced Google Analytics
                </h4>
                <p className="text-gray-700 text-sm">
                  Focused on mastering Google Analytics for deep insights into
                  user behavior, provided by Google.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-500 mb-1">
                  Effective Creative Testing
                </h4>
                <p className="text-gray-700 text-sm">
                  Specialized in evaluating ad creative performance to maximize
                  engagement, offered by Coursera.
                </p>
              </div>
            </div>
          </section> */}
          <section>
            <h2 className="text-lg font-bold text-gray-700 mb-4 pb-2 border-b border-gray-300 uppercase tracking-wide">
              CERTIFICATION
            </h2>

            <div className="space-y-4">
              {(resumeData.certifications?.some(
                (cert) => cert.title?.trim() || cert.description?.trim()
              )
                ? resumeData.certifications
                : [
                    {
                      title: "Advanced Google Analytics",
                      description:
                        "Focused on mastering Google Analytics for deep insights into user behavior, provided by Google.",
                    },
                    {
                      title: "Effective Creative Testing",
                      description:
                        "Specialized in evaluating ad creative performance to maximize engagement, offered by Coursera.",
                    },
                  ]
              ).map((cert, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-cyan-500 mb-1">
                    {cert.title || "Certification Title"}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {cert.description || "Certification description goes here."}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
