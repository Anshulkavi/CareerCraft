import React from "react";

const SectionEditorPanel = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <div className="w-full">
          <div className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-gray-200 rounded-lg p-1">
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "editor"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("editor")}
            >
              Resume Editor
            </button>
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "preview"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </button>
          </div>

          {/* Always render children here since parent controls activeTab */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEditorPanel;
