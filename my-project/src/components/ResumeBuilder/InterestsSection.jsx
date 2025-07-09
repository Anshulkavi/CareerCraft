import React from "react";
import TextareaWithLabel from "../ui/TextareawithLabel";
import Section from "../ui/Section";

const InterestsSection = ({ resumeData, setResumeData }) => (
  <Section title="Interests">
    <TextareaWithLabel
      label="Interests"
      id="interests"
      placeholder="Photography, Reading, Chess"
      value={resumeData.interests}
      onChange={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
        setResumeData({
          ...resumeData,
          interests: e.target.value,
        })
      }}
    />
  </Section>
);

export default InterestsSection;
