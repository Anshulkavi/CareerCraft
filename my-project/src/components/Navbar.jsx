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
import { UserCircle } from "lucide-react";

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo"; // Adjust the import path as necessary
// import { useResume } from "../context/ResumeContext";
// import ResumeDownloadButton from "./ui/ResumeDownloadButton";
import { toast } from "react-toastify";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PDFResumeTemplate from "@/components/pdf/PDFResumeTemplate";
import PDFSimpleTemplate from "@/components/pdf/PDFSimpleTemplate";
import { saveResume } from "../api/resumeApi";
import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

export default function Navbar({
  resumeData,
  customSectionConfig,
  isReplaced,
  selectedTemplate,
}) {
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

  const [hasChanges, setHasChanges] = useState(false);

const { resumeRef } = useContext(ResumeContext);

const handleSaveResume = async () => {
  const dataToSave = resumeRef.current;

  if (!dataToSave) {
    toast.error("No resume data to save");
    return;
  }

  const title = prompt("Enter a title for your resume:");
  if (!title) {
    toast.error("Resume title is required");
    return;
  }

  const token = localStorage.getItem("access");

  try {
    await saveResume(dataToSave, title, token);  // ✅ Pass title here
    toast.success("Resume saved successfully!");
  } catch (err) {
    toast.error("Failed to save resume");
    console.error("Save failed:", err);
  }
};


const navigate = useNavigate();

  const handleClick = () => {
    handleDownload(
      resumeData,
      customSectionConfig,
      isReplaced,
      selectedTemplate,
      navigate
    );
  };

  const handleDownload = async (
    resumeData,
    customSectionConfig,
    isReplaced,
    selectedTemplate,
    navigate
  ) => {
    const token = localStorage.getItem("access");

    if (!token) {
      // 💡 Avoid defining this inline every time
      const handleLoginRedirect = () => navigate("/login");

      toast.warn(
        <div>
          Please login to download your resume.{" "}
          <button
            className="ml-2 text-blue-500 underline hover:text-blue-700 transition"
            onClick={handleLoginRedirect}
          >
            Go to Login
          </button>
        </div>,
        {
          autoClose: 8000,
          closeOnClick: false,
        }
      );
      return;
    }

    console.log("Resume Ref Data:", resumeRef?.current);

    const PDFComponent =
      selectedTemplate === "simple" ? PDFSimpleTemplate : PDFResumeTemplate;

    const blob = await pdf(
      <PDFComponent
        resumeData={resumeData}
        customSectionConfig={customSectionConfig}
        isReplaced={isReplaced}
        selectedTemplate={selectedTemplate}
      />
    ).toBlob();

    saveAs(blob, "My_Resume.pdf");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("access"))
  );

  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("access")));
    };
    window.addEventListener("loginStatusChanged", updateLoginStatus);
    window.addEventListener("storage", updateLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", updateLoginStatus);
      window.removeEventListener("storage", updateLoginStatus);
    };
  }, []);


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
          <div className="flex space-x-3 items-center relative">
            <button
              onClick={handleSaveResume}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow-lg"
            >
              Save Resume
            </button>
            <button
              onClick={handleClick}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Download Resume
            </button>

            {/* Account Icon with dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("account")}
                className="text-gray-800 dark:text-white focus:outline-none"
              >
                <UserCircle className="w-8 h-8" />
              </button>

              {/* Dropdown */}
              {activeDropdown === "account" && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                  <ul>
                    {isLoggedIn ? (
                      <>
                        <li>
                          <Link
                            to="/dashboard"
                            onClick={closeDropdowns}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/settings"
                            onClick={closeDropdowns}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            Settings
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              localStorage.removeItem("access");
                              localStorage.removeItem("refresh");
                              localStorage.removeItem("token");
                              setIsLoggedIn(false);
                              window.dispatchEvent(
                                new Event("loginStatusChanged")
                              );
                              navigate("/"); // or "/login" if preferred
                              closeDropdowns();
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link
                          to="/login"
                          onClick={closeDropdowns}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Desktop Menu */}
            <div
              ref={menuRef}
              className={`hidden md:flex space-x-6 items-center text-gray-700 font-medium ml-10`}
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

            {/* Desktop Buttons
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
            {/* Right side: Account + Hamburger */}
            {/* <div className="flex items-center space-x-3 ml-auto"> */}
            {/* Mobile Hamburger */}
            {/* <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col space-y-1 focus:outline-none"
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
              </button> */}

            {/* Account Icon */}
            {/* <div className="relative ml-4">
                <button
                  onClick={() => handleDropdownClick("account")}
                  className="text-gray-800 dark:text-white focus:outline-none"
                >
                  <UserCircle className="w-8 h-8" />
                </button>

                {activeDropdown === "account" && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                    <ul>
                      {isLoggedIn ? (
                        <>
                          <li>
                            <Link
                              to="/dashboard"
                              onClick={closeDropdowns}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/settings"
                              onClick={closeDropdowns}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                            >
                              Settings
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                localStorage.removeItem("token");
                                closeDropdowns();
                                navigate("/login");
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                            >
                              Logout
                            </button>
                          </li>
                        </>
                      ) : (
                        <li>
                          <Link
                            to="/login"
                            onClick={closeDropdowns}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            Login
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div> */}
            {/* Right-aligned group: Buttons + Account + Hamburger */}
            <div className="flex items-center ml-auto space-x-4 md:space-x-4">
              {/* Hamburger Menu (mobile only) */}
              <div className="flex md:hidden order-1">
                <button
                  onClick={toggleMenu}
                  className="flex flex-col space-y-1 focus:outline-none"
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
              </div>

              {/* Desktop Buttons */}
              <div className="hidden md:flex space-x-4 items-center order-2">
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

              {/* Account Icon */}
              <div className="relative order-3">
                <button
                  onClick={() => handleDropdownClick("account")}
                  className="text-gray-800 dark:text-white focus:outline-none"
                >
                  <UserCircle className="w-8 h-8" />
                </button>
                {activeDropdown === "account" && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                    <ul>
                      {isLoggedIn ? (
                        <>
                          <li>
                            <Link
                              to="/dashboard"
                              onClick={closeDropdowns}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/settings"
                              onClick={closeDropdowns}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                            >
                              Settings
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                localStorage.removeItem("access");
                                localStorage.removeItem("refresh");
                                // If you also used `token` key anywhere:
                                localStorage.removeItem("token");

                                // Update local state
                                setIsLoggedIn(false);

                                // Notify all components / tabs
                                window.dispatchEvent(
                                  new Event("loginStatusChanged")
                                );

                                // Navigate to login or homepage
                                navigate("/login");

                                // Close the dropdown
                                closeDropdowns();
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                            >
                              Logout
                            </button>
                          </li>
                        </>
                      ) : (
                        <li>
                          <Link
                            to="/login"
                            onClick={closeDropdowns}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            Login
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

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
