import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import TextareaWithLabel from "../ui/TextareawithLabel";
import Section from "../ui/Section";

const ExperienceSection = ({ resumeData, setResumeData, setHasChanges }) => {
  const dummyExperience = [
    {
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      responsibilities: "",
    },
  ];

  return (
    <Section
      title="Work Experience"
      actions
      onAdd={() => {
        const newExp = {
          company: "",
          jobTitle: "",
          startDate: "",
          endDate: "",
          location: "",
          responsibilities: "",
        };
        const prev = Array.isArray(resumeData.experience)
          ? resumeData.experience
          : [];
        setResumeData({ ...resumeData, experience: [...prev, newExp] });
      }}
      onDelete={() => {
        const updated = [...resumeData.experience];
        updated.pop();
        setResumeData({ ...resumeData, experience: updated });
      }}
    >
      {/* {(resumeData.experience?.length
        ? resumeData.experience
        : dummyExperience
      ).map((exp, index) => (
        <React.Fragment key={index}>
          {index > 0 && <hr className="border-t border-gray-300 my-4" />}
          <InputWithLabel
            label="Company Name"
            id={`company-${index}`}
            placeholder="Google"
            value={exp.company}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].company = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />
          <InputWithLabel
            label="Job Title"
            id={`jobTitle-${index}`}
            placeholder="Software Engineer"
            value={exp.jobTitle}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].jobTitle = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />
          <InputWithLabel
            label="Start Date"
            id={`startDate-${index}`}
            placeholder="Jan 2020"
            value={exp.startDate}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].startDate = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />
          <InputWithLabel
            label="End Date"
            id={`endDate-${index}`}
            placeholder="Present"
            value={exp.endDate}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].endDate = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />
          <InputWithLabel
            label="Location"
            id={`location-${index}`}
            placeholder="Bangalore, India"
            value={exp.location}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].location = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />
          <TextareaWithLabel
            label="Responsibilities"
            id={`responsibilities-${index}`}
            placeholder="Describe key responsibilities"
            value={exp.responsibilities}
            onChange={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;

              const updated = [...resumeData.experience];
              updated[index].responsibilities = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
            rows={1} // Start with 1 row for auto-expand
          />
        </React.Fragment>
      ))} */}
      {(resumeData.experience?.length
        ? resumeData.experience
        : dummyExperience
      ).map((exp, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2"
        >
          <InputWithLabel
            label="Company Name"
            id={`company-${index}`}
            placeholder="Google"
            value={exp.company}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].company = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="Job Title"
            id={`jobTitle-${index}`}
            placeholder="Software Engineer"
            value={exp.jobTitle}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].jobTitle = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="Start Date"
            id={`startDate-${index}`}
            placeholder="Jan 2020"
            value={exp.startDate}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].startDate = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="End Date"
            id={`endDate-${index}`}
            placeholder="Present"
            value={exp.endDate}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].endDate = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="Location"
            id={`location-${index}`}
            placeholder="Bangalore, India"
            value={exp.location}
            onChange={(e) => {
              const updated = [...resumeData.experience];
              updated[index].location = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
          />

          <TextareaWithLabel
            label="Responsibilities"
            id={`responsibilities-${index}`}
            placeholder="Describe key responsibilities"
            value={exp.responsibilities}
            onChange={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
              const updated = [...resumeData.experience];
              updated[index].responsibilities = e.target.value;
              setResumeData({ ...resumeData, experience: updated });
              setHasChanges(true);
            }}
            rows={1}
            className="md:col-span-2"
          />

          {index < resumeData.experience.length - 1 && (
            <div className="md:col-span-2">
              <hr className="border-t border-gray-300 my-6" />
            </div>
          )}
        </div>
      ))}
    </Section>
  );
};

export default ExperienceSection;
