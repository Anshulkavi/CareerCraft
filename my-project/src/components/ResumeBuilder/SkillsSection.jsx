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


// import React, { useState } from "react";
// import InputWithLabel from "../ui/InputwithLabel";
// import Section from "../ui/Section";

// const SkillsSection = ({ resumeData, setResumeData, setHasChanges }) => {
//   const [newSkill, setNewSkill] = useState("");

//   const handleAddSkill = () => {
//     const skill = newSkill.trim();
//     if (!skill) return;

//     const updated = {
//       ...resumeData,
//       skills: {
//         ...resumeData.skills,
//         technical: [...(resumeData.skills.technical || []), skill],
//       },
//     };
//     setResumeData(updated);
//     setNewSkill("");
//     setHasChanges(true);
//   };

//   const handleDeleteSkill = (index) => {
//     const updatedSkills = [...(resumeData.skills.technical || [])];
//     updatedSkills.splice(index, 1);
//     setResumeData({
//       ...resumeData,
//       skills: { ...resumeData.skills, technical: updatedSkills },
//     });
//     setHasChanges(true);
//   };

//   return (
//     <Section
//       title="Skills"
//       actions={true}
//       onAdd={handleAddSkill}
//       onDelete={() => {
//         setResumeData({ ...resumeData, skills: { ...resumeData.skills, technical: [] } });
//         setHasChanges(true);
//       }}
//     >
//       {/* Input for new skill */}
//       <div className="col-span-2">
//         <InputWithLabel
//           label="Add New Skill"
//           id="addSkill"
//           placeholder="Enter a technical skill (e.g., React)"
//           value={newSkill}
//           onChange={(e) => setNewSkill(e.target.value)}
//         />
//       </div>

//       {/* Display each skill with remove button */}
//       {(resumeData.skills.technical || []).map((skill, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded shadow-sm"
//         >
//           <span className="text-sm text-gray-800">{skill}</span>
//           <button
//             type="button"
//             onClick={() => handleDeleteSkill(index)}
//             className="text-red-500 text-sm hover:text-red-700"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//     </Section>
//   );
// };

// export default SkillsSection;
