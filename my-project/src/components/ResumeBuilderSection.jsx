// import React, { useState } from "react";
// import {
//   User,
//   Database,
//   Briefcase,
//   Code,
//   ShoppingCart,
//   GraduationCap,
//   Settings,
//   Calculator,
// } from "lucide-react";
// import BusinessAnalyst from "../assets/businessAnalyst.png";
// import DataScientist from "../assets/DataScientist.png";
// import ProductManager from "../assets/ProductManager.png";
// import SoftwareEngineer from "../assets/SoftwareEngineer.png";
// import Sales from "../assets/Sales.png";
// import Teacher from "../assets/Teacher.png";
// import Engineer from "../assets/Engineer.png";
// import Accounting from "../assets/Accounting.png";
// import Marketing from "../assets/Marketing.png";

// const roles = [
//   {
//     name: "Business Analyst",
//     icon: User,
//     color: "bg-blue-500",
//     image: BusinessAnalyst,
//   },
//   {
//     name: "Data Scientist",
//     icon: Database,
//     color: "bg-purple-500",
//     image: DataScientist,
//   },
//   {
//     name: "Product Manager",
//     icon: Briefcase,
//     color: "bg-orange-500",
//     image: ProductManager,
//   },
//   {
//     name: "Software Engineer",
//     icon: Code,
//     color: "bg-green-500",
//     image: SoftwareEngineer,
//   },
//   { name: "Sales", icon: ShoppingCart, color: "bg-red-500", image: Sales },
//   {
//     name: "Teacher",
//     icon: GraduationCap,
//     color: "bg-yellow-500",
//     image: Teacher,
//   },
//   { name: "Engineer", icon: Settings, color: "bg-teal-500", image: Engineer },
//   {
//     name: "Accounting",
//     icon: Calculator,
//     color: "bg-pink-500",
//     image: Accounting,
//   },
//   { name: "Marketing", icon: User, color: "bg-indigo-500", image: Marketing },
// ];

// const ResumeBuilder = () => {
//   const [selectedRole, setSelectedRole] = useState(roles[0]);

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
//             The resume builder that's right for your job and experience
//           </h1>
//           <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
//             View All Resume Examples →
//           </a>
//         </div>

//         {/* Main content */}
//         <div className="flex items-start justify-center gap-6 py-8">
//           {/* Job Roles Section */}
//           <div className="lg:w-1/4 mr-6">
//             <div className="space-y-3">
//               {roles.map((role) => {
//                 const IconComponent = role.icon;
//                 return (
//                   <button
//                     key={role.name}
//                     onClick={() => setSelectedRole(role)}
//                     className={`w-full flex items-center gap-3 p-4 rounded-lg text-left transition-all duration-200 ${
//                       selectedRole.name === role.name
//                         ? `${role.color} text-white`
//                         : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
//                     }`}
//                   >
//                     <div
//                       className={`p-2 rounded ${
//                         selectedRole.name === role.name
//                           ? "bg-white bg-opacity-20"
//                           : "bg-gray-100 "
//                       }`}
//                     >
//                       <IconComponent
//                         size={20}
//                         className={
//                           "text-black dark:white"
//                         }
//                       />
//                     </div>
//                     <span className="font-medium">{role.name}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Resume Preview Section */}
//           <div className="w-[800px] flex justify-center items-start">
//             <img
//               src={selectedRole.image}
//               alt={`${selectedRole.name} Resume`}
//               className="max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-sm border border-gray-300"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  User,
  Database,
  Briefcase,
  Code,
  ShoppingCart,
  GraduationCap,
  Settings,
  Calculator,
  Megaphone,
} from "lucide-react";

import BusinessAnalyst from "../assets/businessAnalyst.png";
import DataScientist from "../assets/DataScientist.png";
import ProductManager from "../assets/ProductManager.png";
import SoftwareEngineer from "../assets/SoftwareEngineer.png";
import Sales from "../assets/Sales.png";
import Teacher from "../assets/Teacher.png";
import Engineer from "../assets/Engineer.png";
import Accounting from "../assets/Accounting.png";
import Marketing from "../assets/Marketing.png";

const roles = [
  { name: "Business Analyst", icon: User, color: "bg-blue-500", image: BusinessAnalyst },
  { name: "Data Scientist", icon: Database, color: "bg-purple-500", image: DataScientist },
  { name: "Product Manager", icon: Briefcase, color: "bg-orange-500", image: ProductManager },
  { name: "Software Engineer", icon: Code, color: "bg-green-500", image: SoftwareEngineer },
  { name: "Sales", icon: ShoppingCart, color: "bg-red-500", image: Sales },
  { name: "Teacher", icon: GraduationCap, color: "bg-yellow-500", image: Teacher },
  { name: "Engineer", icon: Settings, color: "bg-teal-500", image: Engineer },
  { name: "Accounting", icon: Calculator, color: "bg-pink-500", image: Accounting },
  { name: "Marketing", icon: Megaphone, color: "bg-indigo-500", image: Marketing },
];

const ResumeBuilder = () => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-16 sm:pt-0">
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-12" data-aos="zoom-in">
        <h1 className="text-4xl font-bold mb-4">
          The resume builder that's right for your job and experience
        </h1>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
          View All Resume Examples →
        </a>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
        {/* Icons Panel */}
        <div
          className="w-full lg:w-1/4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:flex lg:flex-col gap-3"
          role="list"
        >
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole.name === role.name;

            return (
              <button
                key={role.name}
                onClick={() => setSelectedRole(role)}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 80}
                className={`w-full flex items-center justify-center lg:justify-start gap-3 p-4 rounded-lg text-left transition-all duration-200 ${
                  isSelected
                    ? `${role.color} text-white`
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`p-2 rounded flex items-center justify-center lg:justify-start ${
                    isSelected ? "bg-white bg-opacity-20" : "bg-gray-100"
                  }`}
                >
                  <IconComponent
                    size={20}
                    className="text-black dark:text-white"
                  />
                </div>
                <span className="hidden lg:inline font-medium">{role.name}</span>
              </button>
            );
          })}
        </div>

        {/* Resume Preview */}
        <div className="w-full flex justify-center items-start">
          <img
            key={selectedRole.name} // important to re-render on role switch
            src={selectedRole.image}
            alt={`${selectedRole.name} Resume`}
            className="rounded-lg shadow-sm border border-gray-300 object-contain max-h-[85vh] lg:w-auto w-[90vw] max-w-[600px]"
            data-aos="zoom-in-up"
          />
        </div>
      </div>
    </div>
  </div>
);

};

export default ResumeBuilder;
