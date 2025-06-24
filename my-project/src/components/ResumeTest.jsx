import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import ResumePreview from "../components/DynamicResume/ResumePreview";

const dummyData = {
  personal: {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "1234567890",
    location: "New York",
    jobTitle: "Frontend Developer",
    linkedin: "linkedin.com/in/johndoe",
    photoUrl: "",
    summary: "Experienced developer...",
  },
  experience: [],
  education: [],
  skills: [],
  Awards: [],
  achievements: [],
  certifications: [],
  languages: [],
  interests: [],
  references: [],
};

export default function ResumeTest() {
  const previewRef = useRef();

  const handleDownload = () => {
    const element = previewRef.current;
    if (!element) return;
    const options = {
      margin: 0.3,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Download Resume
      </button>

      <div ref={previewRef}>
        <ResumePreview resumeData={dummyData} selectedTemplate="modern" />
      </div>
    </div>
  );
}
