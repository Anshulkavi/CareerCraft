import React from "react";
import modernTemplate from "../assets/modern.png";

const Hero = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-16 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              <span>Enhancv's </span>
              <span className="text-indigo-600">Resume Builder</span>
              <br />
              <span>helps you get hired at top</span>
              <br />
              <span>companies</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-md font-medium transition-colors">
                Build Your Resume
              </button>
              <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 py-3 px-8 rounded-md font-medium transition-colors">
                Get Your Resume Score
              </button>
            </div>

            <div>
              <p className="text-gray-700 dark:text-gray-100 font-medium mb-4">
                Loved by interviewers at
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/JPMorgan_Chase_Logo.svg"
                  alt="JPMorgan Chase"
                  className="h-8 opacity-70"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Salesforce_logo.svg"
                  alt="Salesforce"
                  className="h-8 opacity-70"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                  alt="AWS"
                  className="h-6 opacity-70"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="h-8 opacity-70"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/PwC_Logo.svg"
                  alt="PWC"
                  className="h-8 opacity-70"
                />
              </div>
            </div>
          </div>

          {/* Right side - Resume Preview */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative ml-auto w-4/5">
              {/* Main resume */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 transform rotate-3">
                <img
                  src={modernTemplate}
                  alt="Resume Example"
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>

              {/* "Hired" badge */}
              <div className="absolute -top-6 left-4">
                <div className="bg-white text-green-500 font-medium px-6 py-1 rounded-full border border-green-200 shadow-sm">
                  HIRED
                </div>
              </div>

              {/* Settings panels */}
              <div className="absolute -bottom-4 -left-20 bg-white rounded-lg shadow-lg p-4 w-64 transform -rotate-3">
                <div className="mb-4">
                  <p className="text-gray-500 text-xs mb-1">PAGE MARGINS: 1</p>
                  <div className="relative h-2 bg-gray-200 rounded-full">
                    <div className="w-1/3 h-full bg-green-500 rounded-full"></div>
                    <div className="absolute -top-1 left-1/3 w-4 h-4 rounded-full bg-white border-2 border-green-500"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>narrow</span>
                    <span>wide</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">
                    SECTION SPACING: 3
                  </p>
                  <div className="relative h-2 bg-gray-200 rounded-full">
                    <div className="w-2/3 h-full bg-green-500 rounded-full"></div>
                    <div className="absolute -top-1 left-2/3 w-4 h-4 rounded-full bg-white border-2 border-green-500"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>compact</span>
                    <span>more space</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:!text-gray-100">
            Pick a resume template and build your resume in minutes!
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Hero;
