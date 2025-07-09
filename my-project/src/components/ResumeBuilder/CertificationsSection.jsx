import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import TextareaWithLabel from "../ui/TextareawithLabel";
import Section from "../ui/Section";

const CertificationsSection = ({
  resumeData,
  setResumeData,
  setHasChanges,
}) => (
  <Section
    title="Certifications"
    actions
    onAdd={() => {
      const updated = [
        ...resumeData.certifications,
        { title: "", issuer: "", description: "" },
      ];
      setResumeData({ ...resumeData, certifications: updated });
      // setHasChanges(true);
    }}
    onDelete={() => {
      const updated = [...resumeData.certifications];
      updated.pop();
      setResumeData({ ...resumeData, certifications: updated });
      // setHasChanges(true);
    }}
  >
    {resumeData.certifications.map((cert, idx) => (
      <React.Fragment key={idx}>
        {idx > 0 && (
          <hr className="border-t border-gray-300 md:col-span-2 my-4" />
        )}
        <InputWithLabel
          id={`cert-title-${idx}`}
          label="Title"
          placeholder="Advanced Google Analytics"
          value={cert.title}
          onChange={(e) => {
            const updated = [...resumeData.certifications];
            updated[idx].title = e.target.value;
            setResumeData({ ...resumeData, certifications: updated });
            // setHasChanges(true);
          }}
        />
        <InputWithLabel
          id={`cert-issuer-${idx}`}
          label="Issuer"
          placeholder="Google / Coursera"
          value={cert.issuer}
          onChange={(e) => {
            const updated = [...resumeData.certifications];
            updated[idx].issuer = e.target.value;
            setResumeData({ ...resumeData, certifications: updated });
            // setHasChanges(true);
          }}
        />
        <TextareaWithLabel
          id={`cert-desc-${idx}`}
          label="Description"
          placeholder="A course focused on mastering Google Analytics for insights..."
          value={cert.description}
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
            
            const updated = [...resumeData.certifications];
            updated[idx].description = e.target.value;
            setResumeData({ ...resumeData, certifications: updated });
            // setHasChanges(true);
          }}
        />
      </React.Fragment>
    ))}
  </Section>
);

export default CertificationsSection;
