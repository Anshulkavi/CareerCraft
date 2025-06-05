// import React, { useRef, useState, useEffect } from "react";

// function ResumeUpload() {
//   const resumeFileRef = useRef(null);
//   const resumeUploadFormRef = useRef(null);
//   const fileLabelRef = useRef(null);
//   const jobCardsContainerRef = useRef(null);
//   const matchedCompaniesDivRef = useRef(null);

//   const [uploadStatus, setUploadStatus] = useState("");
//   const [fileName, setFileName] = useState("");
//   const [statusVisible, setStatusVisible] = useState(false);

//   const handleFileChange = () => {
//     const file = resumeFileRef.current.files[0];
//     setFileName(file ? file.name : "");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const file = resumeFileRef.current.files[0];
//     if (!file) {
//       setUploadStatus("❗ Please select a file to upload.");
//       setStatusVisible(true);
//       return;
//     }

//     setUploadStatus("");
//     setStatusVisible(true);

//     const formData = new FormData();
//     formData.append("resume", file);
//     setUploadStatus("⏳ Uploading and analyzing resume...");
//     jobCardsContainerRef.current.innerHTML = "";
//     matchedCompaniesDivRef.current.style.display = "none";

//     try {
//       // const response = await fetch("http://127.0.0.1:8000/api/upload_resume/", {
//       //   method: "POST",
//       //   body: formData,
//       // });

//       const response = await fetch("https://careercraft-5kzo.onrender.com/api/upload_resume/", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Something went wrong.");
//       }

//       const { extracted, matches } = data;
//       const { name, email, phone, skills, experience } = extracted;

//       setUploadStatus(`
//         ✅ <strong>${name}</strong>'s resume processed.<br>
//         📧 <strong>Email:</strong> ${email}<br>
//         📞 <strong>Phone:</strong> ${phone || "N/A"}<br>
//         💼 <strong>Experience:</strong> ${experience || "N/A"}<br>
//         🛠️ <strong>Skills:</strong> ${skills.join(", ")}
//       `);

//       if (matches.length > 0) {
//         matches.forEach((job) => {
//           const card = document.createElement("div");
//           card.className =
//             "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-4 mb-4 text-left";

//           card.innerHTML = `
//     <h4 class="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-1">${
//       job.title
//     }</h4>
//     <p class="text-sm"><strong>Company:</strong> ${
//       job.company_name || "Unknown"
//     }</p>
//     <p class="text-sm"><strong>Location:</strong> ${job.location || "N/A"}</p>
//     <p class="text-sm"><strong>Salary:</strong> ${job.salary || "N/A"}</p>
//     <a href="${
//       job.url
//     }" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm mt-2 inline-block">Apply Now</a>
//   `;

//           jobCardsContainerRef.current.appendChild(card);
//         });

//         matchedCompaniesDivRef.current.style.display = "block";
//       } else {
//         jobCardsContainerRef.current.innerHTML =
//           "<p>No matching jobs found.</p>";
//         matchedCompaniesDivRef.current.style.display = "block";
//       }

//       resumeUploadFormRef.current.reset();
//       setFileName("");
//     } catch (error) {
//       console.error("❌ Upload error:", error);
//       setUploadStatus(`❌ Upload error: ${error.message}`);
//     }
//   };

//   useEffect(() => {
//     const resumeFile = resumeFileRef.current;

//     if (resumeFile) {
//       resumeFile.addEventListener("change", handleFileChange);

//       return () => {
//         resumeFile.removeEventListener("change", handleFileChange);
//       };
//     }
//   }, []);

//   return (
//     <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center py-12 px-5">
//       <h2 className="text-2xl font-bold !text-indigo-600 mb-4">
//         Upload Your Resume
//       </h2>
//       <p className="text-gray-600 dark:text-gray-200 mb-6">
//         Let our AI analyze your resume and match you with the perfect job
//         opportunities.
//       </p>

//       <form
//         ref={resumeUploadFormRef}
//         onSubmit={handleSubmit}
//         className="flex flex-col items-center space-y-4"
//         encType="multipart/form-data"
//       >
//         <div className="relative inline-block">
//           <input
//             type="file"
//             id="resumeFile"
//             name="resume"
//             accept=".pdf,.docx"
//             required
//             ref={resumeFileRef}
//             className="absolute left-[-9999px]"
//           />
//           <label
//             htmlFor="resumeFile"
//             className="cursor-pointer inline-flex items-center bg-blue-400 text-gray-900 dark:text-gray-100 px-5 py-2 rounded-md hover:bg-blue-500 transition"
//             ref={fileLabelRef}
//           >
//             <i className="fas fa-cloud-upload-alt mr-2"></i>
//             <span>{fileName || "Choose a file"}</span>
//           </label>
//         </div>

//         <p className="text-sm text-gray-600 dark:text-gray-300">
//           Supported formats: PDF, DOCX (Max 10MB)
//         </p>

//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
//         >
//           Upload Resume
//         </button>
//       </form>

//       {statusVisible && (
//         <div
//           className="mt-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded-md text-left max-w-2xl mx-auto"
//           dangerouslySetInnerHTML={{ __html: uploadStatus }}
//         />
//       )}

