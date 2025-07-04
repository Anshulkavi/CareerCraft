// PhotoUploadWithLabel.jsx
import React from "react";

const PhotoUploadWithLabel = ({ id, label, onChange }) => {
  const [fileName, setFileName] = React.useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
    onChange(e); // notify parent
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      <div className="flex items-center gap-4">
        <input
          type="file"
          id={id}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor={id}
          className={`cursor-pointer px-4 py-2 text-sm rounded-md transition-colors font-medium ${
            fileName
              ? "bg-cyan-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {fileName ? "Uploaded" : "Upload Photo"}
        </label>
        {fileName && (
          <span className="text-sm text-gray-600 truncate max-w-xs">
            {fileName}
          </span>
        )}
      </div>
    </div>
  );
};

export default PhotoUploadWithLabel;
