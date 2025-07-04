import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import TextareaWithLabel from "../ui/TextareawithLabel";
import Section from "../ui/Section";

const CustomSection = ({ customSectionConfig, setCustomSectionConfig }) => (
  <Section
    title="Custom Section"
    actions
    onAdd={() => {
      const newEntry = {
        title: "",
        description: "",
        year: "",
      };
      setCustomSectionConfig((prev) => ({
        ...prev,
        entries: [...prev.entries, newEntry],
      }));
    }}
    onDelete={() => {
      setCustomSectionConfig((prev) => ({
        ...prev,
        entries: prev.entries.slice(0, -1),
      }));
    }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputWithLabel
        label="Section Title"
        placeholder="e.g. Freelance Projects"
        value={customSectionConfig.title}
        onChange={(e) =>
          setCustomSectionConfig((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
      />
      <div className="md:col-span-2">
        <label className="text-sm font-medium text-gray-700">
          Replace Section
        </label>
        <select
          className="w-full mt-1 border-gray-300 rounded-md"
          value={customSectionConfig.replaces}
          onChange={(e) =>
            setCustomSectionConfig((prev) => ({
              ...prev,
              replaces: e.target.value,
            }))
          }
        >
          <option value="">(Don't replace)</option>
          <option value="awards">Awards</option>
          <option value="achievements">Achievements</option>
          <option value="certifications">Certifications</option>
          <option value="interests">Interests</option>
          <option value="references">References</option>
          <option value="languages">Languages</option>
        </select>
      </div>
    </div>

    {(customSectionConfig.entries.length === 0
      ? [{ title: "", description: "", year: "" }]
      : customSectionConfig.entries
    ).map((entry, idx) => (
      <div key={idx} className="md:col-span-2 border-b pb-4 mt-6">
        <InputWithLabel
          label="Title"
          value={entry.title}
          onChange={(e) => {
            const updated = [...customSectionConfig.entries];
            updated[idx].title = e.target.value;
            setCustomSectionConfig((prev) => ({
              ...prev,
              entries: updated,
            }));
          }}
        />
        <TextareaWithLabel
          label="Description"
          value={entry.description}
          onChange={(e) => {
            const updated = [...customSectionConfig.entries];
            updated[idx].description = e.target.value;
            setCustomSectionConfig((prev) => ({
              ...prev,
              entries: updated,
            }));
          }}
        />
        <InputWithLabel
          label="Year"
          placeholder="e.g. 2023"
          value={entry.year}
          onChange={(e) => {
            const updated = [...customSectionConfig.entries];
            updated[idx].year = e.target.value;
            setCustomSectionConfig((prev) => ({
              ...prev,
              entries: updated,
            }));
          }}
        />
      </div>
    ))}
  </Section>
);

export default CustomSection;
