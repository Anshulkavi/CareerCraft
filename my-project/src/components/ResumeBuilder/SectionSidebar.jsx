import React from "react";

const SectionSidebar = ({ sections = [], activeSection, handleSectionClick, selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="w-20 md:w-64 bg-white border-r flex-shrink-0 h-[calc(100vh-65px)] sticky top-[65px]">
      <div className="p-4 pt-6 pb-6 border-b">
        <label htmlFor="templateSelect" className="block text-sm font-medium text-gray-700 mb-1">
          Choose Template
        </label>
        <select
          id="templateSelect"
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
          className="w-full px-2 py-1 rounded-md border border-gray-300 text-sm"
        >
          <option value="modern">Modern</option>
          <option value="elegant">Elegant</option>
          <option value="simple">Simple</option>
        </select>
      </div>

      <div className="p-4 pt-8">
        <div className="flex flex-col gap-2">
          {Array.isArray(sections) && sections.length > 0 ? (
            sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
                    isActive ? "bg-green-50 text-green-600" : "hover:bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-green-600" : "text-gray-800"}`} />
                  <span className="hidden md:block">{section.name}</span>
                </button>
              );
            })
          ) : (
            <p className="text-sm text-gray-500">No sections available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionSidebar;
