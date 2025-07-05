import React from "react";

const EditorSectionContainer = ({
  sectionKey,
  sectionTitle,
  children,
  sectionOrder,
  setSectionOrder,
}) => {
  const index = sectionOrder.indexOf(sectionKey);

  const moveSectionUp = () => {
    if (index > 0) {
      const newOrder = [...sectionOrder];
      [newOrder[index - 1], newOrder[index]] = [
        newOrder[index],
        newOrder[index - 1],
      ];
      setSectionOrder(newOrder);
    }
  };

  const moveSectionDown = () => {
    if (index < sectionOrder.length - 1) {
      const newOrder = [...sectionOrder];
      [newOrder[index + 1], newOrder[index]] = [
        newOrder[index],
        newOrder[index + 1],
      ];
      setSectionOrder(newOrder);
    }
  };

  return (
    <div className="rounded border p-4 mb-4 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold capitalize">{sectionTitle}</h2>
        <div className="space-x-1">
          <button
            onClick={moveSectionUp}
            disabled={index === 0}
            className="px-2 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            ⬆️
          </button>
          <button
            onClick={moveSectionDown}
            disabled={index === sectionOrder.length - 1}
            className="px-2 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            ⬇️
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default EditorSectionContainer;
