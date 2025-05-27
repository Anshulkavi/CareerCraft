import { CheckCircle, Award, User } from "lucide-react";

export default function ResumeBuilderLanding() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              20+ Professionally designed resume sections
            </h1>
            <p className="text-gray-600  dark:text-gray-100 text-lg mb-8">
              Express your professional history without limitations or worry
              about how your resume looks
            </p>

            {/* Bulleted Points */}
            <div className="space-y-4 mb-8">
              {[
                {
                  text: (
                    <>
                      Professional sections like{" "}
                      <span className="font-semibold">
                        Experience, Skills, Summary
                      </span>{" "}
                      and <span className="font-semibold">Education</span>
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Personal sections like{" "}
                      <span className="font-semibold">
                        Strengths, Quotes, Books, Interests
                      </span>{" "}
                      and <span className="font-semibold">My Time</span>
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Other sections like{" "}
                      <span className="font-semibold">
                        Certifications, Awards, Achievements, Languages
                      </span>{" "}
                      and <span className="font-semibold">References</span>
                    </>
                  ),
                },
              ].map((item, idx) => (
                <div className="flex items-start" key={idx}>
                  <CheckCircle
                    className="text-green-500 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-700 dark:text-gray-100">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Skills Card */}
            <div className="bg-white rounded-lg shadow-md max-w-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-gray-800">
                    TECHNICAL SKILLS
                  </h2>
                  <div className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                </div>

                {[{ category: "Data", skills: ["Databases", "Linux", "Unix", "ETL"] },
                  { category: "Management", skills: ["CSM", "Team Work", "Communication"] },
                ].map((group, i) => (
                  <div key={i}>
                    <h3 className="text-blue-500 font-medium mb-2">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, j) => (
                        <span
                          key={j}
                          className="bg-gray-100 px-4 py-1 rounded-md text-gray-700 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[550px] sm:h-[600px]">
              {/* Decorative Arrow */}
              <div className="hidden lg:block absolute top-40 left-0 transform -translate-x-full">
                <svg viewBox="0 0 100 100" className="w-32 h-32">
                  <path
                    d="M10,50 Q30,10 50,50 T90,50"
                    fill="none"
                    stroke="#a5b4fc"
                    strokeWidth="2"
                  />
                  <polygon points="85,45 90,50 85,55" fill="#a5b4fc" />
                </svg>
              </div>

              {/* Cards */}
              <div className="absolute top-6 right-0 w-2/3 bg-white rounded-lg shadow-md p-5 transform rotate-6 z-10">
                <h3 className="font-bold border-b border-gray-900 dark:text-gray-800 pb-1 mb-3">
                  AWARDS
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <Award size={16} className="text-blue-500" />
                  <span className="text-gray-800 text-sm font-medium">
                    Design Award
                  </span>
                </div>
                <p className="text-gray-600 text-xs">Company, 2023</p>
              </div>

              <div className="absolute top-24 right-8 w-3/4 bg-white rounded-lg shadow-md p-5 transform rotate-2 z-20">
                <h3 className="font-bold border-b border-gray-900 dark:text-gray-800 pb-1 mb-3">
                  MOST PROUD OF
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <Award size={16} className="text-blue-500" />
                  <span className="text-gray-800 text-sm font-medium">
                    Successful Product Launch
                  </span>
                </div>
                <p className="text-gray-600 text-xs">
                  Developed and executed strategy...
                </p>
              </div>

              <div className="absolute top-44 right-16 w-3/4 bg-white rounded-lg shadow-md p-5 transform -rotate-1 z-30">
                <h3 className="font-bold border-b border-gray-900 dark:text-gray-800 pb-1 mb-3">
                  EDUCATION
                </h3>
                <div className="mb-3">
                  <p className="text-gray-800 font-medium">Landmark</p>
                  <p className="text-blue-500 text-sm">
                    Team Management and Leadership Program
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2017 - 2018</p>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">DeVry University</p>
                  <p className="text-blue-500 text-sm">
                    Bachelor's in Management
                  </p>
                  <p className="text-xs text-gray-500 mt-1">1997 - 2001</p>
                </div>
              </div>

              <div className="absolute top-64 right-20 w-4/5 bg-white rounded-lg shadow-md p-5 z-40">
                <h3 className="font-bold border-b border-gray-900 dark:text-gray-800 pb-1 mb-3">
                  EXPERIENCE
                </h3>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                    <p className="text-gray-800 font-medium">
                      Solutions Architect & Technical Manager
                    </p>
                    <p className="text-gray-500 text-xs sm:text-right">
                      2019 - Ongoing
                    </p>
                  </div>
                  <p className="text-blue-500 text-sm">Acceleron Industries</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Greater St. Louis
                  </p>
                  <ul className="mt-3 space-y-2 pl-5 list-disc text-sm text-gray-700">
                    <li>
                      Launched and deployed technology solutions, while
                      providing ongoing technical and functional support for
                      10-20 clients.
                    </li>
                    <li>
                      Collaborated with 20+ people from the sales and technical
                      teams to ensure the solution was installed to client
                      satisfaction.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BRAD Avatar Section */}
        <div className="w-full flex justify-center -mt-10 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 p-1 shadow-lg overflow-hidden">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <User size={40} className="text-gray-400" />
              </div>
            </div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 mt-2">BRAD</h4>
            <p className="text-gray-600 dark:text-gray-100 text-xs max-w-[150px]">
              MANAGED SERVICES CONSULTANT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
