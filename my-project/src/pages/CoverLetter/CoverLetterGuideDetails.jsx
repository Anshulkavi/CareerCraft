// src/pages/CoverLetter/CoverLetterGuideDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import coverLetterGuidesData from "./coverLetterGuidesData"; // Import your guides data

function CoverLetterGuideDetails() {
  const { guideSlug } = useParams(); // get the dynamic slug from URL
  console.log("Guide Slug:", guideSlug);  // Check if the slug is being passed correctly

  const guide = coverLetterGuidesData.find((g) => g.slug === guideSlug);
  
  if (!guide) {
    console.log("Guide not found:", guideSlug);  // Check if the guide exists in the data
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Guide Not Found</h2>
        <p>Sorry, the guide you're looking for doesn't exist.</p>
      </div>
    );
  }

  console.log("Guide Data:", guide);  // Log the full guide data to make sure it has fullContent

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1>{guide.title}</h1>
      <img src={guide.image} alt={guide.title} style={{ width: "100%", height: "auto", marginBottom: "20px" }} />
      <div style={{ fontSize: "1.1rem", lineHeight: "1.6" }} dangerouslySetInnerHTML={{ __html: guide.fullContent }} />
    </div>
  );
}

export default CoverLetterGuideDetails;
