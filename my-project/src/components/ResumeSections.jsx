// import { CheckCircle, Award, User } from "lucide-react";

// export default function ResumeBuilderLanding() {
//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen p-4 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center">
//           {/* Left Section */}
//           <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
//               20+ Professionally designed resume sections
//             </h1>
//             <p className="text-gray-600  dark:text-gray-100 text-lg mb-8">
//               Express your professional history without limitations or worry
//               about how your resume looks
//             </p>

//             {/* Bulleted Points */}
//             <div className="space-y-4 mb-8">
//               {[
//                 {
//                   text: (
//                     <>
//                       Professional sections like{" "}
//                       <span className="font-semibold">
//                         Experience, Skills, Summary
//                       </span>{" "}
//                       and <span className="font-semibold">Education</span>
//                     </>
//                   ),
//                 },
//                 {
//                   text: (
//                     <>
//                       Personal sections like{" "}
//                       <span className="font-semibold">
//                         Strengths, Quotes, Books, Interests
//                       </span>{" "}
//                       and <span className="font-semibold">My Time</span>
//                     </>
//                   ),
//                 },
//                 {
//                   text: (
//                     <>
//                       Other sections like{" "}
//                       <span className="font-semibold">
//                         Certifications, Awards, Achievements, Languages
//                       </span>{" "}
//                       and <span className="font-semibold">References</span>
//                     </>
//                   ),
//                 },
//               ].map((item, idx) => (
//                 <div className="flex items-start" key={idx}>
//                   <CheckCircle
//                     className="text-green-500 mt-1 mr-3 flex-shrink-0"
//                     size={20}
//                   />
//                   <p className="text-gray-700 dark:text-gray-100">{item.text}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Skills Card */}
//             <div className="bg-white rounded-lg shadow-md max-w-md">
//               <div className="p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="font-bold text-xl text-gray-800">
//                     TECHNICAL SKILLS
//                   </h2>
//                   <div className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
//                     Recommended
//                   </div>
//                 </div>

//                 {[{ category: "Data", skills: ["Databases", "Linux", "Unix", "ETL"] },
//                   { category: "Management", skills: ["CSM", "Team Work", "Communication"] },
//                 ].map((group, i) => (
//                   <div key={i}>
//                     <h3 className="text-blue-500 font-medium mb-2">
//                       {group.category}
//                     </h3>
//                     <div className="flex flex-wrap gap-2">
//                       {group.skills.map((skill, j) => (
//                         <span
//                           key={j}
//                           className="bg-gray-100 px-4 py-1 rounded-md text-gray-700 text-sm"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-1/2 relative">
//             <div className="relative h-[550px] sm:h-[600px]">
//               {/* Decorative Arrow */}
//               <div className="hidden lg:block absolute top-40 left-0 transform -translate-x-full">
//                 <svg viewBox="0 0 100 100" className="w-32 h-32">
//                   <path
//                     d="M10,50 Q30,10 50,50 T90,50"
//                     fill="none"
//                     stroke="#a5b4fc"
//                     strokeWidth="2"
//                   />
//                   <polygon points="85,45 90,50 85,55" fill="#a5b4fc" />
//                 </svg>
//               </div>

//               {/* Cards */}
//               <div className="absolute top-6 right-0 w-2/3 bg-white rounded-lg shadow-md p-5 transform rotate-6 z-10">
//                 <h3 className="font-bold border-b border-gray-900 dark:text-gray-800 pb-1 mb-3">
//                   AWARDS
//                 </h3>
//                 <div className="flex items-center gap-2 mb-2">
//                   <Award size={16} className="text-blue-500" />
//                   <span className="text-gray-800 text-sm font-medium">
//                     Design Award
//                   </span>
//                 </div>
//                 <p className="text-gray-600 text-xs">Company, 2023</p>
//               </div>

