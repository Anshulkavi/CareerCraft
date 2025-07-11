
// import React from "react";
// import InputWithLabel from "../ui/InputwithLabel";
// import TextareaWithLabel from "../ui/TextareawithLabel";
// import Section from "../ui/Section";
// const AwardsSection = ({ resumeData, setResumeData, selectedTemplate }) => {
//   const awards = Array.isArray(resumeData.awards) ? resumeData.awards : [];

//   return (
//     <Section
//       title="Awards"
//       actions
//       onAdd={() => {
//         const updated = [
//           ...awards,
//           {
//             title: "",
//             issuer: "",
//             year: "",
//             description: "",
//           },
//         ];
//         setResumeData({ ...resumeData, awards: updated });
//       }}
//       onDelete={() => {
//         const updated = [...awards];
//         updated.pop();
//         setResumeData({ ...resumeData, awards: updated });
//       }}
//     >
//       {selectedTemplate === "modern" && (
//         <p className="text-xs text-gray-500 italic mb-3">
//           *This section is not included in the Modern resume template and will
//           not be visible in preview or final PDF.
//         </p>
//       )}
//       {awards.map((award, index) => (
//         <div key={index} className="mb-4 border-b pb-4">
//           <InputWithLabel
//             label="Award Title"
//             id={`awardTitle-${index}`}
//             placeholder="Best Developer Award"
//             value={award.title}
//             onChange={(e) => {
//               const updated = [...awards];
//               updated[index].title = e.target.value;
//               setResumeData({ ...resumeData, awards: updated });
//             }}
//           />
//           <InputWithLabel
//             label="Issuer"
//             id={`awardIssuer-${index}`}
//             placeholder="Google"
//             value={award.issuer}
//             onChange={(e) => {
//               const updated = [...awards];
//               updated[index].issuer = e.target.value;
//               setResumeData({ ...resumeData, awards: updated });
//             }}
//           />
//           <InputWithLabel
//             label="Year"
//             id={`awardYear-${index}`}
//             placeholder="2023"
//             value={award.year}
//             onChange={(e) => {
//               const updated = [...awards];
//               updated[index].year = e.target.value;
//               setResumeData({ ...resumeData, awards: updated });
//             }}
//           />
//           <TextareaWithLabel
//             label="Description"
//             id={`awardDesc-${index}`}
//             placeholder="What was the award for?"
//             value={award.description}
//             onChange={(e) => {
//               e.target.style.height = "auto";
//               e.target.style.height = `${e.target.scrollHeight}px`;
//               const updated = [...awards];
//               updated[index].description = e.target.value;
//               setResumeData({ ...resumeData, awards: updated });
//             }}
//           />
//         </div>
//       ))}
//     </Section>
//   );
// };

// export default AwardsSection;

import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import TextareaWithLabel from "../ui/TextareawithLabel";
import Section from "../ui/Section";

const AwardsSection = ({ resumeData, setResumeData, selectedTemplate }) => {
  const awards = Array.isArray(resumeData.awards) && resumeData.awards.length > 0
    ? resumeData.awards
    : [
        {
          title: "",
          issuer: "",
          year: "",
          description: "",
        },
      ];

  return (
    <Section
      title="Awards"
      actions
      onAdd={() => {
        const updated = [
          ...awards,
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
        if (awards.length > 1) {
          const updated = [...awards];
          updated.pop();
          setResumeData({ ...resumeData, awards: updated });
        }
      }}
    >
      {selectedTemplate === "modern" && (
        <p className="text-xs text-gray-500 italic mb-3 md:col-span-2">
          *This section is not included in the Modern resume template and will not be visible in preview or final PDF.
        </p>
      )}

      {awards.map((award, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2 mb-6"
        >
          <InputWithLabel
            label="Award Title"
            id={`awardTitle-${index}`}
            placeholder="Best Developer Award"
            value={award.title}
            onChange={(e) => {
              const updated = [...awards];
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
              const updated = [...awards];
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
              const updated = [...awards];
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
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
              const updated = [...awards];
              updated[index].description = e.target.value;
              setResumeData({ ...resumeData, awards: updated });
            }}
            rows={1}
          />
          {index < awards.length - 1 && (
            <div className="md:col-span-2">
              <hr className="border-t border-gray-300 my-4" />
            </div>
          )}
        </div>
      ))}
    </Section>
  );
};

export default AwardsSection;

