import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import TextareaWithLabel from "../ui/TextareawithLabel";
import Section from "../ui/Section";

const ReferencesSection = ({ resumeData, setResumeData }) => (
  <Section
    title="References"
    actions
    onAdd={() => {
      const newRef = {
        name: "",
        position: "",
        contact: "",
        notes: "",
      };
      setResumeData((prev) => ({
        ...prev,
        references: [...(prev.references || []), newRef],
      }));
    }}
    onDelete={() => {
      setResumeData((prev) => ({
        ...prev,
        references: prev.references.slice(0, -1),
      }));
    }}
  >
    {(resumeData.references?.length ? resumeData.references : []).map(
      (ref, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2"
        >
          <InputWithLabel
            label="Name"
            id={`refName-${index}`}
            placeholder="Jane Doe"
            value={ref.name}
            onChange={(e) => {
              const updated = [...resumeData.references];
              updated[index].name = e.target.value;
              setResumeData({ ...resumeData, references: updated });
            }}
          />

          <InputWithLabel
            label="Position"
            id={`refPosition-${index}`}
            placeholder="Manager at XYZ"
            value={ref.position}
            onChange={(e) => {
              const updated = [...resumeData.references];
              updated[index].position = e.target.value;
              setResumeData({ ...resumeData, references: updated });
            }}
          />

          <InputWithLabel
            label="Contact"
            id={`refContact-${index}`}
            placeholder="jane@example.com"
            value={ref.contact}
            onChange={(e) => {
              const updated = [...resumeData.references];
              updated[index].contact = e.target.value;
              setResumeData({ ...resumeData, references: updated });
            }}
          />

          <TextareaWithLabel
            label="Reference Notes"
            id={`refNotes-${index}`}
            placeholder="Optional notes..."
            value={ref.notes}
            onChange={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
              const updated = [...resumeData.references];
              updated[index].notes = e.target.value;
              setResumeData({ ...resumeData, references: updated });
            }}
          />

          {index < resumeData.references.length - 1 && (
            <div className="md:col-span-2">
              <hr className="border-t border-gray-300 my-6" />
            </div>
          )}
        </div>
      )
    )}
  </Section>
);

export default ReferencesSection;
