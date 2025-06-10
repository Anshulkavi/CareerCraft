// import React, { useState } from 'react';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "How does the CareerCraft resume builder work?",
//       answer: "Our resume builder provides ready-to-use templates that you can customize with your information. Simply select a template, fill in your details using our guided sections, customize the design to your preferences, and download your completed resume in your preferred format."
//     },
//     {
//       question: "Are CareerCraft resumes ATS-friendly?",
//       answer: "Yes, all our resume templates are designed to be ATS-friendly. They use simple, clean layouts with standard section headings that Applicant Tracking Systems can easily read and parse. This ensures your resume gets through the initial screening and into the hands of hiring managers."
//     },
//     {
//       question: "Can I create multiple versions of my resume?",
//       answer: "Absolutely! With an CareerCraft account, you can create and save multiple versions of your resume. This is perfect for tailoring your resume to different job applications or industries. Each version is saved separately and can be edited independently."
//     },
//     {
//       question: "What formats can I download my resume in?",
//       answer: "You can download your resume as a PDF, which is the most widely accepted format for job applications. We also offer DOCX format for those who need to make further edits in Microsoft Word, and you can generate a shareable link to your resume for online applications."
//     },
//     {
//       question: "How much does CareerCraft cost?",
//       answer: "CareerCraft offers a free basic plan that allows you to create a simple resume. Our premium plans start at $9.99 per month and include advanced features like unlimited resume creation, expert content suggestions, more templates, and priority customer support."
//     },
//     {
//       question: "Can I cancel my subscription anytime?",
//       answer: "Yes, you can cancel your subscription at any time through your account settings. If you cancel, you'll still have access to premium features until the end of your current billing period. We don't offer refunds for partial months of service."
//     }
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 ">
//       <div className="container mx-auto max-w-4xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold dark:!text-purple-200 mb-4">Frequently Asked Questions</h2>
//           <p className="text-lg text-gray-600 dark:text-purple-200 max-w-2xl mx-auto">
//             Find answers to common questions about our resume builder.
//           </p>
//         </div>

//         {/* <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div 
//               key={index} 
//               className="border border-gray-200 rounded-lg overflow-hidden"
//             >
//               <button
//                 className="w-full text-left px-6 py-4 focus:outline-none flex items-center justify-between bg-white hover:bg-gray-50"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <span className="text-lg text-black font-medium">{faq.question}</span>
//                 <svg 
//                   className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 py-4 bg-gray-50 border-t border-gray-50 dark:bg-gray-300">
//                   <p className="text-gray-900 ">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div> */}

//         <div className="space-y-4">
//   {faqs.map((faq, index) => (
//     <div 
//       key={index} 
//       className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden"
//     >
//       <button
//         className="w-full text-left px-6 py-4 focus:outline-none flex items-center justify-between bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
//         onClick={() => toggleFAQ(index)}
//       >
//         <span className="text-lg text-black dark:text-gray-100 font-medium">{faq.question}</span>
//         <svg 
//           className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
//           fill="none" 
//           stroke="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {openIndex === index && (
//         <div className="px-6 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
//           <p>{faq.answer}</p>
//         </div>
//       )}
//     </div>
//   ))}
// </div>


//         <div className="mt-12 text-center">
//           <p className="text-gray-600 dark:text-gray-200 mb-4">Still have questions?</p>
//           <a
//             href="#contact-support"
//             className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-6 py-3 text-center transition-colors"
//           >
//             Contact Support
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const faqs = [
    {
      question: "How does the CareerCraft resume builder work?",
      answer:
        "Our resume builder provides ready-to-use templates that you can customize with your information. Simply select a template, fill in your details using our guided sections, customize the design to your preferences, and download your completed resume in your preferred format.",
    },
    {
      question: "Are CareerCraft resumes ATS-friendly?",
      answer:
        "Yes, all our resume templates are designed to be ATS-friendly. They use simple, clean layouts with standard section headings that Applicant Tracking Systems can easily read and parse. This ensures your resume gets through the initial screening and into the hands of hiring managers.",
    },
    {
      question: "Can I create multiple versions of my resume?",
      answer:
        "Absolutely! With a CareerCraft account, you can create and save multiple versions of your resume. This is perfect for tailoring your resume to different job applications or industries. Each version is saved separately and can be edited independently.",
    },
    {
      question: "What formats can I download my resume in?",
      answer:
        "You can download your resume as a PDF, which is the most widely accepted format for job applications. We also offer DOCX format for those who need to make further edits in Microsoft Word, and you can generate a shareable link to your resume for online applications.",
    },
    {
      question: "How much does CareerCraft cost?",
      answer:
        "CareerCraft offers a free basic plan that allows you to create a simple resume. Our premium plans start at $9.99 per month and include advanced features like unlimited resume creation, expert content suggestions, more templates, and priority customer support.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time through your account settings. If you cancel, you'll still have access to premium features until the end of your current billing period. We don't offer refunds for partial months of service.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold dark:!text-purple-200 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-purple-200 max-w-2xl mx-auto">
            Find answers to common questions about our resume builder.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none flex items-center justify-between bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg text-black dark:text-gray-100 font-medium">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-600 dark:text-gray-200 mb-4">Still have questions?</p>
          <a
            href="#contact-support"
            className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-6 py-3 text-center transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