//               <div className="absolute top-24 right-8 w-3/4 bg-white rounded-lg shadow-md p-5 transform rotate-2 z-20">
//                 <h3 className="font-bold border-b border-gray-900 dark:text-gray-800 pb-1 mb-3">
//                   MOST PROUD OF
//                 </h3>
//                 <div className="flex items-center gap-2 mb-2">
//                   <Award size={16} className="text-blue-500" />
//                   <span className="text-gray-800 text-sm font-medium">
//                     Successful Product Launch
//                   </span>
//                 </div>
//                 <p className="text-gray-600 text-xs">
//                   Developed and executed strategy...
//                 </p>
//               </div>

//               <div className="absolute top-44 right-16 w-3/4 bg-white rounded-lg shadow-md p-5 transform -rotate-1 z-30">
//                 <h3 className="font-bold border-b border-gray-900 dark:text-gray-800 pb-1 mb-3">
//                   EDUCATION
//                 </h3>
//                 <div className="mb-3">
//                   <p className="text-gray-800 font-medium">Landmark</p>
//                   <p className="text-blue-500 text-sm">
//                     Team Management and Leadership Program
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">2017 - 2018</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-800 font-medium">DeVry University</p>
//                   <p className="text-blue-500 text-sm">
//                     Bachelor's in Management
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">1997 - 2001</p>
//                 </div>
//               </div>

//               <div className="absolute top-64 right-20 w-4/5 bg-white rounded-lg shadow-md p-5 z-40">
//                 <h3 className="font-bold border-b border-gray-900 dark:text-gray-800 pb-1 mb-3">
//                   EXPERIENCE
//                 </h3>
//                 <div>
//                   <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
//                     <p className="text-gray-800 font-medium">
//                       Solutions Architect & Technical Manager
//                     </p>
//                     <p className="text-gray-500 text-xs sm:text-right">
//                       2019 - Ongoing
//                     </p>
//                   </div>
//                   <p className="text-blue-500 text-sm">Acceleron Industries</p>
//                   <p className="text-gray-500 text-xs mt-1">
//                     Greater St. Louis
//                   </p>
//                   <ul className="mt-3 space-y-2 pl-5 list-disc text-sm text-gray-700">
//                     <li>
//                       Launched and deployed technology solutions, while
//                       providing ongoing technical and functional support for
//                       10-20 clients.
//                     </li>
//                     <li>
//                       Collaborated with 20+ people from the sales and technical
//                       teams to ensure the solution was installed to client
//                       satisfaction.
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BRAD Avatar Section */}
//         <div className="w-full flex justify-center -mt-10 mb-12">
//           <div className="flex flex-col items-center text-center">
//             <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 p-1 shadow-lg overflow-hidden">
//               <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
//                 <User size={40} className="text-gray-400" />
//               </div>
//             </div>
//             <h4 className="font-bold text-gray-800 dark:text-gray-100 mt-2">BRAD</h4>
//             <p className="text-gray-600 dark:text-gray-100 text-xs max-w-[150px]">
//               MANAGED SERVICES CONSULTANT
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";

