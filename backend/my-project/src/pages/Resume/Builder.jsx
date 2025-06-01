"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom"; // Ensure this is imported
import {
  Send,
  Plus,
  Trash2,
  Download,
  Share2,
  Save,
  ArrowLeft,
  Settings,
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  Heart,
  CheckCircle,
} from "lucide-react";
// import Logo from "./Logo";

export default function ResumeBuilder() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI resume assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [activeSection, setActiveSection] = useState("personal");

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I can help you improve that section. Based on your experience, I suggest highlighting your achievements with quantifiable results. Would you like me to rewrite it for you?",
        },
      ]);
    }, 1000);

    setInput("");
  };

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "skills", name: "Skills", icon: CheckCircle },
    { id: "awards", name: "Awards", icon: Award },
    { id: "languages", name: "Languages", icon: Languages },
    { id: "interests", name: "Interests", icon: Heart },
    { id: "references", name: "References", icon: FileText },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link to="/">
                <img
                  src={Logo}
                  alt="CareerCraft Logo"
                  className="h-12 w-auto rounded cursor-pointer"
                />
              </Link>
              <Link to='/'>
              <span className="text-green-500 font-semibold text-2xl">
                CareerCraft
              </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-1">
              <Settings className="h-4 w-4" />
              <span className="hidden md:inline">Settings</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span className="hidden md:inline">Download</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              <span className="hidden md:inline">Share</span>
            </Button>
            <Button  variant="outline" size="sm" className="gap-1">
              <Save className="h-4 w-4" />
              <span className="hidden md:inline">Save</span>
            </Button>
          </div>
        </div>
      </header> */}

      <main className="flex-grow flex">
        <div className="w-20 md:w-64 bg-white border-r flex-shrink-0 h-[calc(100vh-65px)] sticky top-[65px]">
          <div className="p-4">
            <div className="flex flex-col gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-green-50 text-green-600"
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isActive ? "text-green-600" : "text-gray-800"
                      }`}
                    />
                    <span className="hidden md:block">{section.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-grow p-6 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="editor" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="editor">Resume Editor</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>

              <TabsContent value="editor">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    {activeSection === "personal" && (
                      <Section title="Personal Information">
                        <InputWithLabel
                          id="firstName"
                          label="First Name"
                          placeholder="John"
                        />
                        <InputWithLabel
                          id="lastName"
                          label="Last Name"
                          placeholder="Doe"
                        />
                        <InputWithLabel
                          id="jobTitle"
                          label="Job Title"
                          placeholder="Software Engineer"
                        />
                        <InputWithLabel
                          id="email"
                          label="Email"
                          type="email"
                          placeholder="john@example.com"
                        />
                        <InputWithLabel
                          id="phone"
                          label="Phone"
                          placeholder="(123) 456-7890"
                        />
                        <InputWithLabel
                          id="location"
                          label="Location"
                          placeholder="San Francisco, CA"
                        />
                        <TextareaWithLabel
                          id="summary"
                          label="Professional Summary"
                          placeholder="Brief summary about your experience..."
                        />
                      </Section>
                    )}
                    {activeSection === "experience" && (
                      <Section title="Work Experience" actions>
                        <InputWithLabel
                          label="Company Name"
                          id="company"
                          placeholder="Google"
                        />
                        <InputWithLabel
                          label="Job Title"
                          id="title"
                          placeholder="Software Engineer"
                        />
                        <InputWithLabel
                          label="Duration"
                          id="duration"
                          placeholder="Jan 2020 - Present"
                        />
                        <TextareaWithLabel
                          label="Responsibilities"
                          id="responsibilities"
                          placeholder="Describe what you did..."
                        />
                      </Section>
                    )}
                    {activeSection === "education" && (
                      <Section title="Education" actions>
                        <InputWithLabel
                          label="School/University"
                          id="school"
                          placeholder="MIT"
                        />
                        <InputWithLabel
                          label="Degree"
                          id="degree"
                          placeholder="B.Tech in Computer Science"
                        />
                        <InputWithLabel
                          label="Year"
                          id="year"
                          placeholder="2018 - 2022"
                        />
                        <TextareaWithLabel
                          label="Achievements"
                          id="eduAchievements"
                          placeholder="Describe academic achievements..."
                        />
                      </Section>
                    )}
                    {activeSection === "skills" && (
                      <Section title="Skills">
                        <InputWithLabel
                          label="Technical Skills"
                          id="technicalSkills"
                          placeholder="JavaScript, React, Node.js"
                        />
                        <InputWithLabel
                          label="Soft Skills"
                          id="softSkills"
                          placeholder="Leadership, Communication"
                        />
                      </Section>
                    )}
                    {activeSection === "awards" && (
                      <Section title="Awards" actions>
                        <InputWithLabel
                          label="Award Title"
                          id="awardTitle"
                          placeholder="Best Developer Award"
                        />
                        <InputWithLabel
                          label="Issuer"
                          id="awardIssuer"
                          placeholder="Google"
                        />
                        <InputWithLabel
                          label="Year"
                          id="awardYear"
                          placeholder="2023"
                        />
                        <TextareaWithLabel
                          label="Description"
                          id="awardDesc"
                          placeholder="What was the award for?"
                        />
                      </Section>
                    )}
                    {activeSection === "languages" && (
                      <Section title="Languages">
                        <InputWithLabel
                          label="Languages"
                          id="languages"
                          placeholder="English, Spanish, Hindi"
                        />
                      </Section>
                    )}
                    {activeSection === "interests" && (
                      <Section title="Interests">
                        <TextareaWithLabel
                          label="Interests"
                          id="interests"
                          placeholder="Photography, Reading, Chess"
                        />
                      </Section>
                    )}
                    {activeSection === "references" && (
                      <Section title="References" actions>
                        <InputWithLabel
                          label="Name"
                          id="refName"
                          placeholder="Jane Doe"
                        />
                        <InputWithLabel
                          label="Position"
                          id="refPosition"
                          placeholder="Manager at XYZ"
                        />
                        <InputWithLabel
                          label="Contact"
                          id="refContact"
                          placeholder="jane@example.com"
                        />
                        <TextareaWithLabel
                          label="Reference Notes"
                          id="refNotes"
                          placeholder="Optional notes..."
                        />
                      </Section>
                    )}
                  </div>

                  <div className="md:col-span-1">
                    <div className="bg-white rounded-lg shadow-sm h-full">
                      <div className="p-4 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="font-bold text-lg">AI Assistant</h2>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Online
                          </span>
                        </div>
                        <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[calc(100vh-300px)]">
                          {messages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${
                                message.role === "assistant"
                                  ? "justify-start"
                                  : "justify-end"
                              }`}
                            >
                              <div
                                className={`max-w-[80%] rounded-lg p-3 ${
                                  message.role === "assistant"
                                    ? "bg-gray-100 text-gray-800"
                                    : "bg-green-500 text-white"
                                }`}
                              >
                                {message.content}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Ask for help with your resume..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && handleSendMessage()
                            }
                          />
                          <Button
                            size="icon"
                            onClick={handleSendMessage}
                            className="bg-green-500 hover:bg-green-600"
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="preview">
                <div className="p-6 text-center text-gray-400">
                  Preview coming soon...
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

const InputWithLabel = ({ id, label, type = "text", placeholder }) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-gray-800">
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      className="text-gray-900 placeholder-gray-500"
    />
  </div>
);

const TextareaWithLabel = ({ id, label, placeholder }) => (
  <div className="md:col-span-2 space-y-2">
    <Label htmlFor={id} className="text-gray-800">
      {label}
    </Label>
    <Textarea
      id={id}
      placeholder={placeholder}
      rows={4}
      className="text-gray-900 placeholder-gray-500"
    />
  </div>
);

const Section = ({ title, children, actions }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">{title}</h2>
      {actions && (
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-1" /> Add
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  </div>
);
