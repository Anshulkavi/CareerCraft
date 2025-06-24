// main.jsx or index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Ensure you have your global styles here
import { ResumeProvider } from "./context/ResumeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResumeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ResumeProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { HashRouter } from "react-router-dom"; // ✅ Changed
// import App from "./App";
// import "./index.css";
// import { ResumeProvider } from "./context/ResumeContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ResumeProvider>
//       <HashRouter> {/* ✅ Changed */}
//         <App />
//       </HashRouter>
//     </ResumeProvider>
//   </React.StrictMode>
// );
