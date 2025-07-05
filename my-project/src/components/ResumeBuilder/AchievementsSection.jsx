import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import TextareaWithLabel from "../ui/TextareawithLabel";
import Section from "../ui/Section";

const AchievementsSection = ({ resumeData, setResumeData, setHasChanges }) => (
  <Section
    title="Achievements"
    actions
    onAdd={() => {
      const updated = [
        ...resumeData.achievements,
        { title: "", description: "" },
      ];
      setResumeData({ ...resumeData, achievements: updated });
      setHasChanges(true);
    }}
    onDelete={() => {
      const updated = [...resumeData.achievements];
      updated.pop();
      setResumeData({ ...resumeData, achievements: updated });
      setHasChanges(true);
    }}
  >
    {resumeData.achievements.map((achievement, idx) => (
      <React.Fragment key={idx}>
        {idx > 0 && (
          <hr className="border-t border-gray-300 md:col-span-2 my-4" />
        )}
        <InputWithLabel
          id={`achievement-title-${idx}`}
          label="Title"
          placeholder="Winner - Smart India Hackathon"
          value={achievement.title}
          onChange={(e) => {
            const updated = [...resumeData.achievements];
            updated[idx].title = e.target.value;
            setResumeData({ ...resumeData, achievements: updated });
            setHasChanges(true);
          }}
        />
        <TextareaWithLabel
          id={`achievement-desc-${idx}`}
          label="Description"
          placeholder="Represented college in SIH 2022 and won first place in national finals..."
          value={achievement.description}
          onChange={(e) => {
            const updated = [...resumeData.achievements];
            updated[idx].description = e.target.value;
            setResumeData({ ...resumeData, achievements: updated });
            setHasChanges(true);
          }}
          rows={5}
        />
      </React.Fragment>
    ))}
  </Section>
);

export default AchievementsSection;
