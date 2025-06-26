import { createContext, useRef } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const resumeRef = useRef();

  return (
    <ResumeContext.Provider value={{ resumeRef }}>
      {children}
    </ResumeContext.Provider>
  );
};
