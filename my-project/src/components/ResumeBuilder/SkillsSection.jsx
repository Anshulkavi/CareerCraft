import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import Section from "../ui/Section";

const SkillsSection = ({ resumeData, setResumeData, setHasChanges }) => {
  return (
    <Section title="Skills">
      <InputWithLabel
        label="Technical Skills"
        id="technicalSkills"
        placeholder="JavaScript, React, Node.js"
        value={resumeData.skills.technical || ""}
        onChange={(e) => {
          setResumeData({
            ...resumeData,
            skills: {
              ...resumeData.skills,
              technical: e.target.value,
            },
          });
          // setHasChanges(true);
        }}
      />
      <InputWithLabel
        label="Soft Skills"
        id="softSkills"
        placeholder="Leadership, Communication"
        value={resumeData.skills.soft || ""}
        onChange={(e) => {
          setResumeData({
            ...resumeData,
            skills: {
              ...resumeData.skills,
              soft: e.target.value,
            },
          });
          // setHasChanges(true);
        }}
      />
    </Section>
  );
};

export default SkillsSection;
