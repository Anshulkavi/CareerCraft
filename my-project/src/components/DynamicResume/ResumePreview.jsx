import React, { forwardRef } from "react";
import ModernTemplate from "./ModernTemplate";
import SimpleTemplate from "./SimpleTemplate";
import ElegantTemplate from "./ElegantTemplate";

const ResumePreview = forwardRef(
  ({ resumeData, selectedTemplate, customSectionConfig }, ref) => {
    // Utility to check if a section is replaced
    const isReplaced = (key) => customSectionConfig?.replaces === key;

    // Render custom section if it replaces a valid section
    const renderCustomSection = () => {
      if (!customSectionConfig?.replaces || !customSectionConfig?.title) return null;

      return (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {customSectionConfig.title}
          </h2>
          {customSectionConfig.entries?.map((item, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-xs text-gray-500 italic">{item.year}</p>
            </div>
          ))}
        </div>
      );
    };

    // Inject the custom section into the selected template
    const getTemplateComponent = () => {
      const templateProps = {
        resumeData,
        customSectionConfig,
        isReplaced,
        renderCustomSection,
      };

      switch (selectedTemplate) {
        case "modern":
          return <ModernTemplate {...templateProps} />;
        case "elegant":
          return <ElegantTemplate {...templateProps} />;
        case "minimal":
          return <SimpleTemplate {...templateProps} />;
        default:
          return <ModernTemplate {...templateProps} />;
      }
    };

    return (
      
      //   <div
      //   // crucial for html2canvas + jsPDF
      //   ref={ref}
      //   className="bg-white text-black shadow-md p-6"
      //   style={{ minHeight: "100%", width: "100%", overflow: "visible" }}
      // >
      <div
  ref={ref}
  style={{ width: "100%", minHeight: "100%", backgroundColor: "#fff" }}
  className="p-6 text-black"
  id="pdf-content"
>
        {getTemplateComponent()}
      </div>
    );
  }
);

export default ResumePreview;
// import React from "react";
// import ModernTemplate from "./ModernTemplate";
// import SimpleTemplate from "./SimpleTemplate";
// import ElegantTemplate from "./ElegantTemplate";

// export default function ResumePreview({ resumeData, selectedTemplate }) {

//   const getTemplateComponent = () => {
//     switch (selectedTemplate) {
//       case "modern":
//         return <ModernTemplate resumeData={resumeData} />;
//       case "elegant":
//         return <ElegantTemplate resumeData={resumeData} />;
//       case "minimal":
//         return <SimpleTemplate resumeData={resumeData} />;
//       default:
//         return <ModernTemplate resumeData={resumeData} />;
//     }
//   };

//   return (
//     <div className="bg-white text-left text-black max-w-4xl mx-auto">
//       {getTemplateComponent()}
//     </div>

//   );
// }




// {/* <div className="p-6 min-h-screen">
//             {activeTab === "preview" && (
//               <div className="bg-white text-left text-black max-w-4xl mx-auto">
//                 {/* ATS-Optimized Header - Simple, single column */}
//                 <div className="px-4 pt-4 mb-6">
//                   <h1 className="text-2xl font-bold mb-2">
//                     {resumeData.personal.firstName} {resumeData.personal.lastName}
//                   </h1>
//                   <div className="text-base mb-1">{resumeData.personal.jobTitle}</div>
//                   <div className="text-sm mb-1">{resumeData.personal.email}</div>
//                   <div className="text-sm mb-1">{resumeData.personal.phone}</div>
//                   <div className="text-sm">{resumeData.personal.location}</div>
//                 </div>

//                 {/* Professional Summary */}
//                 {resumeData.personal.summary && (
//                   <div className="px-4 py-8 mb-6">
//                     <h2 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">
//                       PROFESSIONAL SUMMARY
//                     </h2>
//                     <div className="text-sm leading-relaxed">
//                       {resumeData.personal.summary}
//                     </div>
//                   </div>
//                 )}

