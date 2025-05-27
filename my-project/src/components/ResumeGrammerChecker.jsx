import React from "react";

export default function ResumeGrammarChecker() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-8 lg:px-16 overflow-hidden relative">
      {/* Content container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="w-full md:w-5/12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:!text-blue-600 mb-6 leading-tight">
              Check your resume for grammatical and punctuation errors
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-100 mb-8">
              A built-in content checker tool helping you stay on top of grammar
              errors and clichés
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700  dark:text-gray-100">
                  Wording and readability analysis
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700  dark:text-gray-100">
                  Eliminate typos and grammatical errors
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700  dark:text-gray-100">
                  Content suggestions based on your job and experience
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Resume mockup */}
          <div className="w-full md:w-7/12 relative">
            {/* Curved arrow graphic */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 md:-translate-x-1/2 w-1/2 h-1/2 pointer-events-none">
              <svg
                className="w-full h-full text-gray-700"
                viewBox="0 0 200 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M10,80 Q60,120 100,40 Q140,-10 190,30" />
              </svg>
            </div>

            {/* Star decoration */}
            <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
              <svg
                className="w-16 h-16 text-gray-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12,2 L15,9 L22,9 L16,14 L18,21 L12,17 L6,21 L8,14 L2,9 L9,9 Z" />
              </svg>
            </div>

            {/* Resume preview with corrections */}
            <div className="relative">
              {/* Resume preview base */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 pb-10">
                <div className="mb-6">
                  <div className="text-gray-700 uppercase font-bold text-sm">
                    JENICA
                  </div>
                  <div className="text-gray-700 uppercase font-bold">
                    SOLUTIONS ENGINEER
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/180?img=47"
                    alt="Profile"
                    className="rounded-full w-36 h-36 object-cover border-4 border-white shadow"
                  />
                </div>

                <div className="mt-8">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <span className="uppercase font-bold text-gray-600 text-sm">
                      EXPERIENCE
                    </span>
                  </div>
                </div>

                {/* Content suggestions box */}
                <div className="bg-green-50 rounded-lg p-5 mt-6">
                  <div className="font-medium text-gray-700 mb-3">
                    Content Suggestions:
                  </div>
                  <p className="text-gray-600 text-sm">
                    Directed a team of 10 software engineers to deliver 8
                    complex software implementations, resulting in a 25%
                    increase in customer satisfaction and a 15% increase in
                    customer retention.
                  </p>
                </div>
              </div>

              {/* Correction popover */}
              <div className="absolute top-6 right-4 bg-white rounded-lg shadow-xl p-4 max-w-xs z-10">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="uppercase font-bold text-gray-600 text-sm">
                    AWARDS
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-3">
                    Did you mean "improved"?
                  </p>

                  <div className="flex items-center">
                    <div className="px-4 py-2 bg-gray-100 text-gray-400 line-through rounded-l-full">
                      impovd
                    </div>
                    <div className="px-1 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="px-4 py-2 bg-green-500 text-white rounded-r-full">
                      improved
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 mb-2">
                    Include a valuable metric if possible.
                  </p>

                  <div className="mb-1 text-xs text-gray-400">Example:</div>
                  <p className="text-gray-700 text-sm">
                    Completed five projects on time and within budget, resulting
                    in an average cost savings of $50,000 per project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
