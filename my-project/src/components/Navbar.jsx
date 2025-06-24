// import React, { useState, useRef, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "./Logo"; // Adjust the import path as necessary

// export default function Navbar() {
//   const location = useLocation();
//   const isResumeBuilder = location.pathname === "/resume/builder";

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const navRef = useRef(null);
//   const menuRef = useRef(null);

//   // Toggle mobile menu open/close
//   const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

//   // Toggle dropdown open/close on click
//   const handleDropdownClick = (menuName) =>
//     setActiveDropdown((prev) => (prev === menuName ? null : menuName));

//   // Open dropdown on mouse enter (desktop)
//   const handleMouseEnter = (menuName) => setActiveDropdown(menuName);

//   // Close dropdown on mouse leave (desktop)
//   const handleMouseLeave = () => setActiveDropdown(null);

//   // Close all dropdowns
//   const closeDropdowns = () => setActiveDropdown(null);

//   // Close mobile menu
//   const closeMenu = () => setIsMobileMenuOpen(false);

//   // Close dropdowns & mobile menu if clicked outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         navRef.current &&
//         !navRef.current.contains(event.target) &&
//         (!menuRef.current || !menuRef.current.contains(event.target))
//       ) {
//         setIsMobileMenuOpen(false);
//         closeDropdowns();
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <header className="bg-white shadow sticky top-0 z-50">
//       <nav
//         ref={navRef}
//         className="container mx-auto flex items-center justify-between px-4 md:px-8 py-3"
//         style={{
//           position: isResumeBuilder ? "relative" : "sticky",
//           top: isResumeBuilder ? "auto" : 0,
//           zIndex: 1000,
//         }}
//       >
//         {/* Logo */}
//         <div className="flex items-center space-x-2 flex-shrink-0">
//           <Logo />
//         </div>

//         {/* Builder Mode Buttons */}
//         {isResumeBuilder ? (
//           <div className="flex space-x-3">
//             <button className="btn-outline">Settings</button>
//             <button className="btn-outline">Download</button>
//             <button className="btn-outline">Share</button>
//             <button className="btn-primary">Save</button>
//           </div>
//         ) : (
//           <>
//             {/* Desktop Menu */}
//             <div
//               ref={menuRef}
//               className={`hidden md:flex space-x-6 items-center text-gray-700 font-medium`}
//             >
//               {/* Resume Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("resume")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   onClick={() => handleDropdownClick("resume")}
//                   className="hover:text-green-600 focus:outline-none"
//                   aria-haspopup="true"
//                   aria-expanded={activeDropdown === "resume"}
//                 >
//                   Resume
//                 </button>
//                 {activeDropdown === "resume" && (
//                   <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
//                     <ul>
//                       <li>
//                         <Link
//                           to="/resume/builder"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           Builder
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/resume/templates"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           Templates
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/resume/guides"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           Guides
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/resume/examples"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           Examples
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               {/* Cover Letter Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("coverletter")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   onClick={() => handleDropdownClick("coverletter")}
//                   className="hover:text-green-600 focus:outline-none"
//                   aria-haspopup="true"
//                   aria-expanded={activeDropdown === "coverletter"}
//                 >
//                   Cover Letter
//                 </button>
//                 {activeDropdown === "coverletter" && (
//                   <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
//                     <ul>
//                       <li>
//                         <Link
//                           to="/cover-letter/builder"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           Builder
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/cover-letter/templates"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           Templates
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/cover-letter/guides"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           Guides
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/cover-letter/examples"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           Examples
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               {/* Blog Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("blog")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   onClick={() => handleDropdownClick("blog")}
//                   className="hover:text-green-600 focus:outline-none"
//                   aria-haspopup="true"
//                   aria-expanded={activeDropdown === "blog"}
//                 >
//                   Blog
//                 </button>
//                 {activeDropdown === "blog" && (
//                   <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
//                     <ul>
//                       <li>
//                         <Link
//                           to="/blog/resources"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           Resources
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/blog/faqs"
//                           className="block px-4 py-2 hover:bg-green-50"
//                           onClick={closeMenu}
//                         >
//                           FAQs
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               {/* Simple Links */}
//               <Link
//                 to="/pricing"
//                 className="hover:text-green-600"
//                 onClick={closeMenu}
//               >
//                 Pricing
//               </Link>
//               <Link
//                 to="/for-organizations"
//                 className="hover:text-green-600"
//                 onClick={closeMenu}
//               >
//                 For Organizations
//               </Link>
//             </div>