//       <div className="mt-10 hidden" ref={matchedCompaniesDivRef}>
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//           Matching Job Opportunities
//         </h3>
//         <div
//           ref={jobCardsContainerRef}
//           className="grid gap-4 max-w-3xl mx-auto"
//         ></div>
//       </div>
//     </section>
//   );
// }
// export default ResumeUpload;

import React, { useRef, useState, useEffect } from "react";

function ResumeUpload() {
  const resumeFileRef = useRef(null);
  const resumeUploadFormRef = useRef(null);
  const fileLabelRef = useRef(null);
  const jobCardsContainerRef = useRef(null);
  const matchedCompaniesDivRef = useRef(null);

  const [uploadStatus, setUploadStatus] = useState("");
  const [fileName, setFileName] = useState("");
  const [statusVisible, setStatusVisible] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleFileChange = () => {
    const file = resumeFileRef.current.files[0];
    setFileName(file ? file.name : "");

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setPreviewSrc(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = resumeFileRef.current.files[0];
    if (!file) {
      setUploadStatus("❗ Please select a file to upload.");
      setStatusVisible(true);
      return;
    }

    setUploadStatus("");
    setStatusVisible(true);

    const formData = new FormData();
    formData.append("resume", file);
    setUploadStatus("⏳ Uploading and analyzing resume...");
    jobCardsContainerRef.current.innerHTML = "";
    matchedCompaniesDivRef.current.style.display = "none";

    try {
      // const response = await fetch("http://127.0.0.1:8000/api/upload_resume/", {
      //   method: "POST",
      //   body: formData,
      // });

      const response = await fetch(
        "https://careercraft-5kzo.onrender.com/api/upload_resume/",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      const { extracted, matches } = data;
      const { name, email, phone, skills, experience } = extracted;

      setUploadStatus(`
        ✅ <strong>${name}</strong>'s resume processed.<br>
        📧 <strong>Email:</strong> ${email}<br>
        📞 <strong>Phone:</strong> ${phone || "N/A"}<br>
        💼 <strong>Experience:</strong> ${experience || "N/A"}<br>
        🛠️ <strong>Skills:</strong> ${skills.join(", ")}
      `);

      if (matches.length > 0) {
        matches.forEach((job) => {
          const card = document.createElement("div");
          card.className =
            "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-4 mb-4 text-left";

          card.innerHTML = `
    <h4 class="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-1">${
      job.title
    }</h4>
    <p class="text-sm"><strong>Company:</strong> ${
      job.company_name || "Unknown"
    }</p>
    <p class="text-sm"><strong>Location:</strong> ${job.location || "N/A"}</p>
    <p class="text-sm"><strong>Salary:</strong> ${job.salary || "N/A"}</p>
    <a href="${
      job.url
    }" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm mt-2 inline-block">Apply Now</a>
  `;

          jobCardsContainerRef.current.appendChild(card);
        });

        matchedCompaniesDivRef.current.style.display = "block";
      } else {
        jobCardsContainerRef.current.innerHTML = "<p>No matching jobs found.</p>";
        matchedCompaniesDivRef.current.style.display = "block";
      }

      resumeUploadFormRef.current.reset();
      setFileName("");
      setPreviewSrc(null);
    } catch (error) {
      console.error("❌ Upload error:", error);
      setUploadStatus(`❌ Upload error: ${error.message}`);
    }
  };

  useEffect(() => {
    const resumeFile = resumeFileRef.current;

    if (resumeFile) {
      resumeFile.addEventListener("change", handleFileChange);

      return () => {
        resumeFile.removeEventListener("change", handleFileChange);
      };
    }
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center py-12 px-5">
      <h2 className="text-2xl font-bold !text-indigo-600 mb-4">
        Upload Your Resume
      </h2>
      <p className="text-gray-600 dark:text-gray-200 mb-6">
        Let our AI analyze your resume and match you with the perfect job
        opportunities.
      </p>

      <form
        ref={resumeUploadFormRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
        encType="multipart/form-data"
      >
        <div className="relative inline-block">
          <input
            type="file"
            id="resumeFile"
            name="resume"
            accept=".pdf,.docx,.jpeg,.jpg,.png"
            required
            ref={resumeFileRef}
            className="absolute left-[-9999px]"
          />
          <label
            htmlFor="resumeFile"
            className="cursor-pointer inline-flex items-center bg-blue-400 text-gray-900 dark:text-gray-100 px-5 py-2 rounded-md hover:bg-blue-500 transition"
            ref={fileLabelRef}
          >
            <i className="fas fa-cloud-upload-alt mr-2"></i>
            <span>{fileName || "Choose a file"}</span>
          </label>
          {previewSrc && (
            <img
              src={previewSrc}
              alt="Preview"
              className="mt-4 mx-auto max-h-40 rounded-md border border-gray-300"
            />
          )}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          Supported formats: PDF, DOCX, JPEG, PNG (Max 10MB)
        </p>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          Upload Resume
        </button>
      </form>

      {statusVisible && (
        <div
          className="mt-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded-md text-left max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: uploadStatus }}
        />
      )}

      <div className="mt-10 hidden" ref={matchedCompaniesDivRef}>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Matching Job Opportunities
        </h3>
        <div
          ref={jobCardsContainerRef}
          className="grid gap-4 max-w-3xl mx-auto"
        ></div>
      </div>
    </section>
  );
}

export default ResumeUpload;
