export default function SimpleTemplate({ resumeData }) {
    const { basics, summary, experience, education, skills, strengths, languages } = resumeData;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 font-sans text-gray-900">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">John Aarts</h1>
        <p className="text-xl text-gray-600 mb-4">Customer Success Manager</p>

        <div className="flex flex-wrap gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+1-952-140-6600</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8 10a2 2 0 114 0 2 2 0 01-4 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>john.xander@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            <span>linkedin.com/@_XanderAarts_</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Amsterdam, Netherlands</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Summary */}
          <section>
            <h2 className="text-xl font-bold text-black mb-3 pb-1 border-b-2 border-black">SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Enthusiastic Customer Success Managers with seven years of experience coordinating Customer Success staff
              and analyzing complaints, developing new procedures, and implementing customer retention campaigns. Proven
              project team leader and problem solver. Focused on building excellent productive client relationships,
              quickly resolving issues to assure their business needs are met.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">EXPERIENCE</h2>

            <div className="space-y-6">
              {/* Senior Customer Success Manager */}
              <div>
                <h3 className="text-lg font-semibold text-black">Senior Customer Success Manager</h3>
                <p className="text-gray-600 font-medium">Blanchette</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>2017 - Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Amsterdam, Netherlands</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-sm">Blanchette is data-driven marketing database company</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>
                    • Achieved an average 115% Net Retention Rate (NRR) on a target of 102%, for five consecutive
                    quarters
                  </li>
                  <li>• Developed an end user training curriculum for Microsoft Office 365</li>
                  <li>• Partnered with AE to grow book of business 25% YoY</li>
                  <li>
                    • Managed an EMEA book of business of USD $2-2.5M in ARR - achieved and exceeded renewal and up-sell
                    targets
                  </li>
                </ul>
              </div>

              {/* Customer Success Manager */}
              <div>
                <h3 className="text-lg font-semibold text-black">Customer Success Manager</h3>
                <p className="text-gray-600 font-medium">Dufour</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>2015 - 2017</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Amsterdam, Netherlands</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-sm">
                  Dufour is the leading Competitive Intelligence tool for Search Ads
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Achieved 100% retention rate and restore the relationship for at-risk accounts</li>
                  <li>
                    • Proactively managed customer relationships and lifetime value; drove the recurring revenue up by
                    25%
                  </li>
                  <li>• Created strategic success plans for my client base that resulted in 100% customer outreach</li>
                  <li>
                    • Negotiate renewal contracts with a combined retention rate of 102% of monthly reoccurring revenue
                  </li>
                  <li>• Improved Customer Retention Rate from 65% to 78%</li>
                </ul>
              </div>

              {/* Sr. Customer Success Manager */}
              <div>
                <h3 className="text-lg font-semibold text-black">Sr. Customer Success Manager</h3>
                <p className="text-gray-600 font-medium">Bernier</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>2011 - 2015</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Amsterdam, Netherlands</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-sm">
                  Bernier is a leader in data-driven marketing and cloud-based marketing technology
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Joined the company as employee #7 and reported directly to the CEO</li>
                  <li>• Managed book of business with 250 clients and over $2M ARR</li>
                  <li>
                    • Converted 34% of all accounts into sales reference customers and surpassing team goals on a
                    consistent basis
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black text-base">Master of Sociology</h3>
                <p className="text-gray-600 text-sm">University of Amsterdam</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>2013 - 2014</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Amsterdam</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black text-base">Bachelor of Economics</h3>
                <p className="text-gray-600 text-sm">University of Amsterdam</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>2009 - 2012</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Amsterdam</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">SKILLS</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-gray-100 px-3 py-2 text-center font-medium">CRM</div>
              <div className="bg-gray-100 px-3 py-2 text-center font-medium">Salesforce</div>
              <div className="bg-gray-100 px-3 py-2 text-center font-medium">NetSuite</div>
              <div className="bg-gray-100 px-3 py-2 text-center font-medium">MS Excel</div>
              <div className="bg-gray-100 px-3 py-2 text-center font-medium">Hubspot</div>
              <div className="bg-gray-100 px-3 py-2 text-center font-medium">Mailchimp</div>
              <div className="bg-gray-100 px-3 py-2 text-center font-medium">CI Tools</div>
              <div className="bg-gray-100 px-3 py-2 text-center font-medium">SimilarWeb</div>
            </div>
          </section>

          {/* Strengths */}
          <section>
            <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">STRENGTHS</h2>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-black mb-1">Negotiation and presentation</h4>
                <p className="text-gray-700">
                  Understanding negotiation dynamics and presenting information in a clear and effective way.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Research</h4>
                <p className="text-gray-700">Always prepared for the customer & his industry specifics</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Customer Relationship</h4>
                <p className="text-gray-700">Always providing support to both prospective and existing customers.</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">LANGUAGES</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-black">English</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">Native</p>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-black">Dutch</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">Proficient</p>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer
      <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
        <span>www.enhancv.com</span>
        <div className="flex items-center gap-2">
          <span>Powered by</span>
          <span className="font-semibold">∞ Enhancv</span>
        </div>
      </div> */}
    </div>
  )
}


