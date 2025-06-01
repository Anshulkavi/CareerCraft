import React from "react";
import { Link } from "react-router-dom";
import guidesData from "./guidesData";
import "./ResumeGuides.css"; // Import your CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Guides() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
  return (
    <div className="resume-guides-container">
      <header className="guides-header">
        <h1>Resume Guides</h1>
        <p>Level up your career with expert resume advice, tips, and templates.</p>
      </header>

      <div className="guides-grid ">
        {guidesData.map((guide) => (
          <div key={guide.slug} className="guide-card" data-aos="fade-up">
            <img src={guide.image} alt={guide.title} className="guide-image" />
            <div className="guide-content">
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <Link to={`/resume/guides/${guide.slug}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guides;
