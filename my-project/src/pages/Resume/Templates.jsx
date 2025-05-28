import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import creativeImg from "../../assets/creative.png";
import modernImg from "../../assets/modern.png"; 
import elegentImg from "../../assets/Elegent.png";
import timelineImg from "../../assets/Timeline.png";
import ProfessionalImg from "../../assets/prof.png";
import simpleImg from "../../assets/simple.png";
import './templates.css'; // Import the css file

function Templates() {
  const [activeFilter, setActiveFilter] = useState("All");

  const templates = [
    { id: 1, title: "Professional", category: "Professional", image: ProfessionalImg },
    { id: 2, title: "Creative", category: "Creative", image: creativeImg },
    { id: 3, title: "Modern", category: "Professional", image: modernImg },
    { id: 4, title: "Simple", category: "Professional", image: simpleImg},
    { id: 5, title: "Elegant", category: "Creative", image: elegentImg },
    { id: 6, title: "Timeline", category: "Professional", image: timelineImg },
  ];

  const filterOptions = ["All", "Professional", "Creative"];

  const filteredTemplates = activeFilter === "All"
    ? templates
    : templates.filter(template => template.category === activeFilter);

  return (
    <div className="templates-container">
      <div data-aos="fade-up">
        <div className="templates-hero">
          <h1>Choose Your Resume Template</h1>
          <p>Pick a template and start creating a professional resume in minutes.</p>
        </div>
      </div>

      {/* Filter buttons */}
      <div className="filter-buttons">
        {filterOptions.map(option => (
          <button 
            key={option} 
            className={`filter-btn ${activeFilter === option ? 'active' : ''}`}
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
            data-aos-delay={index * 100} // staggered animation
          >
            <img src={template.image} alt={template.title} className="template-image" />
            <h3>{template.title}</h3>
            <Link to="/resume/builder" className="use-template-link">
              <button className="use-template-button">Use This Template</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Templates;