//                 {/* Core Skills - ATS loves keyword sections */}
//                 {(resumeData.skills.technical || resumeData.skills.soft) && (
//                   <div className="mb-6">
//                     <h2 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">
//                       CORE SKILLS
//                     </h2>
//                     {resumeData.skills.technical && (
//                       <div className="mb-2">
//                         <div className="font-semibold text-sm">Technical Skills:</div>
//                         <div className="text-sm">{resumeData.skills.technical}</div>
//                       </div>
//                     )}
//                     {resumeData.skills.soft && (
//                       <div>
//                         <div className="font-semibold text-sm">Professional Skills:</div>
//                         <div className="text-sm">{resumeData.skills.soft}</div>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Professional Experience */}
//                 {(resumeData.experience.company || resumeData.experience.title) && (
//                   <div className="px-4 mb-6">
//                     <h2 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">
//                       PROFESSIONAL EXPERIENCE
//                     </h2>
//                     <div className="mb-4">
//                       <div className="font-semibold text-base mb-1">
//                         {resumeData.experience.title}
//                       </div>
//                       <div className="text-sm mb-1">
//                         {resumeData.experience.company}
//                       </div>
//                       <div className="text-sm text-gray-600 mb-2">
//                         {resumeData.experience.duration}
//                       </div>
//                       <div className="text-sm leading-relaxed">
//                         {resumeData.experience.responsibilities}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Education */}
//                 {(resumeData.education.school || resumeData.education.degree) && (
//                   <div className="px-4 mb-6">
//                     <h2 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">
//                       EDUCATION
//                     </h2>
//                     <div className="font-semibold text-base mb-1">
//                       {resumeData.education.degree}
//                     </div>
//                     <div className="text-sm mb-1">
//                       {resumeData.education.school}
//                     </div>
//                     <div className="text-sm text-gray-600 mb-1">
//                       {resumeData.education.year}
//                     </div>
//                     {resumeData.education.achievements && (
//                       <div className="text-sm">
//                         {resumeData.education.achievements}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Awards & Recognition */}
//                 {resumeData.awards.title && (
//                   <div className="mb-6">
//                     <h2 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">
//                       AWARDS & RECOGNITION
//                     </h2>
//                     <div className="font-semibold text-base mb-1">
//                       {resumeData.awards.title}
//                     </div>
//                     <div className="text-sm mb-1">
//                       {resumeData.awards.issuer}
//                     </div>
//                     <div className="text-sm text-gray-600 mb-1">
//                       {resumeData.awards.year}
//                     </div>
//                     {resumeData.awards.description && (
//                       <div className="text-sm">
//                         {resumeData.awards.description}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Languages */}
//                 {resumeData.languages && (
//                   <div className="mb-6">
//                     <h2 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">
//                       LANGUAGES
//                     </h2>
//                     <div className="text-sm">{resumeData.languages}</div>
//                   </div>
//                 )}

//                 {/* Additional Information */}
//                 {resumeData.interests && (
//                   <div className="mb-6">
//                     <h2 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">
//                       ADDITIONAL INFORMATION
//                     </h2>
//                     <div className="text-sm">{resumeData.interests}</div>
//                   </div>
//                 )}

//                 {/* References */}
//                 {resumeData.references.name && (
//                   <div className="mb-6">
//                     <h2 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">
//                       REFERENCES
//                     </h2>
//                     <div className="font-semibold text-base mb-1">
//                       {resumeData.references.name}
//                     </div>
//                     <div className="text-sm mb-1">
//                       {resumeData.references.position}
//                     </div>
//                     <div className="text-sm mb-1">
//                       {resumeData.references.contact}
//                     </div>
//                     {resumeData.references.notes && (
//                       <div className="text-sm">
//                         {resumeData.references.notes}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             )}

