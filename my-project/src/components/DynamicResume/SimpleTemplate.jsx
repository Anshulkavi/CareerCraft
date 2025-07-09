// export default function SimpleTemplate({ resumeData }) {
//     const { basics, summary, experience, education, skills, strengths, languages } = resumeData;

//   return (
//     <div className="max-w-4xl mx-auto bg-white p-8 font-sans text-gray-900">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-black mb-2">John Aarts</h1>
//         <p className="text-xl text-gray-600 mb-4">Customer Success Manager</p>

//         <div className="flex flex-wrap gap-6 text-sm text-gray-700">
//           <div className="flex items-center gap-2">
//             <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//             </svg>
//             <span>+1-952-140-6600</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//               <path
//                 fillRule="evenodd"
//                 d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8 10a2 2 0 114 0 2 2 0 01-4 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span>john.xander@gmail.com</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//               <path
//                 fillRule="evenodd"
//                 d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span>linkedin.com/@_XanderAarts_</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//               <path
//                 fillRule="evenodd"
//                 d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span>Amsterdam, Netherlands</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-8">
//           {/* Summary */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-3 pb-1 border-b-2 border-black">SUMMARY</h2>
//             <p className="text-gray-700 leading-relaxed text-sm">
//               Enthusiastic Customer Success Managers with seven years of experience coordinating Customer Success staff
//               and analyzing complaints, developing new procedures, and implementing customer retention campaigns. Proven
//               project team leader and problem solver. Focused on building excellent productive client relationships,
//               quickly resolving issues to assure their business needs are met.
//             </p>
//           </section>

//           {/* Experience */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">EXPERIENCE</h2>

//             <div className="space-y-6">
//               {/* Senior Customer Success Manager */}
//               <div>
//                 <h3 className="text-lg font-semibold text-black">Senior Customer Success Manager</h3>
//                 <p className="text-gray-600 font-medium">Blanchette</p>
//                 <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>2017 - Present</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Amsterdam, Netherlands</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-2 text-sm">Blanchette is data-driven marketing database company</p>
//                 <ul className="text-gray-700 space-y-1 text-sm">
//                   <li>
//                     • Achieved an average 115% Net Retention Rate (NRR) on a target of 102%, for five consecutive
//                     quarters
//                   </li>
//                   <li>• Developed an end user training curriculum for Microsoft Office 365</li>
//                   <li>• Partnered with AE to grow book of business 25% YoY</li>
//                   <li>
//                     • Managed an EMEA book of business of USD $2-2.5M in ARR - achieved and exceeded renewal and up-sell
//                     targets
//                   </li>
//                 </ul>
//               </div>

//               {/* Customer Success Manager */}
//               <div>
//                 <h3 className="text-lg font-semibold text-black">Customer Success Manager</h3>
//                 <p className="text-gray-600 font-medium">Dufour</p>
//                 <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>2015 - 2017</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Amsterdam, Netherlands</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-2 text-sm">
//                   Dufour is the leading Competitive Intelligence tool for Search Ads
//                 </p>
//                 <ul className="text-gray-700 space-y-1 text-sm">
//                   <li>• Achieved 100% retention rate and restore the relationship for at-risk accounts</li>
//                   <li>
//                     • Proactively managed customer relationships and lifetime value; drove the recurring revenue up by
//                     25%
//                   </li>
//                   <li>• Created strategic success plans for my client base that resulted in 100% customer outreach</li>
//                   <li>
//                     • Negotiate renewal contracts with a combined retention rate of 102% of monthly reoccurring revenue
//                   </li>
//                   <li>• Improved Customer Retention Rate from 65% to 78%</li>
//                 </ul>
//               </div>