//             {/* Desktop Buttons */}
//             <div className="hidden md:flex space-x-4 items-center">
//               <Link to="/signup">
//                 <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
//                   Login
//                 </button>
//               </Link>
//               <Link to="/resume/builder">
//                 <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
//                   Create Resume
//                 </button>
//               </Link>
//             </div>

//             {/* Hamburger - Mobile */}
//             <button
//               onClick={toggleMenu}
//               className="md:hidden flex flex-col space-y-1 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <span
//                 className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
//                   isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
//                 }`}
//               />
//               <span
//                 className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-300 ease-in-out ${
//                   isMobileMenuOpen ? "opacity-0" : "opacity-100"
//                 }`}
//               />
//               <span
//                 className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
//                   isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
//                 }`}
//               />
//             </button>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//               <div
//                 ref={menuRef}
//                 className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden"
//               >
//                 {/* Resume Dropdown Mobile */}
//                 <div className="relative">
//   <button
//     type="button"
//     onClick={() => handleDropdownClick("resume")}
//     className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
//     aria-expanded={activeDropdown === "resume"}
//   >
//     Resume
//     <svg
//       className="h-5 w-5 text-gray-400"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//       aria-hidden="true"
//     >
//       <path
//         fillRule="evenodd"
//         d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
//         clipRule="evenodd"
//       />
//     </svg>
//   </button>

//   {activeDropdown === "resume" && (
//     <div
//       className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//       role="menu"
//       aria-orientation="vertical"
//       aria-labelledby="menu-button"
//       tabIndex="-1"
//     >
//       <div className="py-1" role="none">
//         <Link
//           to="/resume/builder"
//           className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
//           role="menuitem"
//           tabIndex="-1"
//           onClick={closeMenu}
//         >
//           Builder
//         </Link>
//         <Link
//           to="/resume/templates"
//           className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
//           role="menuitem"
//           tabIndex="-1"
//           onClick={closeMenu}
//         >
//           Templates
//         </Link>
//         <Link
//           to="/resume/guides"
//           className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
//           role="menuitem"
//           tabIndex="-1"
//           onClick={closeMenu}
//         >
//           Guides
//         </Link>
//         <Link
//           to="/resume/examples"
//           className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
//           role="menuitem"
//           tabIndex="-1"
//           onClick={closeMenu}
//         >
//           Examples
//         </Link>
//       </div>
//     </div>
//   )}
// </div>

//                 {/* Cover Letter Dropdown Mobile */}
//                 <div>
//                   <button
//                     onClick={() =>
//                       setActiveDropdown((prev) =>
//                         prev === "coverletter" ? null : "coverletter"
//                       )
//                     }
//                     className="w-full text-left px-4 py-3 border-b border-gray-200 font-medium hover:bg-gray-100 flex justify-between items-center"
//                     aria-expanded={activeDropdown === "coverletter"}
//                     aria-haspopup="true"
//                   >
//                     Cover Letter
//                     <span className="ml-2">
//                       {activeDropdown === "coverletter" ? "▲" : "▼"}
//                     </span>
//                   </button>
//                   {activeDropdown === "coverletter" && (
//                     <ul className="pl-6 bg-gray-50">
//                       <li>
//                         <Link
//                           to="/cover-letter/builder"
//                           className="block py-2 hover:text-green-600"
//                           onClick={() => {
//                             closeMenu();
//                             closeDropdowns();
//                           }}
//                         >
//                           Builder
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/cover-letter/templates"
//                           className="block py-2 hover:text-green-600"
//                           onClick={() => {
//                             closeMenu();
//                             closeDropdowns();
//                           }}
//                         >
//                           Templates
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/cover-letter/guides"
//                           className="block py-2 hover:text-green-600"
//                           onClick={() => {
//                             closeMenu();
//                             closeDropdowns();
//                           }}
//                         >
//                           Guides
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/cover-letter/examples"
//                           className="block py-2 hover:text-green-600"
//                           onClick={() => {
//                             closeMenu();
//                             closeDropdowns();
//                           }}
//                         >
//                           Examples
//                         </Link>
//                       </li>
//                     </ul>
//                   )}
//                 </div>

