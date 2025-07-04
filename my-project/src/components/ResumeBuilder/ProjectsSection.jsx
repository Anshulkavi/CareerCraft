import TextareaWithLabel from "../ui/TextareawithLabel";
import InputWithLabel from "../ui/InputwithLabel";
const ProjectsSection = ({ resumeData, setResumeData, setHasChanges }) => {
  return (
    <Section
      title="Projects"
      actions
      onAdd={() => {
        const newProject = {
          title: "",
          link: "",
          techStack: "",
          description: "",
        };
        const prev = Array.isArray(resumeData.projects) ? resumeData.projects : [];
        setResumeData({ ...resumeData, projects: [...prev, newProject] });
      }}
      onDelete={() => {
        const updated = [...resumeData.projects];
        updated.pop();
        setResumeData({ ...resumeData, projects: updated });
      }}
    >
      {(resumeData.projects?.length ? resumeData.projects : []).map((project, index) => (
        <React.Fragment key={index}>
          {index > 0 && <hr className="border-t border-gray-300 my-4" />}
          <InputWithLabel label="Project Title" id={`projectTitle-${index}`} placeholder="Portfolio Website" value={project.title} onChange={(e) => {
            const updated = [...resumeData.projects];
            updated[index].title = e.target.value;
            setResumeData({ ...resumeData, projects: updated });
            setHasChanges(true);
          }} />
          <InputWithLabel label="Project Link" id={`projectLink-${index}`} placeholder="https://github.com/user/project" value={project.link} onChange={(e) => {
            const updated = [...resumeData.projects];
            updated[index].link = e.target.value;
            setResumeData({ ...resumeData, projects: updated });
            setHasChanges(true);
          }} />
          <InputWithLabel label="Tech Stack" id={`projectTech-${index}`} placeholder="React, Node.js" value={project.techStack} onChange={(e) => {
            const updated = [...resumeData.projects];
            updated[index].techStack = e.target.value;
            setResumeData({ ...resumeData, projects: updated });
            setHasChanges(true);
          }} />
          <TextareaWithLabel label="Description" id={`projectDesc-${index}`} placeholder="Describe the project" value={project.description} onChange={(e) => {
            const updated = [...resumeData.projects];
            updated[index].description = e.target.value;
            setResumeData({ ...resumeData, projects: updated });
            setHasChanges(true);
          }} rows={4} />
        </React.Fragment>
      ))}
    </Section>
  );
};

export default ProjectsSection;