//               {/* Sr. Customer Success Manager */}
//               <div>
//                 <h3 className="text-lg font-semibold text-black">Sr. Customer Success Manager</h3>
//                 <p className="text-gray-600 font-medium">Bernier</p>
//                 <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>2011 - 2015</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Amsterdam, Netherlands</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-2 text-sm">
//                   Bernier is a leader in data-driven marketing and cloud-based marketing technology
//                 </p>
//                 <ul className="text-gray-700 space-y-1 text-sm">
//                   <li>• Joined the company as employee #7 and reported directly to the CEO</li>
//                   <li>• Managed book of business with 250 clients and over $2M ARR</li>
//                   <li>
//                     • Converted 34% of all accounts into sales reference customers and surpassing team goals on a
//                     consistent basis
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-8">
//           {/* Education */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">EDUCATION</h2>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-semibold text-black text-base">Master of Sociology</h3>
//                 <p className="text-gray-600 text-sm">University of Amsterdam</p>
//                 <div className="flex items-center gap-4 text-sm text-gray-600">
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>2013 - 2014</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Amsterdam</span>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-black text-base">Bachelor of Economics</h3>
//                 <p className="text-gray-600 text-sm">University of Amsterdam</p>
//                 <div className="flex items-center gap-4 text-sm text-gray-600">
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>2009 - 2012</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Amsterdam</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Skills */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">SKILLS</h2>
//             <div className="grid grid-cols-2 gap-2 text-sm">
//               <div className="bg-gray-100 px-3 py-2 text-center font-medium">CRM</div>
//               <div className="bg-gray-100 px-3 py-2 text-center font-medium">Salesforce</div>
//               <div className="bg-gray-100 px-3 py-2 text-center font-medium">NetSuite</div>
//               <div className="bg-gray-100 px-3 py-2 text-center font-medium">MS Excel</div>
//               <div className="bg-gray-100 px-3 py-2 text-center font-medium">Hubspot</div>
//               <div className="bg-gray-100 px-3 py-2 text-center font-medium">Mailchimp</div>
//               <div className="bg-gray-100 px-3 py-2 text-center font-medium">CI Tools</div>
//               <div className="bg-gray-100 px-3 py-2 text-center font-medium">SimilarWeb</div>
//             </div>
//           </section>

//           {/* Strengths */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">STRENGTHS</h2>
//             <div className="space-y-4 text-sm">
//               <div>
//                 <h4 className="font-semibold text-black mb-1">Negotiation and presentation</h4>
//                 <p className="text-gray-700">
//                   Understanding negotiation dynamics and presenting information in a clear and effective way.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-black mb-1">Research</h4>
//                 <p className="text-gray-700">Always prepared for the customer & his industry specifics</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-black mb-1">Customer Relationship</h4>
//                 <p className="text-gray-700">Always providing support to both prospective and existing customers.</p>
//               </div>
//             </div>
//           </section>

//           {/* Languages */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">LANGUAGES</h2>
//             <div className="space-y-4">
//               <div>
//                 <div className="flex justify-between items-center mb-1">
//                   <span className="font-semibold text-black">English</span>
//                 </div>
//                 <p className="text-xs text-gray-600 mb-2">Native</p>
//                 <div className="flex gap-1">
//                   <div className="w-3 h-3 rounded-full bg-gray-800"></div>
//                   <div className="w-3 h-3 rounded-full bg-gray-800"></div>
//                   <div className="w-3 h-3 rounded-full bg-gray-800"></div>
//                   <div className="w-3 h-3 rounded-full bg-gray-800"></div>
//                   <div className="w-3 h-3 rounded-full bg-gray-800"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex justify-between items-center mb-1">
//                   <span className="font-semibold text-black">Dutch</span>
//                 </div>
//                 <p className="text-xs text-gray-600 mb-2">Proficient</p>
//                 <div className="flex gap-1">
//                   <div className="w-3 h-3 rounded-full bg-gray-800"></div>
//                   <div className="w-3 h-3 rounded-full bg-gray-800"></div>
//                   <div className="w-3 h-3 rounded-full bg-gray-800"></div>
//                   <div className="w-3 h-3 rounded-full bg-gray-800"></div>
//                   <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   )
// }
import { normalizeUrl, getDisplayUrl } from "@/utils/urlUtils";

