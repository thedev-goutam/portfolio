import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Frameworks",
      skills: ["PHP", "Laravel", "CodeIgniter", "Node.js", "Express"]
    },
    {
      title: "Frontend Frameworks", 
      skills: ["React", "Angular", "Next.js", "HTML", "CSS"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <p className="skills-subtitle">
          Frontend, Backend, Databases, and Tools I use to ship production-ready products.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h4 className="category-title">{category.title}</h4>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;