import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      period: "2020 — Present",
      title: "Senior Web Developer",
      description: "Leading full-stack web development projects using Laravel, CodeIgniter, Angular, React, PHP, JavaScript, MySQL, and REST APIs. Designing scalable web applications, developing backend systems, and building responsive frontend interfaces. Managing project architecture, performance optimization, and application maintenance."
    },
    {
      period: "2019 — 2020",
      title: "PHP Developer",
      description: "Working as PHP web developerWorked as a PHP web developer, responsible for developing, maintaining, and optimizing web applications. Collaborated with the team to implement backend functionality, fix bugs, and improve website performance."
    },
    {
      period: "2017 — 2018",
      title: "Technical Support Executive",
      description: "Provided technical support for software installation, troubleshooting errors, and guiding users on effective software usage. Assisted clients in resolving technical issues to ensure smooth system operation and user satisfaction."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience Highlights</h2>
        <div className="experience-grid">
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="timeline-content">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <div className="timeline-period">{exp.period}</div>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="quick-facts">
            <h3 className="facts-title">Quick Facts</h3>
            <ul className="facts-list">
              <li><b>• Core Skills:</b> Laravel, CodeIgniter, Angular, React, PHP, JavaScript, MySQL</li>
              <li><b>• Development Focus:</b> Full-stack web development, REST API development, responsive UI design, database optimization</li>              
              <li><b>• Availability:</b> Open to Remote work, Contract, and Full-time opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;