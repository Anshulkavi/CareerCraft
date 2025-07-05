import ResumePreview from "./ResumePreview"; // If still using a single combined preview
// OR break sections separately if rendering per key

const ResumeSectionRenderer = ({
  sectionKey,
  resumeData,
  customSectionConfig,
  isReplaced,
  selectedTemplate,
}) => {
  // For now, render the entire resume as one block (you can later split)
  return (
    <ResumePreview
      resumeData={resumeData}
      selectedTemplate={selectedTemplate}
      customSectionConfig={customSectionConfig}
    />
  );
};

export default ResumeSectionRenderer;
