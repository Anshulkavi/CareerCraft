import React from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Award,
  Languages,
  Heart,
  FileText,
} from "lucide-react";

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

export default function Sidebar({ activeSection, setActiveSection }) {
  return (
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
                  </button>
                );
              })}
            </div>
          </div>
        </div>
    );
}