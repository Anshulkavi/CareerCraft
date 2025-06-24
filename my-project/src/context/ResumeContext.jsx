// src/context/ResumeContext.jsx
import React, { createContext, useContext } from "react";

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

// ✅ Exporting ResumeProvider as named export
export const ResumeProvider = ({ children, onDownload }) => {
  return (
    <ResumeContext.Provider value={{ onDownload }}>
      {children}
    </ResumeContext.Provider>
  );
};

// ✅ Also export ResumeContext (optional, for direct use)
export { ResumeContext };
