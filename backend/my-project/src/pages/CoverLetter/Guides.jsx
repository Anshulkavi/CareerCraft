// src/pages/CoverLetter/Guides.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import coverLetterGuidesData from "./coverLetterGuidesData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CoverLetterGuides.css";

function CoverLetterGuides() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="coverletter-guides-container">
      <header className="guides-header">
        <h1>Cover Letter Guides</h1>
        <p>Master the art of writing compelling cover letters with our expert advice and examples.</p>
      </header>

      <div className="guides-grid">
        {coverLetterGuidesData.map((guide, index) => (
          <div
            key={guide.slug}
            className="guide-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={guide.image} alt={guide.title} className="guide-image" />
            <div className="guide-content">
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <Link to={`/coverletter/guides/${guide.slug}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoverLetterGuides;
