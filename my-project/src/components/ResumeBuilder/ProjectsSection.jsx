// import React from "react";
// import TextareaWithLabel from "../ui/TextareawithLabel";
// import InputWithLabel from "../ui/InputwithLabel";
// import Section from "../ui/Section";

// const ProjectsSection = ({ resumeData, setResumeData, setHasChanges }) => {
//   const defaultProject = {
//     title: "",
//     link: "",
//     techStack: "",
//     description: "",
//   };

//   return (
//     <Section
//       title="Projects"
//       actions
//       onAdd={() => {
//         const prev = Array.isArray(resumeData.projects)
//           ? resumeData.projects
//           : [];
//         setResumeData({
//           ...resumeData,
//           projects: [...prev, { ...defaultProject }],
//         });
//         setHasChanges(true);
//       }}
//       onDelete={() => {
//         const updated = [...resumeData.projects];
//         updated.pop();
//         setResumeData({ ...resumeData, projects: updated });
//         setHasChanges(true);
//       }}
//     >
//       {(resumeData.projects?.length ? resumeData.projects : [defaultProject]).map(
//         (project, index) => (
//           <React.Fragment key={index}>
//             {index > 0 && <hr className="border-t border-gray-300 my-4" />}
//             <InputWithLabel
//               label="Project Title"
//               id={`projectTitle-${index}`}
//               placeholder="Portfolio Website"
//               value={project.title}
//               onChange={(e) => {
//                 const updated = [...resumeData.projects];
//                 updated[index].title = e.target.value;
//                 setResumeData({ ...resumeData, projects: updated });
//                 setHasChanges(true);
//               }}
//             />
//             <InputWithLabel
//               label="Project Link"
//               id={`projectLink-${index}`}
//               placeholder="https://github.com/user/project"
//               value={project.link}
//               onChange={(e) => {
//                 const updated = [...resumeData.projects];
//                 updated[index].link = e.target.value;
//                 setResumeData({ ...resumeData, projects: updated });
//                 setHasChanges(true);
//               }}
//             />
//             <InputWithLabel
//               label="Tech Stack"
//               id={`projectTech-${index}`}
//               placeholder="React, Node.js"
//               value={project.techStack}
//               onChange={(e) => {
//                 const updated = [...resumeData.projects];
//                 updated[index].techStack = e.target.value;
//                 setResumeData({ ...resumeData, projects: updated });
//                 setHasChanges(true);
//               }}
//             />
//             <TextareaWithLabel
//               label="Description"
//               id={`projectDesc-${index}`}
//               placeholder="Describe the project"
//               value={project.description}
//               onChange={(e) => {
//                 const updated = [...resumeData.projects];
//                 updated[index].description = e.target.value;
//                 setResumeData({ ...resumeData, projects: updated });
//                 setHasChanges(true);
//               }}
//               rows={4}
//             />
//           </React.Fragment>
//         )
//       )}
//     </Section>
//   );
// };

// export default ProjectsSection;

import React from "react";
import TextareaWithLabel from "../ui/TextareawithLabel";
import InputWithLabel from "../ui/InputwithLabel";
import Section from "../ui/Section";

