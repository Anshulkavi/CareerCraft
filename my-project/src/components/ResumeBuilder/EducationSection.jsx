// components/EditorSections/EducationSection.jsx
import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import Section from "../ui/Section";

const EducationSection = ({ resumeData, setResumeData, setHasChanges }) => {
  return (
    <Section
      title="Education"
      actions
      onAdd={() => {
        const newEdu = {
          degree: "",
          institution: "",
          startDate: "",
          endDate: "",
          location: "",
        };
        setResumeData({
          ...resumeData,
          education: [...resumeData.education, newEdu],
        });
      }}
      onDelete={() => {
        const updated = [...resumeData.education];
        updated.pop();
        setResumeData({
          ...resumeData,
          education: updated,
        });
      }}
    >
      {resumeData.education.map((edu, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2"
        >
          <InputWithLabel
            label="Degree"
            id={`degree-${index}`}
            placeholder="B.Tech in Computer Science"
            value={edu.degree}
            onChange={(e) => {
              const updated = [...resumeData.education];
              updated[index].degree = e.target.value;
              setResumeData({
                ...resumeData,
                education: updated,
              });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="School / University"
            id={`institution-${index}`}
            placeholder="San Francisco State University"
            value={edu.institution}
            onChange={(e) => {
              const updated = [...resumeData.education];
              updated[index].institution = e.target.value;
              setResumeData({
                ...resumeData,
                education: updated,
              });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="Start Date"
            id={`startDate-${index}`}
            placeholder="01/2019"
            value={edu.startDate}
            onChange={(e) => {
              const updated = [...resumeData.education];
              updated[index].startDate = e.target.value;
              setResumeData({
                ...resumeData,
                education: updated,
              });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="End Date"
            id={`endDate-${index}`}
            placeholder="06/2023"
            value={edu.endDate}
            onChange={(e) => {
              const updated = [...resumeData.education];
              updated[index].endDate = e.target.value;
              setResumeData({
                ...resumeData,
                education: updated,
              });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="Location"
            id={`location-${index}`}
            placeholder="Bangalore, India"
            value={edu.location}
            onChange={(e) => {
              const updated = [...resumeData.education];
              updated[index].location = e.target.value;
              setResumeData({
                ...resumeData,
                education: updated,
              });
              setHasChanges(true);
            }}
          />

          {index < resumeData.education.length - 1 && (
            <div className="md:col-span-2">
              <hr className="border-t border-gray-300 my-6" />
            </div>
          )}
        </div>
      ))}
    </Section>
  );
};

export default EducationSection;
