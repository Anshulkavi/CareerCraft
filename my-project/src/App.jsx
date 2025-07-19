import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ResumeGrammarChecker from "./components/ResumeGrammerChecker";
import ResumeTailoring from "./components/ResumeTailoring";
import ResumeSection from "./components/ResumeSections";
import TestimonialPage from "./components/TestimonialPage";
import FAQ from "./components/FAQ";
import ResumeBuilderSection from "./components/ResumeBuilderSection";
import Footer from "./components/Footer";
import Darkmode from "./components/DarkMode/DarkMode/DarkMode";
import ResumeUpload from "./components/ResumeUpload";
import ResumeTemplate from "./components/ResumeTemplates";

// Resume Pages
import Builder from "./pages/Resume/Builder";
import Templates from "./pages/Resume/Templates";
import Guides from "./pages/Resume/Guides";
import GuideDetails from "./pages/Resume/GuideDetails";
import Examples from "./pages/Resume/Examples";

// Cover Letter Pages
import CoverLetterBuilder from "./pages/CoverLetter/Builder";
import CoverLetterTemplates from "./pages/CoverLetter/Templates";
import CoverLetterGuides from "./pages/CoverLetter/Guides";
import CoverLetterGuideDetails from "./pages/CoverLetter/CoverLetterGuideDetails";
import CoverLetterExamples from "./pages/CoverLetter/Examples";

// Blog Pages
import Resources from "./pages/Blog/Resources";
import Faqs from "./pages/Blog/FAQs";

// Other Pages
import Pricing from "./pages/Pricing";
import ForOrganizations from "./pages/ForOrganizations";
import AuthForm from "./pages/AuthForm";
import { ResumeProvider } from "./context/ResumeContext";
import ScrollToTop from "./components/ui/ScrollToTop";
import useLenis from "./hooks/useLenis"; // Custom hook for smooth scrolling with Lenis
import { exportToPDF } from "./hooks/exportUtils";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";

function App() {
  useLenis(); // Custom hook for smooth scrolling with Lenis
  const location = useLocation();
  // List of paths where you want to hide the navbar
  const hideNavbarRoutes = ["/resume/builder", "/cover-letter/builder"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,
      offset: 100, // trigger point from the top (px)
    });
  }, []);

  return (
    <>
      {/* <Darkmode /> */}
      {shouldShowNavbar && <Navbar />}{" "}
      {/* ✅ Only show when route is not in the excluded list */}
      <ScrollToTop />
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <ResumeUpload />
                <ResumeTemplate />
                <ResumeGrammarChecker />
                <Features />
                <ResumeTailoring />
                <ResumeSection />
                <ResumeBuilderSection />
                <TestimonialPage />
                <FAQ />
              </main>
            }
          />

          {/* Signup Page */}
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />

          {/* Resume Pages */}
          <Route
            path="/resume/builder"
            element={
              <ResumeProvider
                onDownload={() => {
                  const element = document.getElementById("resume-preview");
                  if (element) {
                    exportToPDF(element, "MyResume.pdf");
                  }
                }}
              >
                <Builder />
              </ResumeProvider>
            }
          />
          <Route path="/resume/templates" element={<Templates />} />
          <Route path="/resume/guides" element={<Guides />} />
          <Route path="/resume/guides/:guideSlug" element={<GuideDetails />} />
          <Route path="/resume/examples" element={<Examples />} />

          {/* Cover Letter Pages */}
          <Route
            path="/cover-letter/builder"
            element={<CoverLetterBuilder />}
          />
          <Route
            path="/cover-letter/templates"
            element={<CoverLetterTemplates />}
          />
          <Route path="/cover-letter/guides" element={<CoverLetterGuides />} />
          <Route
            path="/coverletter/guides/:guideSlug"
            element={<CoverLetterGuideDetails />}
          />
          <Route
            path="/cover-letter/examples"
            element={<CoverLetterExamples />}
          />

          {/* Blog Pages */}
          <Route path="/blog/resources" element={<Resources />} />
          <Route path="/blog/faqs" element={<Faqs />} />

          {/* Other Pages */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/for-organizations" element={<ForOrganizations />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
        <ToastContainer position="top-center" autoClose={2000} />
        <Footer />
      </div>
    </>
  );
}

export default App;
