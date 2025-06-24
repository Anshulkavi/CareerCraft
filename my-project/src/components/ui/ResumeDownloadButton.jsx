// ResumeDownloadButton.jsx
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import ResumePreview from "./DynamicResume/ResumePreview";

const ResumeDownloadButton = ({ resumeData, selectedTemplate }) => {
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
    <>
      {/* ✅ This is your styled button */}
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Download
      </button>

      {/* 🫥 Hidden preview for PDF generation */}
      <div className="hidden">
        <div ref={previewRef}>
          <ResumePreview
            resumeData={resumeData}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </div>
    </>
  );
};

export default ResumeDownloadButton;
