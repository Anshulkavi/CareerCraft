import ResumePreview from "../DynamicResume/ResumePreview";

function ResumePreviewSection({
  resumeData,
  customSectionConfig,
  isReplaced,
  handleDownload,
  selectedTemplate,
  previewRef,
}) {
  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={() =>
            handleDownload(resumeData, customSectionConfig, isReplaced)
          }
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Download Resume
        </button>
      </div>
      <div
        style={{
          minHeight: "100vh",
          background: "#fff",
          padding: "2rem",
        }}
      >
        <ResumePreview
          ref={previewRef}
          resumeData={resumeData}
          selectedTemplate={selectedTemplate}
          customSectionConfig={customSectionConfig}
        />
      </div>
    </>
  );
}

  export default ResumePreviewSection;