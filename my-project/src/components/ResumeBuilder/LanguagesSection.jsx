import React from "react";
import Section from "../ui/Section";

const LanguagesSection = ({ resumeData, setResumeData, setHasChanges }) => {
  return (
    <Section
      title="Languages"
      actions
      onAdd={() => {
        const updated = [
          ...resumeData.languages,
          { name: "", level: "", proficiency: 0 },
        ];
        setResumeData({ ...resumeData, languages: updated });
      }}
      onDelete={() => {
        const updated = [...resumeData.languages];
        updated.pop();
        setResumeData({ ...resumeData, languages: updated });
      }}
    >
      <div className="space-y-3">
        {resumeData.languages.map((lang, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex flex-col space-y-1">
              <input
                className="text-black font-semibold border-b border-gray-300 focus:outline-none"
                value={lang.name}
                onChange={(e) => {
                  const updated = [...resumeData.languages];
                  updated[idx].name = e.target.value;
                  setResumeData({ ...resumeData, languages: updated });
                  setHasChanges(true);
                }}
                placeholder="Language"
              />
              <input
                className="text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
                value={lang.level}
                onChange={(e) => {
                  const updated = [...resumeData.languages];
                  updated[idx].level = e.target.value;
                  setResumeData({ ...resumeData, languages: updated });
                  setHasChanges(true);
                }}
                placeholder="Level"
              />
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((dot) => (
                <div
                  key={dot}
                  onClick={() => {
                    const updated = [...resumeData.languages];
                    updated[idx].proficiency = dot;
                    setResumeData({ ...resumeData, languages: updated });
                    setHasChanges(true);
                  }}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    lang.proficiency >= dot ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default LanguagesSection;
