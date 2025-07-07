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
      if (!customSectionConfig?.replaces || !customSectionConfig?.title)
        return null;

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
        case "simple":
          return <SimpleTemplate {...templateProps} />;
        default:
          return <ModernTemplate {...templateProps} />;
      }
    };

    return (
      <div
        ref={ref}
    className="w-full h-auto bg-white p-6 text-black"
    id="pdf-content"
      >
        {getTemplateComponent()}
      </div>
    );
  }
);

export default ResumePreview;