export default function SimpleTemplate({ resumeData }) {
  const { personal } = resumeData || {};

  const firstName = personal.firstName || "John";
  const lastName = personal.lastName || "Aarts";
  const jobTitle = personal.jobTitle || "Customer Success Manager";
  const phone = personal.phone || "+91-952XX-066XX";
  const email = personal.email || "careercraft325@gmail.com";
  const linkedin = personal.linkedin || "linkedin.com/Anshulkavi";
  const location = personal.location || "Indore, India";
  console.log("ResumeData received:", resumeData);

  const summary =
    resumeData?.personal?.summary ||
    "Enthusiastic Customer Success Managers with seven years of experience coordinating Customer Success staff and analyzing complaints, developing new procedures, and implementing customer retention campaigns. Proven project team leader and problem solver. Focused on building excellent productive client relationships,quickly resolving issues to assure their business needs are met.";

  const educationData =
    resumeData.education?.length > 0 &&
    resumeData.education.some((edu) => edu.degree || edu.institution)
      ? resumeData.education
      : [
          {
            degree: "Master of Sociology",
            institution: "University of Amsterdam",
            startDate: "2013",
            endDate: "2014",
            location: "Amsterdam",
          },
          {
            degree: "Bachelor of Economics",
            institution: "University of Amsterdam",
            startDate: "2009",
            endDate: "2012",
            location: "Amsterdam",
          },
        ];

  const dummyExperience = [
    {
      jobTitle: "Senior Customer Success Manager",
      company: "Blanchette",
      startDate: "2017",
      endDate: "Present",
      location: "Amsterdam, Netherlands",
      responsibilities: `Achieved an average 115% Net Retention Rate (NRR) on a target of 102%, for five consecutive quarters.
        Developed an end user training curriculum for Microsoft Office 365.
        Partnered with AE to grow book of business 25% YoY.
        Managed an EMEA book of business of USD $2-2.5M in ARR - achieved and exceeded renewal and up-sell targets.`,
    },
    {
      jobTitle: "Customer Success Manager",
      company: "Dufour",
      startDate: "2015",
      endDate: "2017",
      location: "Amsterdam, Netherlands",
      responsibilities: `Achieved 100% retention rate and restore the relationship for at-risk accounts.
        Proactively managed customer relationships and lifetime value; drove the recurring revenue up by 25%.
         Created strategic success plans for my client base that resulted in 100% customer outreach.
        Negotiate renewal contracts with a combined retention rate of 102% of monthly reoccurring revenue.
        Improved Customer Retention Rate from 65% to 78%.`,
    },
    // {
    //   jobTitle: "Sr. Customer Success Manager",
    //   company: "Bernier",
    //   startDate: "2011",
    //   endDate: "2015",
    //   location: "Amsterdam, Netherlands",
    //   responsibilities: `Joined the company as employee #7 and reported directly to the CEO.
    //     Managed book of business with 250 clients and over $2M ARR.
    //     Converted 34% of all accounts into sales reference customers and surpassing team goals on a consistent basis.`,
    // },
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

  const skills =
    resumeData.skills?.technical || resumeData.skills?.soft
      ? [
          ...(resumeData.skills.technical?.split(",").map((s) => s.trim()) ||
            []),
          ...(resumeData.skills.soft?.split(",").map((s) => s.trim()) || []),
        ]
      : [
          "CRM",
          "Salesforce",
          "NetSuite",
          "MS Excel",
          "Hubspot",
          "Mailchimp",
          "CI Tools",
          "SimilarWeb",
        ];

  const userAchievements =
    resumeData.achievements?.filter(
      (ach) => ach.title?.trim() || ach.description?.trim()
    ) || [];

  const dummyAchievements = [
    {
      title: "Negotiation and presentation",
      description: "Clear communicator and strong in deal closures.",
    },
    {
      title: "Research",
      description: "Prepared with industry-specific knowledge.",
    },
    {
      title: "Customer Relationship",
      description: "Building lasting bonds with clients.",
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Implemented a successful landing page optimization strategy, lifting conversion rates by 18%.",
    },
  ];

  const achievements =
    userAchievements.length > 0 ? userAchievements : dummyAchievements;

  const dummyLanguages = [
    { name: "English", level: "Native", proficiency: 5 },
    { name: "Dutch", level: "Proficient", proficiency: 4 },
  ];

  const hasUserLangs =
    resumeData.languages &&
    resumeData.languages.some((lang) => lang.name?.trim());

  const langs = hasUserLangs ? resumeData.languages : dummyLanguages;

  const dummyProjects = [
    {
      title: "AI-Powered Resume Builder",
      description:
        "A web app that uses GPT to generate resume content, matching job descriptions with smart suggestions.",
      techStack: ["React", "Tailwind CSS", "OpenAI API"],
      githubLink: "https://github.com/user/repo", // GitHub repository
      demoLink: "https://demo.example.com", // Live demo
      link: "https://github.com/example/resume-builder",
    },
    {
      title: "E-Commerce Backend",
      description:
        "Developed a scalable backend for an e-commerce site with JWT auth, cart, and payment gateway.",
      techStack: ["Django", "PostgreSQL", "Stripe"],
      githubLink: "https://github.com/user/repo", // GitHub repository
      demoLink: "https://demo.example.com", // Live demo
      link: "https://github.com/example/ecom-backend",
    },
  ];

  const hasUserProjects =
    Array.isArray(resumeData.projects) &&
    resumeData.projects.some(
      (proj) =>
        proj.title?.trim() ||
        proj.description?.trim() ||
        proj.githubLink?.trim() ||
        proj.demoLink?.trim() ||
        proj.link?.trim()
    );

  const projects = hasUserProjects ? resumeData.projects : dummyProjects;

  // Ab aage UI rendering – ab crash nahi karega, aur dummy show hoga unless actual data aaya ho.

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 font-sans text-gray-900">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          {firstName + " " + lastName}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{jobTitle}</p>
        <div className="flex flex-wrap gap-6 text-sm text-gray-700">
          {/* Phone */}
          <div className="flex items-center gap-2 text-gray-700">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{phone}</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a
              href={`mailto:${email}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {email}
            </a>
          </div>
          {/* LinkedIn */}
          <div className="flex items-center gap-2 text-gray-700">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>

            <a
              href={normalizeUrl(linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {getDisplayUrl(linkedin)}
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side */}
        <div className="lg:col-span-2 space-y-8">
          {/* Summary */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-black mb-2 pb-1">
              SUMMARY
            </h2>
            <p className="text-sm text-gray-700">{summary}</p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-black mb-2 pb-1">
              {/* EXPERIENCE */}
              INTERNSHIP
            </h2>
            <div className="space-y-4">
              {experiences?.map((exp, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold">{exp.jobTitle}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm mb-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
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

          {/* PROJECTS SECTION */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-black mb-2 pb-1">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {projects?.map((proj, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold">
                    {proj.title || "Project Title"}
                  </h3>
                  {proj.description ? (
                    <ul className="list-disc ml-6 text-gray-700 space-y-2 text-sm">
                      {proj.description
                        .split("\n")
                        .filter((line) => line.trim() !== "")
                        .map((line, i) => (
                          <li key={i}>
                            {line
                              .replace(/^•\s*/, "") // remove bullet if already present
                              .replace(/[.,](?=\S)/g, " ") // add space after period/comma if missing
                              .trim()}
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 italic">Project description</p>
                  )}

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm mt-1 mb-2">
                    {/* Tech Stack */}
                    {proj.techStack && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          {Array.isArray(proj.techStack)
                            ? proj.techStack.join(", ")
                            : proj.techStack}
                        </span>
                      </div>
                    )}

                    {/* GitHub Link */}
                    {proj.githubLink && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <a
                          href={proj.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          View Code
                        </a>
                      </div>
                    )}

                    {/* Live Demo Link */}
                    {proj.demoLink && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <a
                          href={proj.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          Live Demo
                        </a>
                      </div>
                    )}

                    {/* Fallback for generic project link */}
                    {proj.link && !proj.githubLink && !proj.demoLink && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          View Project
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right side */}
        <div className="space-y-8">
          {/* Education */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-black mb-2 pb-1">
              EDUCATION
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx}>
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    {/* Date Icon */}
                    <svg
                      className="w-4 h-4"
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
                      className="w-4 h-4"
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
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-black mb-2 pb-1">
              SKILLS
            </h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 px-3 py-1 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Strengths */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-black mb-2 pb-1">
              Achievements
            </h2>
            {achievements.map((ach, i) => (
              <div key={i}>
                <p className="font-semibold">{ach.title}</p>
                <p className="text-sm text-gray-600">{ach.description}</p>
              </div>
            ))}
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-black mb-2 pb-1">
              LANGUAGES
            </h2>
            <div className="space-y-3">
              {langs.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="leading-tight">
                    <div className="font-semibold text-black">{lang.name}</div>
                    <div className="text-sm text-gray-600">{lang.level}</div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`w-3 h-3 rounded-full ${
                          lang.proficiency >= dot
                            ? "bg-gray-500"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
