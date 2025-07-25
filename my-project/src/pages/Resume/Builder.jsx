// // // "use client";
// // // import React, { useState } from "react";
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { Label } from "@/components/ui/label";
// // // import { Link } from "react-router-dom"; // Ensure this is imported
// // // import {
// // //   Send,
// // //   Plus,
// // //   Trash2,
// // //   Download,
// // //   Share2,
// // //   Save,
// // //   ArrowLeft,
// // //   Settings,
// // //   FileText,
// // //   User,
// // //   Briefcase,
// // //   GraduationCap,
// // //   Award,
// // //   Languages,
// // //   Heart,
// // //   CheckCircle,
// // // } from "lucide-react";
// // // // import Logo from "./Logo";

// // // export default function ResumeBuilder() {
// // //   const [messages, setMessages] = useState([
// // //     {
// // //       role: "assistant",
// // //       content: "Hello! I'm your AI resume assistant. How can I help you today?",
// // //     },
// // //   ]);
// // //   const [input, setInput] = useState("");
// // //   const [activeSection, setActiveSection] = useState("personal");

// // //   const handleSendMessage = () => {
// // //     if (!input.trim()) return;
// // //     setMessages([...messages, { role: "user", content: input }]);

// // //     setTimeout(() => {
// // //       setMessages((prev) => [
// // //         ...prev,
// // //         {
// // //           role: "assistant",
// // //           content:
// // //             "I can help you improve that section. Based on your experience, I suggest highlighting your achievements with quantifiable results. Would you like me to rewrite it for you?",
// // //         },
// // //       ]);
// // //     }, 1000);

// // //     setInput("");
// // //   };

// // //   const sections = [
// // //     { id: "personal", name: "Personal Info", icon: User },
// // //     { id: "experience", name: "Experience", icon: Briefcase },
// // //     { id: "education", name: "Education", icon: GraduationCap },
// // //     { id: "skills", name: "Skills", icon: CheckCircle },
// // //     { id: "awards", name: "Awards", icon: Award },
// // //     { id: "languages", name: "Languages", icon: Languages },
// // //     { id: "interests", name: "Interests", icon: Heart },
// // //     { id: "references", name: "References", icon: FileText },
// // //   ];

// // //   return (
// // //     <div className="min-h-screen flex flex-col bg-gray-50">
// // //       <main className="flex-grow flex">
// // //         <div className="w-20 md:w-64 bg-white border-r flex-shrink-0 h-[calc(100vh-65px)] sticky top-[65px]">
// // //           <div className="p-4">
// // //             <div className="flex flex-col gap-2">
// // //               {sections.map((section) => {
// // //                 const Icon = section.icon;
// // //                 const isActive = activeSection === section.id;
// // //                 return (
// // //                   <button
// // //                     key={section.id}
// // //                     className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
// // //                       isActive
// // //                         ? "bg-green-50 text-green-600"
// // //                         : "hover:bg-gray-100 text-gray-800"
// // //                     }`}
// // //                     onClick={() => setActiveSection(section.id)}
// // //                   >
// // //                     <Icon
// // //                       className={`h-5 w-5 ${
// // //                         isActive ? "text-green-600" : "text-gray-800"
// // //                       }`}
// // //                     />
// // //                     <span className="hidden md:block">{section.name}</span>
// // //                   </button>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="flex-grow p-6 overflow-auto">
// // //           <div className="max-w-6xl mx-auto">
// // //             <Tabs defaultValue="editor" className="w-full">
// // //               <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
// // //                 <TabsTrigger value="editor">Resume Editor</TabsTrigger>
// // //                 <TabsTrigger value="preview">Preview</TabsTrigger>
// // //               </TabsList>

// // //               <TabsContent value="editor">
// // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //                   <div className="md:col-span-2 space-y-6">
// // //                     {activeSection === "personal" && (
// // //                       <Section title="Personal Information">
// // //                         <InputWithLabel
// // //                           id="firstName"
// // //                           label="First Name"
// // //                           placeholder="John"
// // //                         />
// // //                         <InputWithLabel
// // //                           id="lastName"
// // //                           label="Last Name"
// // //                           placeholder="Doe"
// // //                         />
// // //                         <InputWithLabel
// // //                           id="jobTitle"
// // //                           label="Job Title"
// // //                           placeholder="Software Engineer"
// // //                         />
// // //                         <InputWithLabel
// // //                           id="email"
// // //                           label="Email"
// // //                           type="email"
// // //                           placeholder="john@example.com"
// // //                         />
// // //                         <InputWithLabel
// // //                           id="phone"
// // //                           label="Phone"
// // //                           placeholder="(123) 456-7890"
// // //                         />
// // //                         <InputWithLabel
// // //                           id="location"
// // //                           label="Location"
// // //                           placeholder="San Francisco, CA"
// // //                         />
// // //                         <TextareaWithLabel
// // //                           id="summary"
// // //                           label="Professional Summary"
// // //                           placeholder="Brief summary about your experience..."
// // //                         />
// // //                       </Section>
// // //                     )}
// // //                     {activeSection === "experience" && (
// // //                       <Section title="Work Experience" actions>
// // //                         <InputWithLabel
// // //                           label="Company Name"
// // //                           id="company"
// // //                           placeholder="Google"
// // //                         />
// // //                         <InputWithLabel
// // //                           label="Job Title"
// // //                           id="title"
// // //                           placeholder="Software Engineer"
// // //                         />
// // //                         <InputWithLabel
// // //                           label="Duration"
// // //                           id="duration"
// // //                           placeholder="Jan 2020 - Present"
// // //                         />
// // //                         <TextareaWithLabel
// // //                           label="Responsibilities"
// // //                           id="responsibilities"
// // //                           placeholder="Describe what you did..."
// // //                         />
// // //                       </Section>
// // //                     )}
// // //                     {activeSection === "education" && (
// // //                       <Section title="Education" actions>
// // //                         <InputWithLabel
// // //                           label="School/University"
// // //                           id="school"
// // //                           placeholder="MIT"
// // //                         />
// // //                         <InputWithLabel
// // //                           label="Degree"
// // //                           id="degree"
// // //                           placeholder="B.Tech in Computer Science"
// // //                         />
// // //                         <InputWithLabel
// // //                           label="Year"
// // //                           id="year"
// // //                           placeholder="2018 - 2022"
// // //                         />
// // //                         <TextareaWithLabel
// // //                           label="Achievements"
// // //                           id="eduAchievements"
// // //                           placeholder="Describe academic achievements..."
// // //                         />
// // //                       </Section>
// // //                     )}
// // //                     {activeSection === "skills" && (
// // //                       <Section title="Skills">
// // //                         <InputWithLabel
// // //                           label="Technical Skills"
// // //                           id="technicalSkills"
// // //                           placeholder="JavaScript, React, Node.js"
// // //                         />
// // //                         <InputWithLabel
// // //                           label="Soft Skills"
// // //                           id="softSkills"
// // //                           placeholder="Leadership, Communication"
// // //                         />
// // //                       </Section>
// // //                     )}
// // //                     {activeSection === "awards" && (
// // //                       <Section title="Awards" actions>
// // //                         <InputWithLabel
// // //                           label="Award Title"
// // //                           id="awardTitle"
// // //                           placeholder="Best Developer Award"
// // //                         />
// // //                         <InputWithLabel
// // //                           label="Issuer"
// // //                           id="awardIssuer"
// // //                           placeholder="Google"
// // //                         />
// // //                         <InputWithLabel
// // //                           label="Year"
// // //                           id="awardYear"
// // //                           placeholder="2023"
// // //                         />
// // //                         <TextareaWithLabel
// // //                           label="Description"
// // //                           id="awardDesc"
// // //                           placeholder="What was the award for?"
// // //                         />
// // //                       </Section>
// // //                     )}
// // //                     {activeSection === "languages" && (
// // //                       <Section title="Languages">
// // //                         <InputWithLabel
// // //                           label="Languages"
// // //                           id="languages"
// // //                           placeholder="English, Spanish, Hindi"
// // //                         />
// // //                       </Section>
// // //                     )}
// // //                     {activeSection === "interests" && (
// // //                       <Section title="Interests">
// // //                         <TextareaWithLabel
// // //                           label="Interests"
// // //                           id="interests"
// // //                           placeholder="Photography, Reading, Chess"
// // //                         />
// // //                       </Section>
// // //                     )}
// // //                     {activeSection === "references" && (
// // //                       <Section title="References" actions>
// // //                         <InputWithLabel
// // //                           label="Name"
// // //                           id="refName"
// // //                           placeholder="Jane Doe"
// // //                         />
// // //                         <InputWithLabel
// // //                           label="Position"
// // //                           id="refPosition"
// // //                           placeholder="Manager at XYZ"
// // //                         />
// // //                         <InputWithLabel
// // //                           label="Contact"
// // //                           id="refContact"
// // //                           placeholder="jane@example.com"
// // //                         />
// // //                         <TextareaWithLabel
// // //                           label="Reference Notes"
// // //                           id="refNotes"
// // //                           placeholder="Optional notes..."
// // //                         />
// // //                       </Section>
// // //                     )}
// // //                   </div>

