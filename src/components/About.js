import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-main">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I'm a full-stack web developer with over 6 years of experience building reliable, scalable, and beautifully crafted web applications. I love solving real-world problems through clean architecture, optimized performance, and modern UI/UX principles.
            </p>
            <p className="about-text">
              I specialize in creating efficient, maintainable code and have worked with startups and enterprises to deliver end-to-end digital products.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">6+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          
          <aside className="contact-sidebar">
            <h3 className="sidebar-title">Contact</h3>
            <p className="contact-info">
              Email: <a href="mailto:thedeveloper.goutam@gmail.com" className="contact-link">thedeveloper.goutam@gmail.com</a>
            </p>
            <p className="contact-info">
              Location: Kolkata, West Bengal
            </p>
            <div className="sidebar-cta">
              <a href="#contact" className="work-btn">Work With Me</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;