// import React from "react";
// import companyLogo from "../assets/company-logo.png";
// export default function TestimonialCard() {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-8 relative">
//       <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
//         <div className="rounded-full overflow-hidden border-4 border-white w-20 h-20">
//           <img
//             src="https://randomuser.me/api/portraits/men/32.jpg"
//             alt="Testimonial"
//             width={80}
//             height={80}
//             className="object-cover"
//           />
//         </div>
//       </div>
//       <div className="mt-10 text-center">
//         <blockquote className="text-gray-700 italic mb-6">
//           "I already recommended ResumeAI to all of my friends. I am still using their service to update my resume, even
//           after finding a job. I would advise anyone in need of such service to choose ResumeAI."
//         </blockquote>
//         <div className="font-semibold">ALEX</div>
//         <div className="text-gray-500 text-sm">HEAD OF PRODUCT</div>
//       </div>
//       <div className="mt-6 pt-6 border-t border-gray-200 flex justify-center">
//         <img
//           src={companyLogo}
//           alt="Company Logo"
//           width={100}
//           height={30}
//           className="h-16 w-auto object-contain"
//         />
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import companyLogo from "../assets/company-logo.png";

export default function TestimonialCard() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-8 relative"
      data-aos="fade-up"
    >
      <div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="rounded-full overflow-hidden border-4 border-white w-20 h-20">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Testimonial"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay="200">
        <blockquote className="text-gray-700 italic mb-6">
          "I already recommended ResumeAI to all of my friends. I am still using
          their service to update my resume, even after finding a job. I would
          advise anyone in need of such service to choose ResumeAI."
        </blockquote>
        <div className="font-semibold">ALEX</div>
        <div className="text-gray-500 text-sm">HEAD OF PRODUCT</div>
      </div>

      <div
        className="mt-6 pt-6 border-t border-gray-200 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img
          src={companyLogo}
          alt="Company Logo"
          width={100}
          height={30}
          className="h-16 w-auto object-contain"
        />
      </div>
    </div>
  );
}