// export default function SimpleTemplate({ resumeData = {} }) {
//   const {
//     basics = {
//       name: "John Aarts",
//       label: "Customer Success Manager",
//       phone: "+1-952-140-6600",
//       email: "john.xander@gmail.com",
//       linkedin: "linkedin.com/@_XanderAarts_",
//       location: "Amsterdam, Netherlands",
//     },
//     summary = `Enthusiastic Customer Success Manager with 7+ years of experience coordinating teams, analyzing complaints, and improving customer retention. Proven leader and problem solver.`,
//     experience = [
//       {
//         title: "Senior Customer Success Manager",
//         company: "Blanchette",
//         startDate: "2017",
//         endDate: "Present",
//         location: "Amsterdam, Netherlands",
//         description: "Blanchette is a data-driven marketing database company.",
//         highlights: [
//           "Achieved 115% Net Retention Rate for 5 consecutive quarters",
//           "Developed training curriculum for Microsoft Office 365",
//           "Partnered with AE to grow business 25% YoY",
//         ],
//       },
//     ],
//     education = [
//       {
//         degree: "Master of Sociology",
//         institution: "University of Amsterdam",
//         startDate: "2013",
//         endDate: "2014",
//         location: "Amsterdam",
//       },
//     ],
//     skills = ["CRM", "Salesforce", "NetSuite", "MS Excel", "Hubspot"],
//     strengths = [
//       {
//         title: "Negotiation and presentation",
//         detail: "Understanding negotiation dynamics and presenting clearly.",
//       },
//     ],
//     languages = [
//       { name: "English", level: "Native", proficiency: 5 },
//       { name: "Dutch", level: "Proficient", proficiency: 4 },
//     ],
//   } = resumeData;

//   const renderDots = (count) =>
//     Array.from({ length: 5 }).map((_, i) => (
//       <div
//         key={i}
//         className={`w-3 h-3 rounded-full ${i < count ? "bg-gray-800" : "bg-gray-300"}`}
//       ></div>
//     ));

//   return (
//     <div className="max-w-4xl mx-auto bg-white p-8 font-sans text-gray-900">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-black mb-2">{basics.name}</h1>
//         <p className="text-xl text-gray-600 mb-4">{basics.label}</p>

//         <div className="flex flex-wrap gap-6 text-sm text-gray-700">
//           {basics.phone && <div className="flex items-center gap-2">📞 {basics.phone}</div>}
//           {basics.email && <div className="flex items-center gap-2">📧 {basics.email}</div>}
//           {basics.linkedin && <div className="flex items-center gap-2">🔗 {basics.linkedin}</div>}
//           {basics.location && <div className="flex items-center gap-2">📍 {basics.location}</div>}
//         </div>
//       </div>

//       {/* Main Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left */}
//         <div className="lg:col-span-2 space-y-8">
//           {/* Summary */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-3 pb-1 border-b-2 border-black">SUMMARY</h2>
//             <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
//           </section>

//           {/* Experience */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">EXPERIENCE</h2>
//             {experience.map((exp, index) => (
//               <div key={index} className="space-y-2 mb-6">
//                 <h3 className="text-lg font-semibold text-black">{exp.title}</h3>
//                 <p className="text-gray-600 font-medium">{exp.company}</p>
//                 <div className="flex items-center gap-4 text-sm text-gray-600">
//                   <span>{exp.startDate} - {exp.endDate}</span>
//                   <span>{exp.location}</span>
//                 </div>
//                 <p className="text-gray-700 text-sm">{exp.description}</p>
//                 <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
//                   {(exp.highlights || []).map((item, i) => (
//                     <li key={i}>• {item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </section>
//         </div>

//         {/* Right */}
//         <div className="space-y-8">
//           {/* Education */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">EDUCATION</h2>
//             {education.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <h3 className="font-semibold text-black text-base">{edu.degree}</h3>
//                 <p className="text-gray-600 text-sm">{edu.institution}</p>
//                 <div className="flex gap-4 text-sm text-gray-600">
//                   <span>{edu.startDate} - {edu.endDate}</span>
//                   <span>{edu.location}</span>
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* Skills */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">SKILLS</h2>
//             <div className="grid grid-cols-2 gap-2 text-sm">
//               {skills.map((skill, index) => (
//                 <div key={index} className="bg-gray-100 px-3 py-2 text-center font-medium">{skill}</div>
//               ))}
//             </div>
//           </section>

//           {/* Strengths */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">STRENGTHS</h2>
//             <div className="space-y-4 text-sm">
//               {strengths.map((s, index) => (
//                 <div key={index}>
//                   <h4 className="font-semibold text-black mb-1">{s.title}</h4>
//                   <p className="text-gray-700">{s.detail}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Languages */}
//           <section>
//             <h2 className="text-xl font-bold text-black mb-4 pb-1 border-b-2 border-black">LANGUAGES</h2>
//             <div className="space-y-4">
//               {languages.map((lang, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="font-semibold text-black">{lang.name}</span>
//                   </div>
//                   <p className="text-xs text-gray-600 mb-2">{lang.level}</p>
//                   <div className="flex gap-1">{renderDots(lang.proficiency || 0)}</div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }
