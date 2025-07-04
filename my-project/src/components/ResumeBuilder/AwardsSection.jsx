import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import TextareaWithLabel from "../ui/TextareawithLabel";
import Section from "../ui/Section";

const AwardsSection = ({ resumeData, setResumeData, selectedTemplate }) => {
  return (
    <Section
      title="Awards"
      actions
      onAdd={() => {
        const updated = [
          ...resumeData.awards,
          {
            title: "",
            issuer: "",
            year: "",
            description: "",
          },
        ];
        setResumeData({ ...resumeData, awards: updated });
      }}
      onDelete={() => {
        const updated = [...resumeData.awards];
        updated.pop();
        setResumeData({ ...resumeData, awards: updated });
      }}
    >
      {selectedTemplate === "modern" && (
        <p className="text-xs text-gray-500 italic mb-3">
          *This section is not included in the Modern resume template and will not be visible in preview or final PDF.
        </p>
      )}
      {Array.isArray(resumeData.awards) &&
        resumeData.awards.map((award, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <InputWithLabel
              label="Award Title"
              id={`awardTitle-${index}`}
              placeholder="Best Developer Award"
              value={award.title}
              onChange={(e) => {
                const updated = [...resumeData.awards];
                updated[index].title = e.target.value;
                setResumeData({ ...resumeData, awards: updated });
              }}
            />
            <InputWithLabel
              label="Issuer"
              id={`awardIssuer-${index}`}
              placeholder="Google"
              value={award.issuer}
              onChange={(e) => {
                const updated = [...resumeData.awards];
                updated[index].issuer = e.target.value;
                setResumeData({ ...resumeData, awards: updated });
              }}
            />
            <InputWithLabel
              label="Year"
              id={`awardYear-${index}`}
              placeholder="2023"
              value={award.year}
              onChange={(e) => {
                const updated = [...resumeData.awards];
                updated[index].year = e.target.value;
                setResumeData({ ...resumeData, awards: updated });
              }}
            />
            <TextareaWithLabel
              label="Description"
              id={`awardDesc-${index}`}
              placeholder="What was the award for?"
              value={award.description}
              onChange={(e) => {
                const updated = [...resumeData.awards];
                updated[index].description = e.target.value;
                setResumeData({ ...resumeData, awards: updated });
              }}
            />
          </div>
        ))}
    </Section>
  );
};

export default AwardsSection;