const ProjectsSection = ({ resumeData, setResumeData, setHasChanges }) => {
  const defaultProject = {
    title: "",
    githubLink: "",
    demoLink: "",
    link: "", // Keep as fallback
    techStack: "",
    description: "",
  };

  // 🔧 Ensure projects array exists before rendering
  if (!Array.isArray(resumeData.projects)) {
    setResumeData({ ...resumeData, projects: [{ ...defaultProject }] });
    return null; // prevent render until it's initialized
  }

  return (
    <Section
      title="Projects"
      actions
      onAdd={() => {
        const prev = Array.isArray(resumeData.projects)
          ? resumeData.projects
          : [];
        setResumeData({
          ...resumeData,
          projects: [...prev, { ...defaultProject }],
        });
        setHasChanges(true);
      }}
      onDelete={() => {
        const updated = [...resumeData.projects];
        updated.pop();
        setResumeData({ ...resumeData, projects: updated });
        // setHasChanges(true);
      }}
    >
      {/* {(resumeData.projects?.length
        ? resumeData.projects
        : [defaultProject]
      ).map((project, index) => (
        <React.Fragment key={index}>
          {index > 0 && <hr className="border-t border-gray-300 my-4" />}

          <InputWithLabel
            label="Project Title"
            id={`projectTitle-${index}`}
            placeholder="Portfolio Website"
            value={project.title}
            onChange={(e) => {
              const updated = [...resumeData.projects];
              updated[index].title = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              setHasChanges(true);
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputWithLabel
              label="GitHub Link"
              id={`projectGithub-${index}`}
              placeholder="https://github.com/user/project"
              value={project.githubLink}
              onChange={(e) => {
                const updated = [...resumeData.projects];
                updated[index].githubLink = e.target.value;
                setResumeData({ ...resumeData, projects: updated });
                setHasChanges(true);
              }}
            />

            <InputWithLabel
              label="Live Demo Link"
              id={`projectDemo-${index}`}
              placeholder="https://demo.example.com"
              value={project.demoLink}
              onChange={(e) => {
                const updated = [...resumeData.projects];
                updated[index].demoLink = e.target.value;
                setResumeData({ ...resumeData, projects: updated });
                // setHasChanges(true);
              }}
            />
          </div>

          <InputWithLabel
            label="Other Link (Optional)"
            id={`projectLink-${index}`}
            placeholder="https://other-link.com"
            value={project.link}
            onChange={(e) => {
              const updated = [...resumeData.projects];
              updated[index].link = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="Tech Stack"
            id={`projectTech-${index}`}
            placeholder="React, Node.js, MongoDB"
            value={project.techStack}
            onChange={(e) => {
              const updated = [...resumeData.projects];
              updated[index].techStack = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              setHasChanges(true);
            }}
          />

          <TextareaWithLabel
            label="Description"
            id={`projectDesc-${index}`}
            placeholder="Describe the project, its features, and your role"
            value={project.description}
            onChange={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;

              const updated = [...resumeData.projects];
              updated[index].description = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              setHasChanges(true);
            }}
            rows={1}
          />
        </React.Fragment>
      ))} */}
      {(resumeData.projects?.length
        ? resumeData.projects
        : [defaultProject]
      ).map((project, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2"
        >
          <InputWithLabel
            label="Project Title"
            id={`projectTitle-${index}`}
            placeholder="Portfolio Website"
            value={project.title}
            onChange={(e) => {
              const updated = [...resumeData.projects];
              updated[index].title = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="Tech Stack"
            id={`projectTech-${index}`}
            placeholder="React, Node.js, MongoDB"
            value={project.techStack}
            onChange={(e) => {
              const updated = [...resumeData.projects];
              updated[index].techStack = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="GitHub Link"
            id={`projectGithub-${index}`}
            placeholder="https://github.com/user/project"
            value={project.githubLink}
            onChange={(e) => {
              const updated = [...resumeData.projects];
              updated[index].githubLink = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="Live Demo Link"
            id={`projectDemo-${index}`}
            placeholder="https://demo.example.com"
            value={project.demoLink}
            onChange={(e) => {
              const updated = [...resumeData.projects];
              updated[index].demoLink = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              setHasChanges(true);
            }}
          />

          <InputWithLabel
            label="Other Link (Optional)"
            id={`projectLink-${index}`}
            placeholder="https://other-link.com"
            value={project.link}
            onChange={(e) => {
              const updated = [...resumeData.projects];
              updated[index].link = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              setHasChanges(true);
            }}
            className="md:col-span-2"
          />

          <TextareaWithLabel
            label="Description"
            id={`projectDesc-${index}`}
            placeholder="Describe the project, its features, and your role"
            value={project.description}
            onChange={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;

              const updated = [...resumeData.projects];
              updated[index].description = e.target.value;
              setResumeData({ ...resumeData, projects: updated });
              // setHasChanges(true);
            }}
            rows={1}
            className="md:col-span-2"
          />

          {index < resumeData.projects.length - 1 && (
            <div className="md:col-span-2">
              <hr className="border-t border-gray-300 my-6" />
            </div>
          )}
        </div>
      ))}
    </Section>
  );
};

export default ProjectsSection;
