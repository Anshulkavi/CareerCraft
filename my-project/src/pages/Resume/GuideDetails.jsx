// pages/resume/GuideDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";
import guidesData from "./guidesData"; // Import your guides data

function GuideDetails() {
  const { guideSlug } = useParams(); // get the dynamic slug from URL

  const guide = guidesData.find((g) => g.slug === guideSlug);

  if (!guide) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Guide Not Found</h2>
        <p>Sorry, the guide you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1>{guide.title}</h1>
      <img src={guide.image} alt={guide.title} style={{ width: "100%", height: "auto", marginBottom: "20px" }} />
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{guide.fullContent}</p>
    </div>
  );
}

export default GuideDetails;