export default function ResumeTailoringTool() {
  const [companies] = useState([
    { name: "Google", color: "bg-yellow-100" },
    { name: "Dell", color: "bg-teal-100" },
    { name: "Metro", color: "bg-blue-100" },
    { name: "Spotify", color: "bg-green-100" },
    { name: "Tesla", color: "bg-purple-100" },
  ]);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col lg:flex-row p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
        {/* Left Column */}
        <div className="lg:w-1/3 lg:pr-8 mb-8 lg:mb-0" data-aos="fade-right" data-aos-duration="800">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-800 dark:!text-green-300">AMIN</h2>
              <p className="text-sm font-bold text-gray-700 dark:text-green-300">HEAD OF PRODUCT</p>
            </div>
          </div>

          <div
            className="bg-green-50 rounded-xl p-6 shadow-md"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h3 className="font-semibold text-lg dark:text-gray-600 mb-4">Job Description:</h3>
            <div className="space-y-3">
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-4/5"></div>
            </div>

            <div className="mt-8 space-y-4">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="ml-3 h-2 bg-gray-300 rounded w-5/6"></div>
                </div>
              ))}
            </div>

            <button className="mt-8 border-2 border-gray-800 px-6 py-2 text-gray-800 font-medium hover:bg-gray-100 transition-colors">
              APPLY
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3 lg:pl-4 relative overflow-hidden" data-aos="fade-left" data-aos-duration="800">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Resume tailoring based on the job you're applying for
            </h1>
            <p className="text-gray-600 dark:text-gray-100">
              Quickly ensure that your resume covers key skills and experiences by pasting the job ad you're applying for
            </p>
          </div>

          <div className="relative">
            {/* Resume container */}
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 relative z-10">
              <div className="text-xs text-gray-500 mb-1">Nenelson Barker</div>
              <div className="flex flex-wrap justify-between text-xs text-gray-400 mb-3">
                <span>555-123-4567</span>
                <span>nenelson@email.com</span>
                <span>LinkedIn Profile</span>
                <span>Location, US</span>
              </div>

              <div className="font-bold text-sm mb-1 dark:text-gray-600">SUMMARY</div>
              <p className="text-xs text-gray-600 mb-3">
                Senior UX Designer with over 8 years of experience in the field. As a creative problem-solver, I combine
                analytical thinking with strong design principles to create intuitive and visually appealing user
                experiences that drive business results.
              </p>

              <div className="font-bold text-sm mb-1 dark:text-gray-600">EDUCATION</div>
              <div className="grid grid-cols-2 text-xs mb-3">
                <div>
                  <div className="font-semibold text-gray-600">B.S. Digital Science</div>
                  <div className="text-gray-600">State University</div>
                  <div className="text-gray-500">2013-2017</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">Certificates</div>
                  <div className="text-gray-600">UX/UI Design Professional</div>
                  <div className="text-gray-500">2019</div>
                </div>
              </div>

              <div className="font-bold text-sm dark:text-gray-600 mb-1">EXPERIENCE</div>
              <div className="text-xs mb-2">
                <div className="flex justify-between">
                  <span className="font-semibold dark:text-gray-600">Senior UX Designer</span>
                  <span className="text-gray-500">2020-Present</span>
                </div>
                <div className="text-gray-600">TechCorp, Inc.</div>
                <ul className="list-disc list-inside text-gray-600 mt-1">
                  <li>Led redesign of mobile app resulting in 32% increase in user engagement</li>
                  <li>Collaborated with developers to implement design solutions</li>
                </ul>
              </div>

              <div className="text-xs">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">UX Designer</span>
                  <span className="text-gray-500">2017-2020</span>
                </div>
                <div className="text-gray-600">Design Agency</div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-bold text-sm text-gray-600 mb-1">TECH SKILLS</div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="bg-blue-100 text-xs px-2 py-1 rounded text-blue-800">Figma</span>
                    <span className="bg-green-100 text-xs px-2 py-1 rounded text-green-800">Sketch</span>
                    <span className="bg-red-100 text-xs px-2 py-1 rounded text-red-800">Adobe XD</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-600 mb-1">SOFT SKILLS</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-purple-100 text-xs px-2 py-1 rounded text-purple-800">Leadership</span>
                    <span className="bg-yellow-100 text-xs px-2 py-1 rounded text-yellow-800">Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges - adjusted */}
            <div
              className="absolute top-16 right-0 translate-x-1/2 z-20"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="flex flex-col space-y-4">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className={`${company.color} py-2 px-4 rounded-l-lg shadow-md flex items-center`}
                  >
                    <span className="font-medium text-gray-800">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curved Arrow - fixed */}
            <div
              className="absolute right-0 bottom-0 w-64 h-64 translate-x-1/4"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <path
                  d="M180,10 Q120,80 40,160 T10,190"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Checklist */}
          <div className="mt-6 space-y-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            {[
              "Skills and experience section analysis",
              "Actionable checklist of what else to add to your resume",
              "Instant comparison between your resume and the job posting",
            ].map((text, i) => (
              <div key={i} className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-100">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
