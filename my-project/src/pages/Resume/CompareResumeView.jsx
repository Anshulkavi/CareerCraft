// src/pages/Resume/CompareResumeView.jsx

import React, { useRef, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";

import ResumePreview from "@/components/DynamicResume/ResumePreview";
import PDFResumeTemplate from "@/components/pdf/PDFResumeTemplate";
import { dummyResumeData } from "@/data/dummyResumeData"; // Optional dummy import

export default function CompareResumeView() {
  const resumeRef = useRef();

  // You can replace this with context or builder state
  const [resumeData, setResumeData] = useState(dummyResumeData);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Tailwind JSX Preview */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto p-6 bg-white border-r border-gray-200">
        <h2 className="text-xl font-bold mb-4">Tailwind Resume Preview (JSX)</h2>
        <div className="shadow-lg rounded-lg border p-4">
          <ResumePreview ref={resumeRef} resumeData={resumeData} />
        </div>
      </div>

      {/* React-PDF Preview */}
      <div className="w-full lg:w-1/2 h-full overflow-hidden p-6 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">PDF Resume Preview (React PDF)</h2>
        <div className="border shadow-lg rounded-lg overflow-hidden h-[90%]">
          <PDFViewer width="100%" height="100%">
            <PDFResumeTemplate resumeData={resumeData} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
