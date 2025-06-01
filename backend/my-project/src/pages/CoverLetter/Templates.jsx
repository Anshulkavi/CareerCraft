// src/pages/Resume/CoverLetterTemplates.jsx
import BasicImg from "../../assets/Basic.png";
import classicImg from "../../assets/classic.png";
import modernsImg from "../../assets/Moderns.png";
import minimalImg from "../../assets/minimal.png";
import highperformerImg from "../../assets/High_Performer.png";
import timeImg from "../../assets/time.png";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./coverletter.css"; // Separate css file for cover letters

function CoverLetterTemplates() {
  const [activeFilter, setActiveFilter] = useState("All");

  const templates = [
    {
      id: 1,
      title: "Basic Cover Letter",
      category: "Professional",
      image: BasicImg,
    },
    {
      id: 2,
      title: "Classic Cover Letter",
      category: "Creative",
      image: classicImg,
    },
    {
      id: 3,
      title: "Modern Cover Letter",
      category: "Professional",
      image: modernsImg,
    },
    {
      id: 4,
      title: "High Performer Cover Letter",
      category: "Professional",
      image: highperformerImg,
    },
    {
      id: 5,
      title: "Minimal Cover Letter",
      category: "Creative",
      image: minimalImg,
    },
    {
      id: 6,
      title: "Timeline Cover Letter",
      category: "Professional",
      image: timeImg,
    },
  ];

  const filterOptions = ["All", "Professional", "Creative"];

  const filteredTemplates =
    activeFilter === "All"
      ? templates
      : templates.filter((template) => template.category === activeFilter);

  return (
    <div className="coverletter-container">
      <div className="coverletter-hero" data-aos="fade-up">
        <h1>Choose Your Cover Letter Template</h1>
        <p>
          Pick a stylish cover letter template to impress recruiters at first
          glance.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="filter-buttons" data-aos="fade-up" data-aos-delay="100">
        {filterOptions.map((option) => (
          <button
            key={option}
            className={`filter-btn ${activeFilter === option ? "active" : ""}`}
            onClick={() => setActiveFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="templates-grid">
        {filteredTemplates.map((template, index) => (
          <div
            key={template.id}
            className="template-card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={template.image}
              alt={template.title}
              className="template-image"
            />
            <h3>{template.title}</h3>
            <Link to="/coverletter/builder" className="use-template-link">
              <button className="use-template-button">Use This Template</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoverLetterTemplates;