//             {activeTab === "edit" && (
//               <div className="space-y-8">
//                 {/* Personal Information Section */}
//                 <Section title="Personal Information">
//                   <InputWithLabel
//                     id="firstName"
//                     label="First Name"
//                     placeholder="John"
//                     value={resumeData.personal.firstName}
//                     onChange={(e) =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         personal: { ...prev.personal, firstName: e.target.value }
//                       }))
//                     }
//                   />
//                   <InputWithLabel
//                     id="lastName"
//                     label="Last Name"
//                     placeholder="Doe"
//                     value={resumeData.personal.lastName}
//                     onChange={(e) =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         personal: { ...prev.personal, lastName: e.target.value }
//                       }))
//                     }
//                   />
//                   <InputWithLabel
//                     id="jobTitle"
//                     label="Job Title"
//                     placeholder="Software Engineer"
//                     value={resumeData.personal.jobTitle}
//                     onChange={(e) =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         personal: { ...prev.personal, jobTitle: e.target.value }
//                       }))
//                     }
//                   />
//                   <InputWithLabel
//                     id="email"
//                     label="Email"
//                     type="email"
//                     placeholder="john.doe@email.com"
//                     value={resumeData.personal.email}
//                     onChange={(e) =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         personal: { ...prev.personal, email: e.target.value }
//                       }))
//                     }
//                   />
//                   <InputWithLabel
//                     id="phone"
//                     label="Phone"
//                     placeholder="(555) 123-4567"
//                     value={resumeData.personal.phone}
//                     onChange={(e) =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         personal: { ...prev.personal, phone: e.target.value }
//                       }))
//                     }
//                   />
//                   <InputWithLabel
//                     id="location"
//                     label="Location"
//                     placeholder="New York, NY"
//                     value={resumeData.personal.location}
//                     onChange={(e) =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         personal: { ...prev.personal, location: e.target.value }
//                       }))
//                     }
//                   />
//                   <TextareaWithLabel
//                     id="summary"
//                     label="Professional Summary"
//                     placeholder="Brief professional summary highlighting your key qualifications..."
//                     value={resumeData.personal.summary}
//                     onChange={(e) =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         personal: { ...prev.personal, summary: e.target.value }
//                       }))
//                     }
//                   />
//                 </Section>

//                 {/* Skills Section */}
//                 <Section title="Skills">
//                   <TextareaWithLabel
//                     id="technicalSkills"
//                     label="Technical Skills"
//                     placeholder="JavaScript, Python, React, Node.js, AWS..."
//                     value={resumeData.skills.technical}
//                     onChange={(e) =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         skills: { ...prev.skills, technical: e.target.value }
//                       }))
//                     }
//                   />
//                   <TextareaWithLabel
//                     id="softSkills"
//                     label="Professional Skills"
//                     placeholder="Leadership, Communication, Problem Solving..."
//                     value={resumeData.skills.soft}
//                     onChange={(e) =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         skills: { ...prev.skills, soft: e.target.value }
//                       }))
//                     }
//                   />
//                 </Section>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//       </main>

//   </div>
//   );
// }

// const InputWithLabel = ({
//   id,
//   label,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
// }) => (
//   <div className="space-y-2">
//     <label htmlFor={id} className="block text-sm font-medium text-gray-800">
//       {label}
//     </label>
//     <input
//       id={id}
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500"
//     />
//   </div>
// );

// const TextareaWithLabel = ({ id, label, placeholder, value, onChange }) => (
//   <div className="md:col-span-2 space-y-2">
//     <label htmlFor={id} className="block text-sm font-medium text-gray-800">
//       {label}
//     </label>
//     <textarea
//       id={id}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       rows={4}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-vertical"
//     />
//   </div>
// );

// const Section = ({ title, children, actions }) => (
//   <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
//     <div className="flex items-center justify-between">
//       <h2 className="text-2xl font-bold">{title}</h2>
//       {actions && (
//         <div className="flex gap-2">
//           <button className="flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//             <Plus className="h-4 w-4" /> Add
//           </button>
//           <button className="flex items-center px-2 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
//             <Trash2 className="h-4 w-4" />
//           </button>
//         </div>
//       )}
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
//   </div>
// );