// // //                   <div className="md:col-span-1">
// // //                     <div className="bg-white rounded-lg shadow-sm h-full">
// // //                       <div className="p-4 flex flex-col h-full">
// // //                         <div className="flex items-center justify-between mb-4">
// // //                           <h2 className="font-bold text-lg">AI Assistant</h2>
// // //                           <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
// // //                             Online
// // //                           </span>
// // //                         </div>
// // //                         <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[calc(100vh-300px)]">
// // //                           {messages.map((message, index) => (
// // //                             <div
// // //                               key={index}
// // //                               className={`flex ${
// // //                                 message.role === "assistant"
// // //                                   ? "justify-start"
// // //                                   : "justify-end"
// // //                               }`}
// // //                             >
// // //                               <div
// // //                                 className={`max-w-[80%] rounded-lg p-3 ${
// // //                                   message.role === "assistant"
// // //                                     ? "bg-gray-100 text-gray-800"
// // //                                     : "bg-green-500 text-white"
// // //                                 }`}
// // //                               >
// // //                                 {message.content}
// // //                               </div>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                         <div className="flex gap-2">
// // //                           <Input
// // //                             placeholder="Ask for help with your resume..."
// // //                             value={input}
// // //                             onChange={(e) => setInput(e.target.value)}
// // //                             onKeyDown={(e) =>
// // //                               e.key === "Enter" && handleSendMessage()
// // //                             }
// // //                           />
// // //                           <Button
// // //                             size="icon"
// // //                             onClick={handleSendMessage}
// // //                             className="bg-green-500 hover:bg-green-600"
// // //                           >
// // //                             <Send className="h-4 w-4" />
// // //                           </Button>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </TabsContent>

// // //               <TabsContent value="preview">
// // //                 <div className="p-6 text-center text-gray-400">
// // //                   Preview coming soon...
// // //                 </div>
// // //               </TabsContent>
// // //             </Tabs>
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // const InputWithLabel = ({ id, label, type = "text", placeholder }) => (
// // //   <div className="space-y-2">
// // //     <Label htmlFor={id} className="text-gray-800">
// // //       {label}
// // //     </Label>
// // //     <Input
// // //       id={id}
// // //       type={type}
// // //       placeholder={placeholder}
// // //       className="text-gray-900 placeholder-gray-500"
// // //     />
// // //   </div>
// // // );

// // // const TextareaWithLabel = ({ id, label, placeholder }) => (
// // //   <div className="md:col-span-2 space-y-2">
// // //     <Label htmlFor={id} className="text-gray-800">
// // //       {label}
// // //     </Label>
// // //     <Textarea
// // //       id={id}
// // //       placeholder={placeholder}
// // //       rows={4}
// // //       className="text-gray-900 placeholder-gray-500"
// // //     />
// // //   </div>
// // // );

// // // const Section = ({ title, children, actions }) => (
// // //   <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
// // //     <div className="flex items-center justify-between">
// // //       <h2 className="text-2xl font-bold">{title}</h2>
// // //       {actions && (
// // //         <div className="flex gap-2">
// // //           <Button variant="outline" size="sm">
// // //             <Plus className="h-4 w-4 mr-1" /> Add
// // //           </Button>
// // //           <Button variant="destructive" size="sm">
// // //             <Trash2 className="h-4 w-4" />
// // //           </Button>
// // //         </div>
// // //       )}
// // //     </div>
// // //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
// // //   </div>
// // // );

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { pdf } from "@react-pdf/renderer";
// import { saveAs } from "file-saver";
// import ResumePreview from "../../components/DynamicResume/ResumePreview";
// import PDFResumeTemplate from "@/components/pdf/PDFResumeTemplate";
// import { PDFViewer } from "@react-pdf/renderer";
// import { ResumeContext } from "../../context/ResumeContext";
// import {
//   Send,
//   Plus,
//   Trash2,
//   User,
//   Briefcase,
//   GraduationCap,
//   Award,
//   Languages,
//   Heart,
//   CheckCircle,
//   FileText,
//   Puzzle,
//   BadgeCheck,
// } from "lucide-react";

// export default function ResumeBuilder() {
//   const [messages, setMessages] = useState([
//     {
//       role: "assistant",
//       content: "Hello! I'm your AI resume assistant. How can I help you today?",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [activeSection, setActiveSection] = useState("personal");
//   const [activeTab, setActiveTab] = useState("editor");
//   const [pendingSection, setPendingSection] = useState(null);
//   const [selectedTemplate, setSelectedTemplate] = useState("modern");
//   const [hasChanges, setHasChanges] = useState(false);

//   // Handle pending section changes when tab switches
//   useEffect(() => {
//     if (pendingSection && activeTab === "editor") {
//       setActiveSection(pendingSection);
//       setPendingSection(null);
//     }
//   }, [activeTab, pendingSection]);

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { role: "user", content: input }]);

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content:
//             "I can help you improve that section. Based on your experience, I suggest highlighting your achievements with quantifiable results. Would you like me to rewrite it for you?",
//         },
//       ]);
//     }, 1000);

