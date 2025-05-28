import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import creativeImg from "../assets/creative.png";
import modernImg from "../assets/modern.png";
import ProfessionalImg from "../assets/prof.png";
import simpleImg from "../assets/simple.png";

const featuredTemplates = [
  { id: 1, title: "Professional", category: "Professional", image: ProfessionalImg },
  { id: 2, title: "Creative", category: "Creative", image: creativeImg },
  { id: 3, title: "Modern", category: "Professional", image: modernImg },
  { id: 4, title: "Simple", category: "Professional", image: simpleImg },
];

export default function ResumeTemplate() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const scrolled = el.scrollLeft;
    const progress = maxScrollLeft ? (scrolled / maxScrollLeft) * 100 : 0;
    setScrollProgress(progress);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        /* Hide scrollbar for all browsers */
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen px-5 py-16 box-border">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Choose Your Resume Template
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-100 max-w-xl mx-auto mt-2">
            Pick a template and start creating a professional resume in minutes.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 lg:flex-wrap lg:justify-center lg:overflow-hidden hide-scrollbar"
        >
          {featuredTemplates.map((template) => (
            <div
              key={template.id}
              className="flex-shrink-0 w-[260px] bg-gray-800 rounded-xl shadow-md p-5 text-center snap-start hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl"
            >
              <img
                src={template.image}
                alt={template.title}
                className="rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg text-gray-100 font-semibold mb-2">{template.title}</h3>
              <Link to="/resume/builder">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-transform hover:scale-105">
                  Use This Template
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Custom scroll progress bar (hidden on lg and up) */}
        <div className="h-1 bg-gray-700 rounded mt-6 mx-4 lg:hidden">
          <div
            className="h-full bg-blue-500 rounded transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="text-center mt-10">
          <Link
            to="/resume/templates"
            className="inline-flex items-center text-purple-400 hover:text-purple-500 text-base font-medium"
          >
            Browse All Templates <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