//                 {/* Blog Dropdown Mobile */}
//                 <div>
//                   <button
//                     onClick={() =>
//                       setActiveDropdown((prev) =>
//                         prev === "blog" ? null : "blog"
//                       )
//                     }
//                     className="w-full text-left px-4 py-3 border-b border-gray-200 font-medium hover:bg-gray-100 flex justify-between items-center"
//                     aria-expanded={activeDropdown === "blog"}
//                     aria-haspopup="true"
//                   >
//                     Blog
//                     <span className="ml-2">
//                       {activeDropdown === "blog" ? "▲" : "▼"}
//                     </span>
//                   </button>
//                   {activeDropdown === "blog" && (
//                     <ul className="pl-6 bg-gray-50">
//                       <li>
//                         <Link
//                           to="/blog/resources"
//                           className="block py-2 hover:text-green-600"
//                           onClick={() => {
//                             closeMenu();
//                             closeDropdowns();
//                           }}
//                         >
//                           Resources
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/blog/faqs"
//                           className="block py-2 hover:text-green-600"
//                           onClick={() => {
//                             closeMenu();
//                             closeDropdowns();
//                           }}
//                         >
//                           FAQs
//                         </Link>
//                       </li>
//                     </ul>
//                   )}
//                 </div>

//                 {/* Simple Links Mobile */}
//                 <Link
//                   to="/pricing"
//                   className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100"
//                   onClick={() => {
//                     closeMenu();
//                     closeDropdowns();
//                   }}
//                 >
//                   Pricing
//                 </Link>
//                 <Link
//                   to="/for-organizations"
//                   className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100"
//                   onClick={() => {
//                     closeMenu();
//                     closeDropdowns();
//                   }}
//                 >
//                   For Organizations
//                 </Link>

//                 {/* Mobile Buttons */}
//                 <div className="flex flex-col space-y-2 p-4 border-t border-gray-200">
//                   <Link to="/signup" onClick={closeMenu}>
//                     <button className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
//                       Login
//                     </button>
//                   </Link>
//                   <Link to="/resume/builder" onClick={closeMenu}>
//                     <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
//                       Create Resume
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo"; // Adjust the import path as necessary
import { useResume } from "../context/ResumeContext";
// import ResumeDownloadButton from "./ui/ResumeDownloadButton";