//     setInput("");
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setResumeData((prev) => ({
//           ...prev,
//           personal: {
//             ...prev.personal,
//             photoUrl: reader.result, // base64 image string
//           },
//         }));
//       };
//       reader.readAsDataURL(file); // converts to base64
//     }
//   };

//   const sections = [
//     { id: "personal", name: "Personal Info", icon: User },
//     { id: "experience", name: "Experience", icon: Briefcase },
//     { id: "education", name: "Education", icon: GraduationCap },
//     { id: "skills", name: "Skills", icon: CheckCircle },
//     { id: "certification", name: "Certifications", icon: BadgeCheck },
//     { id: "awards", name: "Awards", icon: Award },
//     { id: "languages", name: "Languages", icon: Languages },
//     { id: "interests", name: "Interests", icon: Heart },
//     { id: "references", name: "References", icon: FileText },
//     { id: "customSection", name: "Custom Section", icon: Puzzle },
//   ];

//   const [resumeData, setResumeData] = useState({
//     personal: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       location: "",
//       jobTitle: "",
//       linkedin: "",
//       photoUrl: "",
//       summary: "",
//     },
//     experience: [
//       {
//         company: "",
//         jobTitle: "",
//         startDate: "",
//         endDate: "",
//         location: "",
//         responsibilities: "",
//       },
//     ],

//     education: [
//       {
//         degree: "",
//         institution: "",
//         startDate: "",
//         endDate: "",
//         location: "",
//       },
//     ],
//     skills: [], // or ["JavaScript", "React"]
//     Awards: [
//       {
//         title: "",
//         issuer: "",
//         year: "",
//         description: "",
//       },
//     ],
//     achievements: [
//       {
//         title: "",
//         description: "",
//       },
//     ],
//     certifications: [
//       {
//         title: "",
//         issuer: "",
//         description: "",
//       },
//     ],
//     languages: [
//       {
//         name: "",
//         level: "",
//         proficiency: 0,
//       },
//     ],
//     interests: [""],
//     references: [
//       {
//         name: "",
//         position: "",
//         contact: "",
//         notes: "",
//       },
//     ],
//   });

//   const [customSectionConfig, setCustomSectionConfig] = useState({
//     replaces: "", // which section it replaces
//     title: "", // section title (e.g. "Freelance Projects")
//     entries: [], // entries like [{ title, description, year }]
//   });

//   const handleSectionClick = (sectionId) => {
//     if (activeTab !== "editor") {
//       // Store the section we want to navigate to
//       setPendingSection(sectionId);
//       // Switch to editor tab
//       setActiveTab("editor");
//     } else {
//       // We're already in editor mode, just change section
//       setActiveSection(sectionId);
//     }
//   };

//   const previewRef = useRef();

//   const isReplaced = (key) => {
//     return customSectionConfig?.replaces === key;
//   };

//   const handleDownload = async (
//     resumeData,
//     customSectionConfig,
//     isReplaced
//   ) => {
//     if (!hasChanges) {
//       alert("Please edit something before downloading.");
//       return;
//     }
//     const blob = await pdf(
//       <PDFResumeTemplate
//         resumeData={resumeData}
//         customSectionConfig={customSectionConfig}
//         isReplaced={isReplaced}
//       />
//     ).toBlob();

//     saveAs(blob, "My_Resume.pdf");
//   };

//   // const previewRef = useRef();

//   // const handleDownload = async () => {
//   //   if (!previewRef.current) {
//   //     console.error("Resume preview not found");
//   //     return;
//   //   }

//   //   const canvas = await html2canvas(previewRef.current, {
//   //     scale: 2,
//   //     useCORS: true,
//   //     allowTaint: true,
//   //     logging: true,
//   //   });

//   //   const imgData = canvas.toDataURL("image/png");
//   //   const pdf = new jsPDF("p", "mm", "a4");

//   //   const imgProps = pdf.getImageProperties(imgData);
//   //   const pdfWidth = pdf.internal.pageSize.getWidth();
//   //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//   //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//   //   pdf.save("My_Resume.pdf");
//   // };

//   return (
//     <ResumeContext.Provider value={{ onDownload: handleDownload }}>
//       <div className="min-h-screen flex flex-col bg-gray-50">
//         <main className="flex-grow flex">
//           <div className="w-20 md:w-64 bg-white border-r flex-shrink-0 h-[calc(100vh-65px)] sticky top-[65px]">
//             {/* Template Selector */}
//             <div className="p-4 pt-6 pb-6 border-b">
//               <label
//                 htmlFor="templateSelect"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Choose Template
//               </label>
//               <select
//                 id="templateSelect"
//                 value={selectedTemplate}
//                 onChange={(e) => setSelectedTemplate(e.target.value)}
//                 className="w-full px-2 py-1 rounded-md border border-gray-300 text-sm"
//               >
//                 <option value="modern">Modern</option>
//                 <option value="elegant">Elegant</option>
//                 <option value="minimal">Minimal</option>
//               </select>
//             </div>
//             <div className="p-4 pt-8">
//               <div className="flex flex-col gap-2">
//                 {sections.map((section) => {
//                   const Icon = section.icon;
//                   const isActive = activeSection === section.id;
//                   return (
//                     <button
//                       key={section.id}
//                       className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
//                         isActive
//                           ? "bg-green-50 text-green-600"
//                           : "hover:bg-gray-100 text-gray-800"
//                       }`}
//                       onClick={() => handleSectionClick(section.id)}
//                     >
//                       <Icon
//                         className={`h-5 w-5 ${
//                           isActive ? "text-green-600" : "text-gray-800"
//                         }`}
//                       />
//                       <span className="hidden md:block">{section.name}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           <div className="flex-grow p-6 overflow-auto">
//             <div className="max-w-6xl mx-auto">
//               <div className="w-full">
//                 <div className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-gray-200 rounded-lg p-1">
//                   <button
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                       activeTab === "editor"
//                         ? "bg-white text-gray-900 shadow-sm"
//                         : "text-gray-600 hover:text-gray-900"
//                     }`}
//                     onClick={() => setActiveTab("editor")}
//                   >
//                     Resume Editor
//                   </button>
//                   <button
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                       activeTab === "preview"
//                         ? "bg-white text-gray-900 shadow-sm"
//                         : "text-gray-600 hover:text-gray-900"
//                     }`}
//                     onClick={() => setActiveTab("preview")}
//                   >
//                     Preview
//                   </button>
//                 </div>

//                 {activeTab === "editor" && (
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="md:col-span-2 space-y-6">
//                       {activeSection === "personal" && (
//                         <Section title="Personal Information">
//                           <InputWithLabel
//                             id="firstName"
//                             label="First Name"
//                             placeholder="John"
//                             value={resumeData.personal.firstName}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 personal: {
//                                   ...resumeData.personal,
//                                   firstName: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true);
//                             }}
//                           />
//                           <InputWithLabel
//                             id="lastName"
//                             label="Last Name"
//                             placeholder="Doe"
//                             value={resumeData.personal.lastName}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 personal: {
//                                   ...resumeData.personal,
//                                   lastName: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true);
//                             }}
//                           />
//                           <InputWithLabel
//                             id="jobTitle"
//                             label="Job Title"
//                             placeholder="Software Engineer"
//                             value={resumeData.personal.jobTitle}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 personal: {
//                                   ...resumeData.personal,
//                                   jobTitle: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true);
//                             }}
//                           />
//                           <InputWithLabel
//                             id="email"
//                             label="Email"
//                             type="email"
//                             placeholder="viratKohli@gmail.com"
//                             value={resumeData.personal.email}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 personal: {
//                                   ...resumeData.personal,
//                                   email: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true);
//                             }}
//                           />
//                           <InputWithLabel
//                             id="phone"
//                             label="Phone"
//                             placeholder="(123) 456-7890"
//                             value={resumeData.personal.phone}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 personal: {
//                                   ...resumeData.personal,
//                                   phone: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true);
//                             }}
//                           />
//                           <InputWithLabel
//                             id="location"
//                             label="Location"
//                             placeholder="San Francisco, CA"
//                             value={resumeData.personal.location}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 personal: {
//                                   ...resumeData.personal,
//                                   location: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true);
//                             }}
//                           />

//                           {/* <PhotoUploadWithLabel
//                             id="profilePhoto"
//                             label="Profile Photo"
//                             onChange={(e) => {
//                               const file = e.target.files[0];
//                               if (file) {
//                                 const reader = new FileReader();
//                                 reader.onloadend = () => {
//                                   setResumeData((prev) => ({
//                                     ...prev,
//                                     personal: {
//                                       ...prev.personal,
//                                       photoUrl: reader.result,
//                                     },
//                                   }));
//                                 };
//                                 reader.readAsDataURL(file);
//                               }
//                             }}
//                           /> */}
//                           <PhotoUploadWithLabel
//                             id="photo"
//                             label="Profile Photo"
//                             onChange={(e) => {
//                               const file = e.target.files[0];
//                               if (file) {
//                                 const reader = new FileReader();
//                                 reader.onloadend = () => {
//                                   setResumeData({
//                                     ...resumeData,
//                                     personal: {
//                                       ...resumeData.personal,
//                                       photoUrl: reader.result,
//                                     },
//                                   });
//                                 };
//                                 reader.readAsDataURL(file);
//                               }
//                             }}
//                           />

//                           <InputWithLabel
//                             id="linkedin"
//                             label="LinkedIn Profile"
//                             placeholder="https://www.linkedin.com/in/yourprofile"
//                             value={resumeData.personal.linkedin}
//                             onChange={(e) =>
//                               setResumeData({
//                                 ...resumeData,
//                                 personal: {
//                                   ...resumeData.personal,
//                                   linkedin: e.target.value,
//                                 },
//                               })
//                             }
//                           />

//                           <TextareaWithLabel
//                             id="summary"
//                             label="Professional Summary"
//                             placeholder="Briefly introduce yourself"
//                             value={resumeData.personal.summary}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 personal: {
//                                   ...resumeData.personal,
//                                   summary: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true);
//                             }}
//                           />
//                         </Section>
//                       )}

//                       {activeSection === "experience" && (
//                         <Section
//                           title="Work Experience"
//                           actions
//                           onAdd={() => {
//                             const newExp = {
//                               company: "",
//                               jobTitle: "",
//                               startDate: "",
//                               endDate: "",
//                               location: "",
//                               responsibilities: "",
//                             };
//                             const prev = Array.isArray(resumeData.experience)
//                               ? resumeData.experience
//                               : [];
//                             setResumeData({
//                               ...resumeData,
//                               experience: [...prev, newExp],
//                             });
//                           }}
//                           onDelete={() => {
//                             const updated = [...resumeData.experience];
//                             updated.pop();
//                             setResumeData({
//                               ...resumeData,
//                               experience: updated,
//                             });
//                           }}
//                         >
//                           {(resumeData.experience?.length
//                             ? resumeData.experience
//                             : dummyExperience
//                           ).map((exp, index) => (
//                             <React.Fragment key={index}>
//                               {index > 0 && (
//                                 <hr className="border-t border-gray-300 my-4" />
//                               )}

//                               <InputWithLabel
//                                 label="Company Name"
//                                 id={`company-${index}`}
//                                 placeholder="Google"
//                                 value={exp.company}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.experience];
//                                   updated[index].company = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     experience: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="Job Title"
//                                 id={`jobTitle-${index}`}
//                                 placeholder="Software Engineer"
//                                 value={exp.jobTitle}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.experience];
//                                   updated[index].jobTitle = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     experience: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="Start Date"
//                                 id={`startDate-${index}`}
//                                 placeholder="Jan 2020"
//                                 value={exp.startDate}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.experience];
//                                   updated[index].startDate = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     experience: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="End Date"
//                                 id={`endDate-${index}`}
//                                 placeholder="Present"
//                                 value={exp.endDate}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.experience];
//                                   updated[index].endDate = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     experience: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="Location"
//                                 id={`location-${index}`}
//                                 placeholder="Bangalore, India"
//                                 value={exp.location}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.experience];
//                                   updated[index].location = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     experience: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <TextareaWithLabel
//                                 label="Responsibilities"
//                                 id={`responsibilities-${index}`}
//                                 placeholder="Press Enter after each point. Max 40 words for first section."
//                                 value={exp.responsibilities}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.experience];
//                                   updated[index].responsibilities =
//                                     e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     experience: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                                 rows={6}
//                               />

//                               <p className="text-xs text-gray-500 mt-1">
//                                 {(() => {
//                                   const wordCount =
//                                     exp.responsibilities
//                                       ?.split(/\s+/)
//                                       .filter((w) => w).length || 0;
//                                   const limit = 40;
//                                   const remaining = Math.max(
//                                     0,
//                                     limit - wordCount
//                                   );
//                                   return `${remaining}/${limit} words left (only first 40 highlighted)`;
//                                 })()}
//                               </p>
//                             </React.Fragment>
//                           ))}
//                         </Section>
//                       )}

//                       {activeSection === "projects" && (
//                         <Section
//                           title="Projects"
//                           actions
//                           onAdd={() => {
//                             const newProject = {
//                               title: "",
//                               link: "",
//                               techStack: "",
//                               description: "",
//                             };
//                             const prev = Array.isArray(resumeData.projects)
//                               ? resumeData.projects
//                               : [];
//                             setResumeData({
//                               ...resumeData,
//                               projects: [...prev, newProject],
//                             });
//                           }}
//                           onDelete={() => {
//                             const updated = [...resumeData.projects];
//                             updated.pop();
//                             setResumeData({
//                               ...resumeData,
//                               projects: updated,
//                             });
//                           }}
//                         >
//                           {(resumeData.projects?.length
//                             ? resumeData.projects
//                             : []
//                           ).map((project, index) => (
//                             <React.Fragment key={index}>
//                               {index > 0 && (
//                                 <hr className="border-t border-gray-300 my-4" />
//                               )}

//                               <InputWithLabel
//                                 label="Project Title"
//                                 id={`projectTitle-${index}`}
//                                 placeholder="Portfolio Website"
//                                 value={project.title}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.projects];
//                                   updated[index].title = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     projects: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="Project Link"
//                                 id={`projectLink-${index}`}
//                                 placeholder="https://github.com/username/project"
//                                 value={project.link}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.projects];
//                                   updated[index].link = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     projects: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="Tech Stack"
//                                 id={`projectTech-${index}`}
//                                 placeholder="React, Node.js, MongoDB"
//                                 value={project.techStack}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.projects];
//                                   updated[index].techStack = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     projects: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <TextareaWithLabel
//                                 label="Description"
//                                 id={`projectDesc-${index}`}
//                                 placeholder="Describe your project briefly. Max 50 words."
//                                 value={project.description}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.projects];
//                                   updated[index].description = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     projects: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                                 rows={4}
//                               />

//                               <p className="text-xs text-gray-500 mt-1">
//                                 {(() => {
//                                   const wordCount =
//                                     project.description
//                                       ?.split(/\s+/)
//                                       .filter((w) => w).length || 0;
//                                   const limit = 50;
//                                   const remaining = Math.max(
//                                     0,
//                                     limit - wordCount
//                                   );
//                                   return `${remaining}/${limit} words left`;
//                                 })()}
//                               </p>
//                             </React.Fragment>
//                           ))}
//                         </Section>
//                       )}

//                       {/* {activeSection === "education" && (
//                       <Section title="Education" actions>

//                         <InputWithLabel
//                           label="Degree"
//                           id="degree"
//                           placeholder="B.Tech in Computer Science"
//                           value={resumeData.education.degree}
//                           onChange={(e) =>
//                             setResumeData({
//                               ...resumeData,
//                               education: {
//                                 ...resumeData.education,
//                                 degree: e.target.value,
//                               },
//                             })
//                           }
//                         />

//                         <InputWithLabel
//                           label="School/University"
//                           id="school"
//                           placeholder="MIT"
//                           value={resumeData.education.school}
//                           onChange={(e) =>
//                             setResumeData({
//                               ...resumeData,
//                               education: {
//                                 ...resumeData.education,
//                                 school: e.target.value,
//                               },
//                             })
//                           }
//                         />

//                         <InputWithLabel
//                           label="Year"
//                           id="year"
//                           placeholder="2018 - 2022"
//                           value={resumeData.education.year}
//                           onChange={(e) =>
//                             setResumeData({
//                               ...resumeData,
//                               education: {
//                                 ...resumeData.education,
//                                 year: e.target.value,
//                               },
//                             })
//                           }
//                         />
//                         <TextareaWithLabel
//                           label="Achievements"
//                           id="eduAchievements"
//                           placeholder="Describe academic achievements..."
//                           value={resumeData.education.achievements}
//                           onChange={(e) =>
//                             setResumeData({
//                               ...resumeData,
//                               education: {
//                                 ...resumeData.education,
//                                 achievements: e.target.value,
//                               },
//                             })
//                           }
//                         />
//                       </Section>
//                      )} */}

//                       {activeSection === "education" && (
//                         <Section
//                           title="Education"
//                           actions
//                           onAdd={() => {
//                             const newEdu = {
//                               degree: "",
//                               institution: "",
//                               startDate: "",
//                               endDate: "",
//                               location: "",
//                             };
//                             setResumeData({
//                               ...resumeData,
//                               education: [...resumeData.education, newEdu],
//                             });
//                           }}
//                           onDelete={() => {
//                             const updated = [...resumeData.education];
//                             updated.pop();
//                             setResumeData({
//                               ...resumeData,
//                               education: updated,
//                             });
//                           }}
//                         >
//                           {resumeData.education.map((edu, index) => (
//                             <div
//                               key={index}
//                               className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2"
//                             >
//                               <InputWithLabel
//                                 label="Degree"
//                                 id={`degree-${index}`}
//                                 placeholder="B.Tech in Computer Science"
//                                 value={edu.degree}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.education];
//                                   updated[index].degree = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     education: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="School / University"
//                                 id={`institution-${index}`}
//                                 placeholder="San Francisco State University"
//                                 value={edu.institution}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.education];
//                                   updated[index].institution = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     education: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="Start Date"
//                                 id={`startDate-${index}`}
//                                 placeholder="01/2019"
//                                 value={edu.startDate}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.education];
//                                   updated[index].startDate = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     education: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="End Date"
//                                 id={`endDate-${index}`}
//                                 placeholder="06/2023"
//                                 value={edu.endDate}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.education];
//                                   updated[index].endDate = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     education: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="Location"
//                                 id={`location-${index}`}
//                                 placeholder="Bangalore, India"
//                                 value={edu.location}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.education];
//                                   updated[index].location = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     education: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />

//                               {/* Separator after each education block, except the last */}
//                               {index < resumeData.education.length - 1 && (
//                                 <div className="md:col-span-2">
//                                   <hr className="border-t border-gray-300 my-6" />
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </Section>
//                       )}

//                       {/* {activeSection === "skills" && (
//                         <Section title="Skills">
//                           <InputWithLabel
//                             label="Technical Skills"
//                             id="technicalSkills"
//                             placeholder="JavaScript, React, Node.js"
//                             value={resumeData.skills.technical}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 skills: {
//                                   ...resumeData.skills,
//                                   technical: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true);
//                             }}
//                           />
//                           <InputWithLabel
//                             label="Soft Skills"
//                             id="softSkills"
//                             placeholder="Leadership, Communication"
//                             value={resumeData.skills.soft}
//                             onChange={(e) =>
//                               setResumeData({
//                                 ...resumeData,
//                                 skills: {
//                                   ...resumeData.skills,
//                                   soft: e.target.value,
//                                 },
//                               })
//                             }
//                           />
//                         </Section>
//                       )} */}
//                       {activeSection === "skills" && (
//                         <Section title="Skills">
//                           <InputWithLabel
//                             label="Technical Skills"
//                             id="technicalSkills"
//                             placeholder="JavaScript, React, Node.js"
//                             value={resumeData.skills.technical}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 skills: {
//                                   ...resumeData.skills,
//                                   technical: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true);
//                             }}
//                           />
//                           <InputWithLabel
//                             label="Soft Skills"
//                             id="softSkills"
//                             placeholder="Leadership, Communication"
//                             value={resumeData.skills.soft}
//                             onChange={(e) => {
//                               setResumeData({
//                                 ...resumeData,
//                                 skills: {
//                                   ...resumeData.skills,
//                                   soft: e.target.value,
//                                 },
//                               });
//                               setHasChanges(true); // ✅ now this input also sets the flag
//                             }}
//                           />
//                         </Section>
//                       )}

//                       {activeSection === "awards" && (
//                         <Section
//                           title="Awards"
//                           actions
//                           onAdd={() => {
//                             const updated = [
//                               ...resumeData.awards,
//                               {
//                                 title: "",
//                                 issuer: "",
//                                 year: "",
//                                 description: "",
//                               },
//                             ];
//                             setResumeData({ ...resumeData, awards: updated });
//                           }}
//                           onDelete={() => {
//                             const updated = [...resumeData.awards];
//                             updated.pop();
//                             setResumeData({ ...resumeData, awards: updated });
//                           }}
//                         >
//                           {/* Show template warning */}
//                           {selectedTemplate === "modern" && (
//                             <p className="text-xs text-gray-500 italic mb-3">
//                               *This section is not included in the Modern resume
//                               template and will not be visible in preview or
//                               final PDF.
//                             </p>
//                           )}

//                           {/* Awards form UI */}
//                           {Array.isArray(resumeData.awards) &&
//                             resumeData.awards.map((award, index) => (
//                               <div key={index} className="mb-4 border-b pb-4">
//                                 <InputWithLabel
//                                   label="Award Title"
//                                   id={`awardTitle-${index}`}
//                                   placeholder="Best Developer Award"
//                                   value={award.title}
//                                   onChange={(e) => {
//                                     const updated = [...resumeData.awards];
//                                     updated[index].title = e.target.value;
//                                     setResumeData({
//                                       ...resumeData,
//                                       awards: updated,
//                                     });
//                                   }}
//                                 />
//                                 <InputWithLabel
//                                   label="Issuer"
//                                   id={`awardIssuer-${index}`}
//                                   placeholder="Google"
//                                   value={award.issuer}
//                                   onChange={(e) => {
//                                     const updated = [...resumeData.awards];
//                                     updated[index].issuer = e.target.value;
//                                     setResumeData({
//                                       ...resumeData,
//                                       awards: updated,
//                                     });
//                                   }}
//                                 />
//                                 <InputWithLabel
//                                   label="Year"
//                                   id={`awardYear-${index}`}
//                                   placeholder="2023"
//                                   value={award.year}
//                                   onChange={(e) => {
//                                     const updated = [...resumeData.awards];
//                                     updated[index].year = e.target.value;
//                                     setResumeData({
//                                       ...resumeData,
//                                       awards: updated,
//                                     });
//                                   }}
//                                 />
//                                 <TextareaWithLabel
//                                   label="Description"
//                                   id={`awardDesc-${index}`}
//                                   placeholder="What was the award for?"
//                                   value={award.description}
//                                   onChange={(e) => {
//                                     const updated = [...resumeData.awards];
//                                     updated[index].description = e.target.value;
//                                     setResumeData({
//                                       ...resumeData,
//                                       awards: updated,
//                                     });
//                                   }}
//                                 />
//                               </div>
//                             ))}
//                         </Section>
//                       )}

//                       {activeSection === "languages" && (
//                         <Section
//                           title="Languages"
//                           actions
//                           onAdd={() => {
//                             const updated = [
//                               ...resumeData.languages,
//                               { name: "", level: "", proficiency: 0 },
//                             ];
//                             setResumeData({
//                               ...resumeData,
//                               languages: updated,
//                             });
//                           }}
//                           onDelete={() => {
//                             const updated = [...resumeData.languages];
//                             updated.pop();
//                             setResumeData({
//                               ...resumeData,
//                               languages: updated,
//                             });
//                           }}
//                         >
//                           <div className="space-y-3">
//                             {resumeData.languages.map((lang, idx) => (
//                               <div
//                                 key={idx}
//                                 className="flex items-center justify-between"
//                               >
//                                 <div className="flex flex-col space-y-1">
//                                   <input
//                                     className="text-black font-semibold border-b border-gray-300 focus:outline-none"
//                                     value={lang.name}
//                                     onChange={(e) => {
//                                       const updated = [...resumeData.languages];
//                                       updated[idx].name = e.target.value;
//                                       setResumeData({
//                                         ...resumeData,
//                                         languages: updated,
//                                       });
//                                       setHasChanges(true);
//                                     }}
//                                     placeholder="Language"
//                                   />
//                                   <input
//                                     className="text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
//                                     value={lang.level}
//                                     onChange={(e) => {
//                                       const updated = [...resumeData.languages];
//                                       updated[idx].level = e.target.value;
//                                       setResumeData({
//                                         ...resumeData,
//                                         languages: updated,
//                                       });
//                                       setHasChanges(true);
//                                     }}
//                                     placeholder="Level"
//                                   />
//                                 </div>
//                                 <div className="flex gap-1">
//                                   {[1, 2, 3, 4, 5].map((dot) => (
//                                     <div
//                                       key={dot}
//                                       onClick={() => {
//                                         const updated = [
//                                           ...resumeData.languages,
//                                         ];
//                                         updated[idx].proficiency = dot;
//                                         setResumeData({
//                                           ...resumeData,
//                                           languages: updated,
//                                         });
//                                         setHasChanges(true);
//                                       }}
//                                       className={`w-3 h-3 rounded-full cursor-pointer ${
//                                         lang.proficiency >= dot
//                                           ? "bg-gray-800"
//                                           : "bg-gray-300"
//                                       }`}
//                                     />
//                                   ))}
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </Section>
//                       )}

//                       {activeSection === "interests" && (
//                         <Section title="Interests">
//                           <TextareaWithLabel
//                             label="Interests"
//                             id="interests"
//                             placeholder="Photography, Reading, Chess"
//                             value={resumeData.interests}
//                             onChange={(e) =>
//                               setResumeData({
//                                 ...resumeData,
//                                 interests: e.target.value,
//                               })
//                             }
//                           />
//                         </Section>
//                       )}

//                       {/* {activeSection === "references" && (
//                         <Section title="References" actions>
//                           <InputWithLabel
//                             label="Name"
//                             id="refName"
//                             placeholder="Jane Doe"
//                             value={resumeData.references.name}
//                             onChange={(e) =>
//                               setResumeData({
//                                 ...resumeData,
//                                 references: {
//                                   ...resumeData.references,
//                                   name: e.target.value,
//                                 },
//                               })
//                             }
//                           />
//                           <InputWithLabel
//                             label="Position"
//                             id="refPosition"
//                             placeholder="Manager at XYZ"
//                             value={resumeData.references.position}
//                             onChange={(e) =>
//                               setResumeData({
//                                 ...resumeData,
//                                 references: {
//                                   ...resumeData.references,
//                                   position: e.target.value,
//                                 },
//                               })
//                             }
//                           />
//                           <InputWithLabel
//                             label="Contact"
//                             id="refContact"
//                             placeholder="jane@example.com"
//                             value={resumeData.references.contact}
//                             onChange={(e) =>
//                               setResumeData({
//                                 ...resumeData,
//                                 references: {
//                                   ...resumeData.references,
//                                   contact: e.target.value,
//                                 },
//                               })
//                             }
//                           />
//                           <TextareaWithLabel
//                             label="Reference Notes"
//                             id="refNotes"
//                             placeholder="Optional notes..."
//                             value={resumeData.references.notes}
//                             onChange={(e) =>
//                               setResumeData({
//                                 ...resumeData,
//                                 references: {
//                                   ...resumeData.references,
//                                   notes: e.target.value,
//                                 },
//                               })
//                             }
//                           />
//                         </Section>
//                       )} */}

//                       {activeSection === "references" && (
//                         <Section
//                           title="References"
//                           actions
//                           onAdd={() => {
//                             const newRef = {
//                               name: "",
//                               position: "",
//                               contact: "",
//                               notes: "",
//                             };
//                             setResumeData((prev) => ({
//                               ...prev,
//                               references: [...(prev.references || []), newRef],
//                             }));
//                           }}
//                           onDelete={() => {
//                             setResumeData((prev) => ({
//                               ...prev,
//                               references: prev.references.slice(0, -1),
//                             }));
//                           }}
//                         >
//                           {(resumeData.references?.length
//                             ? resumeData.references
//                             : []
//                           ).map((ref, index) => (
//                             <div
//                               key={index}
//                               className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2"
//                             >
//                               <InputWithLabel
//                                 label="Name"
//                                 id={`refName-${index}`}
//                                 placeholder="Jane Doe"
//                                 value={ref.name}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.references];
//                                   updated[index].name = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     references: updated,
//                                   });
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="Position"
//                                 id={`refPosition-${index}`}
//                                 placeholder="Manager at XYZ"
//                                 value={ref.position}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.references];
//                                   updated[index].position = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     references: updated,
//                                   });
//                                 }}
//                               />

//                               <InputWithLabel
//                                 label="Contact"
//                                 id={`refContact-${index}`}
//                                 placeholder="jane@example.com"
//                                 value={ref.contact}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.references];
//                                   updated[index].contact = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     references: updated,
//                                   });
//                                 }}
//                               />

//                               <TextareaWithLabel
//                                 label="Reference Notes"
//                                 id={`refNotes-${index}`}
//                                 placeholder="Optional notes..."
//                                 value={ref.notes}
//                                 onChange={(e) => {
//                                   const updated = [...resumeData.references];
//                                   updated[index].notes = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     references: updated,
//                                   });
//                                 }}
//                               />

//                               {/* Separator */}
//                               {index < resumeData.references.length - 1 && (
//                                 <div className="md:col-span-2">
//                                   <hr className="border-t border-gray-300 my-6" />
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </Section>
//                       )}

//                       {activeSection === "certification" && (
//                         <Section
//                           title="Certifications"
//                           actions
//                           onAdd={() => {
//                             const updated = [
//                               ...resumeData.certifications,
//                               { title: "", issuer: "", description: "" },
//                             ];
//                             setResumeData({
//                               ...resumeData,
//                               certifications: updated,
//                             });
//                             setHasChanges(true);
//                           }}
//                           onDelete={() => {
//                             const updated = [...resumeData.certifications];
//                             updated.pop();
//                             setResumeData({
//                               ...resumeData,
//                               certifications: updated,
//                             });
//                             setHasChanges(true);
//                           }}
//                         >
//                           {resumeData.certifications.map((cert, idx) => (
//                             <React.Fragment key={idx}>
//                               {idx > 0 && (
//                                 <hr className="border-t border-gray-300 md:col-span-2 my-4" />
//                               )}
//                               <InputWithLabel
//                                 id={`cert-title-${idx}`}
//                                 label="Title"
//                                 placeholder="Advanced Google Analytics"
//                                 value={cert.title}
//                                 onChange={(e) => {
//                                   const updated = [
//                                     ...resumeData.certifications,
//                                   ];
//                                   updated[idx].title = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     certifications: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />
//                               <InputWithLabel
//                                 id={`cert-issuer-${idx}`}
//                                 label="Issuer"
//                                 placeholder="Google / Coursera"
//                                 value={cert.issuer}
//                                 onChange={(e) => {
//                                   const updated = [
//                                     ...resumeData.certifications,
//                                   ];
//                                   updated[idx].issuer = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     certifications: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />
//                               <TextareaWithLabel
//                                 id={`cert-desc-${idx}`}
//                                 label="Description"
//                                 placeholder="A course focused on mastering Google Analytics for insights..."
//                                 value={cert.description}
//                                 onChange={(e) => {
//                                   const updated = [
//                                     ...resumeData.certifications,
//                                   ];
//                                   updated[idx].description = e.target.value;
//                                   setResumeData({
//                                     ...resumeData,
//                                     certifications: updated,
//                                   });
//                                   setHasChanges(true);
//                                 }}
//                               />
//                             </React.Fragment>
//                           ))}
//                         </Section>
//                       )}

//                       {activeSection === "customSection" && (
//                         <Section
//                           title="Custom Section"
//                           actions
//                           onAdd={() => {
//                             const newEntry = {
//                               title: "",
//                               description: "",
//                               year: "",
//                             };
//                             setCustomSectionConfig((prev) => ({
//                               ...prev,
//                               entries: [...prev.entries, newEntry],
//                             }));
//                           }}
//                           onDelete={() => {
//                             setCustomSectionConfig((prev) => ({
//                               ...prev,
//                               entries: prev.entries.slice(0, -1),
//                             }));
//                           }}
//                         >
//                           {/* Grid wrapper for layout consistency */}
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             {/* Section Title Input */}
//                             <InputWithLabel
//                               label="Section Title"
//                               placeholder="e.g. Freelance Projects"
//                               value={customSectionConfig.title}
//                               onChange={(e) =>
//                                 setCustomSectionConfig((prev) => ({
//                                   ...prev,
//                                   title: e.target.value,
//                                 }))
//                               }
//                             />

//                             {/* Replacement Section Dropdown */}
//                             <div className="md:col-span-2">
//                               <label className="text-sm font-medium text-gray-700">
//                                 Replace Section
//                               </label>
//                               <select
//                                 className="w-full mt-1 border-gray-300 rounded-md"
//                                 value={customSectionConfig.replaces}
//                                 onChange={(e) =>
//                                   setCustomSectionConfig((prev) => ({
//                                     ...prev,
//                                     replaces: e.target.value,
//                                   }))
//                                 }
//                               >
//                                 <option value="">(Don't replace)</option>
//                                 <option value="awards">Awards</option>
//                                 <option value="achievements">
//                                   Achievements
//                                 </option>
//                                 <option value="certifications">
//                                   Certifications
//                                 </option>
//                                 <option value="interests">Interests</option>
//                                 <option value="references">References</option>
//                                 <option value="languages">Languages</option>
//                               </select>
//                             </div>
//                           </div>

//                           {/* Entry Fields */}
//                           {(customSectionConfig.entries.length === 0
//                             ? [{ title: "", description: "", year: "" }]
//                             : customSectionConfig.entries
//                           ).map((entry, idx) => (
//                             <div
//                               key={idx}
//                               className="md:col-span-2 border-b pb-4 mt-6"
//                             >
//                               <InputWithLabel
//                                 label="Title"
//                                 value={entry.title}
//                                 onChange={(e) => {
//                                   const updated = [
//                                     ...customSectionConfig.entries,
//                                   ];
//                                   updated[idx].title = e.target.value;
//                                   setCustomSectionConfig((prev) => ({
//                                     ...prev,
//                                     entries: updated,
//                                   }));
//                                 }}
//                               />
//                               <TextareaWithLabel
//                                 label="Description"
//                                 value={entry.description}
//                                 onChange={(e) => {
//                                   const updated = [
//                                     ...customSectionConfig.entries,
//                                   ];
//                                   updated[idx].description = e.target.value;
//                                   setCustomSectionConfig((prev) => ({
//                                     ...prev,
//                                     entries: updated,
//                                   }));
//                                 }}
//                               />
//                               <InputWithLabel
//                                 label="Year"
//                                 placeholder="e.g. 2023"
//                                 value={entry.year}
//                                 onChange={(e) => {
//                                   const updated = [
//                                     ...customSectionConfig.entries,
//                                   ];
//                                   updated[idx].year = e.target.value;
//                                   setCustomSectionConfig((prev) => ({
//                                     ...prev,
//                                     entries: updated,
//                                   }));
//                                 }}
//                               />
//                             </div>
//                           ))}
//                         </Section>
//                       )}
//                     </div>

//                     <div className="md:col-span-1">
//                       <div className="bg-white rounded-lg shadow-sm h-full">
//                         <div className="p-4 flex flex-col h-full">
//                           <div className="flex items-center justify-between mb-4">
//                             <h2 className="font-bold text-lg">AI Assistant</h2>
//                             <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                               Online
//                             </span>
//                           </div>
//                           <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[calc(100vh-300px)]">
//                             {messages.map((message, index) => (
//                               <div
//                                 key={index}
//                                 className={`flex ${
//                                   message.role === "assistant"
//                                     ? "justify-start"
//                                     : "justify-end"
//                                 }`}
//                               >
//                                 <div
//                                   className={`max-w-[80%] rounded-lg p-3 ${
//                                     message.role === "assistant"
//                                       ? "bg-gray-100 text-gray-800"
//                                       : "bg-green-500 text-white"
//                                   }`}
//                                 >
//                                   {message.content}
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                           <div className="flex gap-2">
//                             <input
//                               className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                               placeholder="Ask for help with your resume..."
//                               value={input}
//                               onChange={(e) => setInput(e.target.value)}
//                               onKeyDown={(e) =>
//                                 e.key === "Enter" && handleSendMessage()
//                               }
//                             />
//                             <button
//                               className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
//                               onClick={handleSendMessage}
//                             >
//                               <Send className="h-4 w-4" />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === "preview" && (
//                   <>
//                     <div className="flex justify-end mb-4">
//                       <button
//                         onClick={() =>
//                           handleDownload(
//                             resumeData,
//                             customSectionConfig,
//                             isReplaced
//                           )
//                         }
//                         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//                       >
//                         Download Resume
//                       </button>
//                     </div>
//                     <div
//                       style={{
//                         minHeight: "100vh",
//                         background: "#fff",
//                         padding: "2rem",
//                       }}
//                     >
//                       <ResumePreview
//                         ref={previewRef}
//                         resumeData={resumeData}
//                         selectedTemplate={selectedTemplate}
//                         customSectionConfig={customSectionConfig}
//                       />
//                     </div>
//                   </>
//                 )}

//                 {/* OR to visually compare PDF */}
//                 {/* <PDFViewer width="100%" height="800px">
//       <PDFResumeTemplate resumeData={resumeData} />
//     </PDFViewer>
//    */}
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </ResumeContext.Provider>
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

// // const PhotoUploadWithLabel = ({ id, label, onChange }) => (
// //   <div className="space-y-2">
// //     <label htmlFor={id} className="block text-sm font-medium text-gray-800">
// //       {label}
// //     </label>
// //     <input
// //       type="file"
// //       id={id}
// //       accept="image/*"
// //       onChange={onChange}
// //       className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
// //     />
// //   </div>
// // );

// const PhotoUploadWithLabel = ({ id, label, onChange }) => {
//   const [fileName, setFileName] = React.useState("");

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFileName(file ? file.name : "");
//     onChange(e); // notify parent
//   };

//   return (
//     <div className="space-y-2">
//       <label htmlFor={id} className="block text-sm font-medium text-gray-800">
//         {label}
//       </label>

//       <div className="flex items-center gap-4">
//         {/* Hidden file input */}
//         <input
//           type="file"
//           id={id}
//           accept="image/*"
//           onChange={handleFileChange}
//           className="hidden"
//         />

//         {/* Styled label as button */}
//         <label
//           htmlFor={id}
//           className={`cursor-pointer px-4 py-2 text-sm rounded-md transition-colors font-medium ${
//             fileName
//               ? "bg-cyan-600 text-white"
//               : "bg-green-500 hover:bg-green-600 text-white"
//           }`}
//         >
//           {fileName ? "Uploaded" : "Upload Photo"}
//         </label>

//         {/* Optional: show file name */}
//         {fileName && (
//           <span className="text-sm text-gray-600 truncate max-w-xs">
//             {fileName}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// const Section = ({ title, children, actions, onAdd, onDelete }) => (
//   <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
//     <div className="flex items-center justify-between">
//       <h2 className="text-2xl font-bold">{title}</h2>
//       {actions && (
//         <div className="flex gap-2">
//           <button
//             type="button"
//             className="flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//             onClick={onAdd}
//           >
//             <Plus className="h-4 w-4" /> Add
//           </button>
//           <button
//             type="button"
//             className="flex items-center px-2 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
//             onClick={onDelete}
//           >
//             <Trash2 className="h-4 w-4" />
//           </button>
//         </div>
//       )}
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
//   </div>
// );

import React, { useEffect, useState, useContext, useRef } from "react";
import SectionSidebar from "../../components/ResumeBuilder/SectionSidebar";
import SectionEditorPanel from "../../components/ResumeBuilder/SectionEditorPanel";
import ResumePreviewSection from "../../components/ResumeBuilder/ResumePreviewSection";
import AIChatBox from "../../components/ResumeBuilder/AIChatBox";

import PersonalSection from "../../components/ResumeBuilder/PersonalSection";
import CustomSection from "../../components/ResumeBuilder/CustomSection";
import EducationSection from "../../components/ResumeBuilder/EducationSection";
import ExperienceSection from "../../components/ResumeBuilder/ExperienceSection";
import ProjectsSection from "../../components/ResumeBuilder/ProjectsSection";
import SkillsSection from "../../components/ResumeBuilder/SkillsSection";
import AwardsSection from "../../components/ResumeBuilder/AwardsSection";
import LanguagesSection from "../../components/ResumeBuilder/LanguagesSection";
import InterestsSection from "../../components/ResumeBuilder/InterestsSection";
import ReferencesSection from "../../components/ResumeBuilder/ReferencesSection";
import CertificationsSection from "../../components/ResumeBuilder/CertificationsSection";
import { ResumeContext } from "../../context/ResumeContext";


import {
  Send,
  Plus,
  Trash2,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  Heart,
  CheckCircle,
  FileText,
  Puzzle,
  BadgeCheck,
  Medal,
  FolderKanban,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import AchievementsSection from "../../components/ResumeBuilder/AchievementsSection";

export default function ResumeBuilder() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI resume assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [activeSection, setActiveSection] = useState("personal");
  const [activeTab, setActiveTab] = useState("editor");
  const [pendingSection, setPendingSection] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [hasChanges, setHasChanges] = useState(false);
const [isLoading, setIsLoading] = useState(false);

  // Handle pending section changes when tab switches
  useEffect(() => {
    if (pendingSection && activeTab === "editor") {
      setActiveSection(pendingSection);
      setPendingSection(null);
    }
  }, [activeTab, pendingSection]);

const handleSendMessage = async () => {
  if (!input.trim()) return;
  const userMessage = { role: "user", content: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setIsLoading(true);

  // Simulate AI reply
  setTimeout(() => {
    const aiResponse = {
      role: "assistant",
      content: "Thanks for your question! Here's something helpful.",
    };
    setMessages((prev) => [...prev, aiResponse]);
    setIsLoading(false);
  }, 1200);
};

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData((prev) => ({
          ...prev,
          personal: {
            ...prev.personal,
            photoUrl: reader.result, // base64 image string
          },
        }));
      };
      reader.readAsDataURL(file); // converts to base64
    }
  };


  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: FolderKanban },
    { id: "skills", name: "Skills", icon: CheckCircle },
    { id: "certification", name: "Certifications", icon: BadgeCheck },
    { id: "awards", name: "Awards", icon: Award },
    { id: "achievements", name: "Achievements", icon: Medal },
    { id: "languages", name: "Languages", icon: Languages },
    { id: "interests", name: "Interests", icon: Heart },
    { id: "references", name: "References", icon: FileText },
    { id: "customSection", name: "Custom Section", icon: Puzzle },
  ];

  const [resumeData, setResumeData] = useState({
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      jobTitle: "",
      linkedin: "",
      photoUrl: "",
      summary: "",
    },
    experience: [
      {
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        responsibilities: "",
      },
    ],

    education: [
      {
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ],
    skills: [], // or ["JavaScript", "React"]
    Awards: [
      {
        title: "",
        issuer: "",
        year: "",
        description: "",
      },
    ],
    achievements: [
      {
        title: "",
        description: "",
      },
    ],
    certifications: [
      {
        title: "",
        issuer: "",
        description: "",
      },
    ],
    languages: [
      {
        name: "",
        level: "",
        proficiency: 0,
      },
    ],
    interests: [""],
    references: [
      {
        name: "",
        position: "",
        contact: "",
        notes: "",
      },
    ],
  });

  const { resumeRef } = useContext(ResumeContext);
  resumeRef.current = resumeData;

  useEffect(() => {
  if (resumeRef?.current !== undefined) {
  resumeRef.current = resumeData;
}
}, [resumeData, resumeRef]);


  const [customSectionConfig, setCustomSectionConfig] = useState({
    replaces: "", // which section it replaces
    title: "", // section title (e.g. "Freelance Projects")
    entries: [], // entries like [{ title, description, year }]
  });

  const handleSectionClick = (sectionId) => {
    if (activeTab !== "editor") {
      // Store the section we want to navigate to
      setPendingSection(sectionId);
      // Switch to editor tab
      setActiveTab("editor");
    } else {
      // We're already in editor mode, just change section
      setActiveSection(sectionId);
    }
  };

  const previewRef = useRef();

  const isReplaced = (key) => {
    return customSectionConfig?.replaces === key;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <>
        <Navbar
          resumeData={resumeData}
          customSectionConfig={customSectionConfig}
          isReplaced={isReplaced}
          selectedTemplate={selectedTemplate}
        />
        <main className="flex flex-grow">
          {/* Sidebar */}
          <SectionSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            sections={sections}
            handleSectionClick={handleSectionClick}
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />

          {/* Main Content Area */}
          <div className="flex-grow p-6 overflow-auto">
            <div className="max-w-6xl mx-auto">
              {/* Tabs on top center */}
              <div className="flex justify-center mb-6">
                <div className="grid grid-cols-2 bg-gray-200 rounded-lg p-1 max-w-md">
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "editor"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab("editor")}
                  >
                    Resume Editor
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "preview"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab("preview")}
                  >
                    Preview
                  </button>
                </div>
              </div>

              {/* Editor + AI Chat */}
              {activeTab === "editor" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    {activeSection === "personal" && (
                      <PersonalSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        setHasChanges={setHasChanges}
                      />
                    )}
                    {activeSection === "education" && (
                      <EducationSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        setHasChanges={setHasChanges}
                      />
                    )}
                    {activeSection === "experience" && (
                      <ExperienceSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        setHasChanges={setHasChanges}
                      />
                    )}
                    {activeSection === "projects" && (
                      <ProjectsSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        setHasChanges={setHasChanges}
                      />
                    )}
                    {activeSection === "skills" && (
                      <SkillsSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        setHasChanges={setHasChanges}
                      />
                    )}
                    {activeSection === "awards" && (
                      <AwardsSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        selectedTemplate={selectedTemplate}
                      />
                    )}
                    {activeSection == "achievements" && (
                      <AchievementsSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        setHasChanges={setHasChanges}
                      />
                    )}
                    {activeSection === "languages" && (
                      <LanguagesSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        setHasChanges={setHasChanges}
                      />
                    )}
                    {activeSection === "interests" && (
                      <InterestsSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                      />
                    )}
                    {activeSection === "references" && (
                      <ReferencesSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                      />
                    )}
                    {activeSection === "certification" && (
                      <CertificationsSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        setHasChanges={setHasChanges}
                      />
                    )}
                    {activeSection === "customSection" && (
                      <CustomSection
                        customSectionConfig={customSectionConfig}
                        setCustomSectionConfig={setCustomSectionConfig}
                      />
                    )}
                  </div>

                  {/* AI Chatbox */}
                  <AIChatBox
                    messages={messages}
                    input={input}
                    setInput={setInput}
                    handleSendMessage={handleSendMessage}
                  />
                </div>
              )}

              {/* Resume Preview */}
              {activeTab === "preview" && (
                <ResumePreviewSection
                  resumeData={resumeData}
                  customSectionConfig={customSectionConfig}
                  isReplaced={isReplaced}
                  // handleDownload={handleDownload}
                  selectedTemplate={selectedTemplate}
                  previewRef={previewRef}
                />
              )}
            </div>
          </div>
        </main>
      </>
    </div>
  );
}
