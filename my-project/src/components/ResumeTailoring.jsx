// import { useState } from "react";
// import { CheckCircle, ArrowRight } from "lucide-react";

// export default function ResumeTailoringTool() {
//   const [jobDescription, setJobDescription] = useState("");
//   const [resume, setResume] = useState("");
//   const [companies, setCompanies] = useState([
//     { name: "Google", color: "bg-yellow-100" },
//     { name: "Dell", color: "bg-teal-100" },
//     { name: "Metro", color: "bg-blue-100" },
//     { name: "Spotify", color: "bg-green-100" },
//     { name: "Tesla", color: "bg-purple-100" },
//   ]);

//   return (
//     <div className="flex p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
//       {/* Left Column - Profile and Job Description */}
//       <div className="w-1/3 pr-8">
//         <div className="flex flex-col items-center mb-8">
//           <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
//             <img
//               src="https://i.pravatar.cc/150?img=12"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="text-center">
//             <h2 className="text-lg font-bold text-gray-800 dark:!text-green-300">
//               AMIN
//             </h2>
//             <p className="text-sm font-bold text-gray-700 dark:text-green-300">
//               HEAD OF PRODUCT
//             </p>
//           </div>
//         </div>

//         <div className="bg-green-50 rounded-xl p-6 shadow-md">
//           <h3 className="font-semibold text-lg dark:text-gray-600 mb-4">
//             Job Description:
//           </h3>
//           <div className="space-y-3">
//             <div className="h-3 bg-gray-300 rounded w-full"></div>
//             <div className="h-3 bg-gray-300 rounded w-5/6"></div>
//             <div className="h-3 bg-gray-300 rounded w-full"></div>
//             <div className="h-3 bg-gray-300 rounded w-4/5"></div>
//           </div>

//           <div className="mt-8 space-y-4">
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
//               <div className="ml-3 h-2 bg-gray-300 rounded w-5/6"></div>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
//               <div className="ml-3 h-2 bg-gray-300 rounded w-4/6"></div>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
//               <div className="ml-3 h-2 bg-gray-300 rounded w-5/6"></div>
//             </div>
//           </div>

//           <button className="mt-8 border-2 border-gray-800 px-6 py-2 text-gray-800 font-medium hover:bg-gray-100 transition-colors">
//             APPLY
//           </button>
//         </div>
//       </div>

//       {/* Right Column - Resume and Analysis */}
//       <div className="w-2/3 pl-4">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
//             Resume tailoring based on the job you're applying for
//           </h1>
//           <p className="text-gray-600 dark:text-gray-100">
//             Quickly ensure that your resume covers key skills and experiences by
//             pasting the job ad you're applying for
//           </p>
//         </div>

//         <div className="relative">
//           {/* Resume image container */}
//           <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 relative z-10 overflow-hidden">
//             {/* Placeholder resume content - remove this when using real resume image */}
//             <div className="relative bg-white rounded-md">
//               <div className="text-xs text-gray-500 mb-1">Nenelson Barker</div>
//               <div className="flex justify-between text-xs text-gray-400 mb-3">
//                 <span>555-123-4567</span>
//                 <span>nenelson@email.com</span>
//                 <span>LinkedIn Profile</span>
//                 <span>Location, US</span>
//               </div>

//               <div className="font-bold text-sm mb-1 dark:text-gray-600">
//                 SUMMARY
//               </div>
//               <div className="text-xs text-gray-600 mb-3">
//                 Senior UX Designer with over 8 years of experience in the field.
//                 As a creative problem-solver, I combine analytical thinking with
//                 strong design principles to create intuitive and visually
//                 appealing user experiences that drive business results.
//               </div>

//               <div className="font-bold text-sm mb-1 dark:text-gray-600">
//                 EDUCATION
//               </div>
//               <div className="grid grid-cols-2 text-xs mb-3">
//                 <div>
//                   <div className="font-semibold text-gray-600">
//                     B.S. Digital Science
//                   </div>
//                   <div className="text-gray-600">State University</div>
//                   <div className="text-gray-500">2013-2017</div>
//                 </div>
//                 <div className="text-right">
//                   <div className="font-semibold">Certificates</div>
//                   <div className="text-gray-600">UX/UI Design Professional</div>
//                   <div className="text-gray-500">2019</div>
//                 </div>
//               </div>