export default function Navbar() {
  const location = useLocation();
  const isResumeBuilder = location.pathname === "/resume/builder";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navRef = useRef(null);
  const menuRef = useRef(null);

  // Toggle mobile menu open/close
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Toggle dropdown open/close on click
  const handleDropdownClick = (menuName) =>
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));

  // Open dropdown on mouse enter (desktop only)
  const handleMouseEnter = (menuName) => {
    // Only handle mouse enter on desktop
    if (window.innerWidth >= 768) {
      setActiveDropdown(menuName);
    }
  };

  // Close dropdown on mouse leave (desktop only)
  const handleMouseLeave = () => {
    // Only handle mouse leave on desktop
    if (window.innerWidth >= 768) {
      setActiveDropdown(null);
    }
  };

  // Close all dropdowns
  const closeDropdowns = () => setActiveDropdown(null);

  // Close mobile menu
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Close dropdowns & mobile menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        (!menuRef.current || !menuRef.current.contains(event.target))
      ) {
        setIsMobileMenuOpen(false);
        closeDropdowns();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { onDownload } = useResume();

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <nav
        ref={navRef}
        className="container mx-auto flex items-center justify-between px-4 md:px-8 py-3"
        style={{
          position: isResumeBuilder ? "relative" : "sticky",
          top: isResumeBuilder ? "auto" : 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Logo />
        </div>

        {/* Builder Mode Buttons */}
        {isResumeBuilder ? (
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition">
              Settings
            </button>
            {/* <button
  onClick={onDownload}
  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
>
  Download
</button> */}
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Share
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              Save
            </button>
          </div>
        ) : (
          <>
            {/* Desktop Menu */}
            <div
              ref={menuRef}
              className={`hidden md:flex space-x-6 items-center text-gray-700 font-medium`}
            >
              {/* Resume Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resume")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleDropdownClick("resume")}
                  className="hover:text-green-600 dark:hover:text-green-400 text-gray-800 dark:text-gray-200 focus:outline-none py-2"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === "resume"}
                >
                  Resume
                </button>
                {activeDropdown === "resume" && (
                  <div className="absolute top-full -mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                    <ul>
                      <li>
                        <Link
                          to="/resume/builder"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-white"
                          onClick={closeDropdowns}
                        >
                          Builder
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resume/templates"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-white"
                          onClick={closeDropdowns}
                        >
                          Templates
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resume/guides"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-white"
                          onClick={closeDropdowns}
                        >
                          Guides
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resume/examples"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-white"
                          onClick={closeDropdowns}
                        >
                          Examples
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Cover Letter Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("coverletter")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleDropdownClick("coverletter")}
                  className="hover:text-green-600 dark:hover:text-green-400 text-gray-800 dark:text-gray-200 focus:outline-none py-2"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === "coverletter"}
                >
                  Cover Letter
                </button>
                {activeDropdown === "coverletter" && (
                  <div className="absolute top-full -mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                    <ul>
                      <li>
                        <Link
                          to="/cover-letter/builder"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-white"
                          onClick={closeDropdowns}
                        >
                          Builder
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cover-letter/templates"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-white"
                          onClick={closeDropdowns}
                        >
                          Templates
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cover-letter/guides"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-white"
                          onClick={closeDropdowns}
                        >
                          Guides
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cover-letter/examples"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-white"
                          onClick={closeDropdowns}
                        >
                          Examples
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Blog Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("blog")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleDropdownClick("blog")}
                  className="hover:text-green-600 dark:hover:text-green-400 text-gray-800 dark:text-gray-200 focus:outline-none py-2"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === "blog"}
                >
                  Blog
                </button>
                {activeDropdown === "blog" && (
                  <div className="absolute top-full -mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                    <ul>
                      <li>
                        <Link
                          to="/blog/resources"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-whitee"
                          onClick={closeDropdowns}
                        >
                          Resources
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog/faqs"
                          className="block px-4 py-2 hover:text-green-600 dark:hover:text-green-600 text-gray-900 dark:text-white"
                          onClick={closeDropdowns}
                        >
                          FAQs
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Simple Links */}
              <Link
                to="/pricing"
                className="hover:text-green-600 dark:hover:text-green-400 text-gray-800 dark:text-gray-200"
                onClick={closeDropdowns}
              >
                Pricing
              </Link>
              <Link
                to="/for-organizations"
                className="hover:text-green-600 dark:hover:text-green-400 text-gray-800 dark:text-gray-200"
                onClick={closeDropdowns}
              >
                For Organizations
              </Link>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex space-x-4 items-center">
              <Link to="/signup">
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                  Login
                </button>
              </Link>
              <Link to="/resume/builder">
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                  Create Resume
                </button>
              </Link>
            </div>

            {/* Hamburger - Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col space-y-1 focus:outline-none mr-20"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md md:hidden z-40">
                {/* Resume Dropdown Mobile */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => handleDropdownClick("resume")}
                    className="w-full text-left px-4 py-3 border-b border-gray-200 font-medium hover:bg-gray-100 flex justify-between items-center"
                    aria-expanded={activeDropdown === "resume"}
                  >
                    Resume
                    <span className="ml-2">
                      {activeDropdown === "coverletter" ? "▲" : "▼"}
                    </span>
                  </button>

                  {activeDropdown === "resume" && (
                    <div className="bg-gray-50">
                      <Link
                        to="/resume/builder"
                        className="block px-8 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        Builder
                      </Link>
                      <Link
                        to="/resume/templates"
                        className="block px-8 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        Templates
                      </Link>
                      <Link
                        to="/resume/guides"
                        className="block px-8 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        Guides
                      </Link>
                      <Link
                        to="/resume/examples"
                        className="block px-8 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        Examples
                      </Link>
                    </div>
                  )}
                </div>

                {/* Cover Letter Dropdown Mobile */}
                <div>
                  <button
                    onClick={() => handleDropdownClick("coverletter")}
                    className="w-full text-left px-4 py-3 border-b border-gray-200 font-medium hover:bg-gray-100 flex justify-between items-center"
                    aria-expanded={activeDropdown === "coverletter"}
                    aria-haspopup="true"
                  >
                    Cover Letter
                    <span className="ml-2">
                      {activeDropdown === "coverletter" ? "▲" : "▼"}
                    </span>
                  </button>
                  {activeDropdown === "coverletter" && (
                    <div className="bg-gray-50">
                      <Link
                        to="/cover-letter/builder"
                        className="block px-8 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        Builder
                      </Link>
                      <Link
                        to="/cover-letter/templates"
                        className="block px-8 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        Templates
                      </Link>
                      <Link
                        to="/cover-letter/guides"
                        className="block px-8 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        Guides
                      </Link>
                      <Link
                        to="/cover-letter/examples"
                        className="block px-8 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        Examples
                      </Link>
                    </div>
                  )}
                </div>

                {/* Blog Dropdown Mobile */}
                <div>
                  <button
                    onClick={() => handleDropdownClick("blog")}
                    className="w-full text-left px-4 py-3 border-b border-gray-200 font-medium hover:bg-gray-100 flex justify-between items-center"
                    aria-expanded={activeDropdown === "blog"}
                    aria-haspopup="true"
                  >
                    Blog
                    <span className="ml-2">
                      {activeDropdown === "blog" ? "▲" : "▼"}
                    </span>
                  </button>
                  {activeDropdown === "blog" && (
                    <div className="bg-gray-50">
                      <Link
                        to="/blog/resources"
                        className="block px-8 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        Resources
                      </Link>
                      <Link
                        to="/blog/faqs"
                        className="block px-8 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          closeMenu();
                          closeDropdowns();
                        }}
                      >
                        FAQs
                      </Link>
                    </div>
                  )}
                </div>

                {/* Simple Links Mobile */}
                <Link
                  to="/pricing"
                  className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100"
                  onClick={() => {
                    closeMenu();
                    closeDropdowns();
                  }}
                >
                  Pricing
                </Link>
                <Link
                  to="/for-organizations"
                  className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100"
                  onClick={() => {
                    closeMenu();
                    closeDropdowns();
                  }}
                >
                  For Organizations
                </Link>

                {/* Mobile Buttons */}
                <div className="flex flex-col space-y-2 p-4 border-t border-gray-200">
                  <Link to="/signup" onClick={closeMenu}>
                    <button className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
                      Login
                    </button>
                  </Link>
                  <Link to="/resume/builder" onClick={closeMenu}>
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                      Create Resume
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </nav>
    </header>
  );
}
