// Section.jsx
import React from "react";
import { Plus, Trash2 } from "lucide-react";

const Section = ({ title, children, actions, onAdd, onDelete }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">{title}</h2>
      {actions && (
        <div className="flex gap-2">
          <button
            type="button"
            className="flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            onClick={onAdd}
          >
            <Plus className="h-4 w-4" /> Add
          </button>
          <button
            type="button"
            className="flex items-center px-2 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  </div>
);

export default Section;