//               <div className="font-bold text-sm dark:text-gray-600 mb-1">
//                 EXPERIENCE
//               </div>
//               <div className="text-xs mb-2">
//                 <div className="flex justify-between">
//                   <span className="font-semibold dark:text-gray-600">
//                     Senior UX Designer
//                   </span>
//                   <span className="text-gray-500">2020-Present</span>
//                 </div>
//                 <div className="text-gray-600">TechCorp, Inc.</div>
//                 <ul className="list-disc list-inside text-gray-600 mt-1">
//                   <li>
//                     Led redesign of mobile app resulting in 32% increase in user
//                     engagement
//                   </li>
//                   <li>
//                     Collaborated with developers to implement design solutions
//                   </li>
//                 </ul>
//               </div>

//               <div className="text-xs">
//                 <div className="flex justify-between">
//                   <span className="font-semibold text-gray-600">
//                     UX Designer
//                   </span>
//                   <span className="text-gray-500">2017-2020</span>
//                 </div>
//                 <div className="text-gray-600">Design Agency</div>
//               </div>

//               <div className="mt-3 grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="font-bold text-sm text-gray-600 dark:text-gray-600 mb-1">
//                     TECH SKILLS
//                   </div>
//                   <div className="flex flex-wrap gap-1 mb-2">
//                     <span className="bg-blue-100 dark:bg-blue-600 text-xs px-2 py-1 rounded text-blue-800 dark:text-white">
//                       Figma
//                     </span>
//                     <span className="bg-green-100 dark:bg-green-600 text-xs px-2 py-1 rounded text-green-800 dark:text-white">
//                       Sketch
//                     </span>
//                     <span className="bg-red-100 dark:bg-red-600 text-xs px-2 py-1 rounded text-red-800 dark:text-white">
//                       Adobe XD
//                     </span>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="font-bold text-sm text-gray-600 dark:text-gray-600 mb-1">
//                     SOFT SKILLS
//                   </div>
//                   <div className="flex flex-wrap gap-1">
//                     <span className="bg-purple-100 dark:bg-purple-600 text-xs px-2 py-1 rounded text-purple-800 dark:text-white">
//                       Leadership
//                     </span>
//                     <span className="bg-yellow-100 dark:bg-yellow-500 text-xs px-2 py-1 rounded text-yellow-800 dark:text-black">
//                       Problem Solving
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Company badges floating over resume */}
//           <div className="absolute right-0 top-16 z-20">
//             <div className="flex flex-col space-y-4">
//               {companies.map((company, index) => (
//                 <div
//                   key={index}
//                   className={`${company.color} py-2 px-4 rounded-l-lg shadow-md flex items-center`}
//                 >
//                   <span className="font-medium text-gray-800">
//                     {company.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Curved arrow */}
//           <div className="absolute right-0 bottom-0 w-64 h-64 -mr-8">
//             <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
//               <path
//                 d="M180,10 Q120,80 40,160 T10,190"
//                 stroke="black"
//                 strokeWidth="2"
//                 fill="none"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Features checklist */}
//         <div className="mt-6 space-y-2">
//           <div className="flex items-center">
//             <CheckCircle className="text-green-500 mr-2" size={20} />
//             <span className="text-gray-700 dark:text-gray-100">
//               Skills and experience section analysis
//             </span>
//           </div>
//           <div className="flex items-center">
//             <CheckCircle className="text-green-500 mr-2" size={20} />
//             <span className="text-gray-700 dark:text-gray-100">
//               Actionable checklist of what else to add to your resume
//             </span>
//           </div>
//           <div className="flex items-center">
//             <CheckCircle className="text-green-500 mr-2" size={20} />
//             <span className="text-gray-700 dark:text-gray-100">
//               Instant comparison between your resume and the job posting
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ResumeTailoringTool() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState("");
  const [companies, setCompanies] = useState([
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
    <div className="flex p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      {/* Left Column - Profile and Job Description */}
      <div className="w-1/3 pr-8" data-aos="fade-right" data-aos-duration="800">
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-800 dark:!text-green-300">
              AMIN
            </h2>
            <p className="text-sm font-bold text-gray-700 dark:text-green-300">
              HEAD OF PRODUCT
            </p>
          </div>
        </div>

        <div
          className="bg-green-50 rounded-xl p-6 shadow-md"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <h3 className="font-semibold text-lg dark:text-gray-600 mb-4">
            Job Description:
          </h3>
          <div className="space-y-3">
            <div className="h-3 bg-gray-300 rounded w-full"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
            <div className="h-3 bg-gray-300 rounded w-full"></div>
            <div className="h-3 bg-gray-300 rounded w-4/5"></div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="ml-3 h-2 bg-gray-300 rounded w-5/6"></div>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="ml-3 h-2 bg-gray-300 rounded w-4/6"></div>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="ml-3 h-2 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>

          <button className="mt-8 border-2 border-gray-800 px-6 py-2 text-gray-800 font-medium hover:bg-gray-100 transition-colors">
            APPLY
          </button>
        </div>
      </div>

      {/* Right Column - Resume and Analysis */}
      <div className="w-2/3 pl-4" data-aos="fade-left" data-aos-duration="800">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Resume tailoring based on the job you're applying for
          </h1>
          <p className="text-gray-600 dark:text-gray-100">
            Quickly ensure that your resume covers key skills and experiences by
            pasting the job ad you're applying for
          </p>
        </div>

        <div className="relative">
          {/* Resume image container */}
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 relative z-10 overflow-hidden">
            {/* Placeholder resume content */}
            <div className="relative bg-white rounded-md">
              <div className="text-xs text-gray-500 mb-1">Nenelson Barker</div>
              <div className="flex justify-between text-xs text-gray-400 mb-3">
                <span>555-123-4567</span>
                <span>nenelson@email.com</span>
                <span>LinkedIn Profile</span>
                <span>Location, US</span>
              </div>

              <div className="font-bold text-sm mb-1 dark:text-gray-600">
                SUMMARY
              </div>
              <div className="text-xs text-gray-600 mb-3">
                Senior UX Designer with over 8 years of experience in the field.
                As a creative problem-solver, I combine analytical thinking with
                strong design principles to create intuitive and visually
                appealing user experiences that drive business results.
              </div>

              <div className="font-bold text-sm mb-1 dark:text-gray-600">
                EDUCATION
              </div>
              <div className="grid grid-cols-2 text-xs mb-3">
                <div>
                  <div className="font-semibold text-gray-600">
                    B.S. Digital Science
                  </div>
                  <div className="text-gray-600">State University</div>
                  <div className="text-gray-500">2013-2017</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">Certificates</div>
                  <div className="text-gray-600">UX/UI Design Professional</div>
                  <div className="text-gray-500">2019</div>
                </div>
              </div>

              <div className="font-bold text-sm dark:text-gray-600 mb-1">
                EXPERIENCE
              </div>
              <div className="text-xs mb-2">
                <div className="flex justify-between">
                  <span className="font-semibold dark:text-gray-600">
                    Senior UX Designer
                  </span>
                  <span className="text-gray-500">2020-Present</span>
                </div>
                <div className="text-gray-600">TechCorp, Inc.</div>
                <ul className="list-disc list-inside text-gray-600 mt-1">
                  <li>
                    Led redesign of mobile app resulting in 32% increase in user
                    engagement
                  </li>
                  <li>
                    Collaborated with developers to implement design solutions
                  </li>
                </ul>
              </div>

              <div className="text-xs">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    UX Designer
                  </span>
                  <span className="text-gray-500">2017-2020</span>
                </div>
                <div className="text-gray-600">Design Agency</div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-bold text-sm text-gray-600 dark:text-gray-600 mb-1">
                    TECH SKILLS
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-600 text-xs px-2 py-1 rounded text-blue-800 dark:text-white">
                      Figma
                    </span>
                    <span className="bg-green-100 dark:bg-green-600 text-xs px-2 py-1 rounded text-green-800 dark:text-white">
                      Sketch
                    </span>
                    <span className="bg-red-100 dark:bg-red-600 text-xs px-2 py-1 rounded text-red-800 dark:text-white">
                      Adobe XD
                    </span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-600 dark:text-gray-600 mb-1">
                    SOFT SKILLS
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-purple-100 dark:bg-purple-600 text-xs px-2 py-1 rounded text-purple-800 dark:text-white">
                      Leadership
                    </span>
                    <span className="bg-yellow-100 dark:bg-yellow-500 text-xs px-2 py-1 rounded text-yellow-800 dark:text-black">
                      Problem Solving
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company badges floating over resume */}
          <div
            className="absolute right-0 top-16 z-20"
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
                  <span className="font-medium text-gray-800">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Curved arrow */}
          <div
            className="absolute right-0 bottom-0 w-64 h-64 -mr-8"
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

        {/* Features checklist */}
        <div className="mt-6 space-y-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <span className="text-gray-700 dark:text-gray-100">
              Skills and experience section analysis
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <span className="text-gray-700 dark:text-gray-100">
              Actionable checklist of what else to add to your resume
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <span className="text-gray-700 dark:text-gray-100">
              Instant comparison between your resume and the job posting
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
