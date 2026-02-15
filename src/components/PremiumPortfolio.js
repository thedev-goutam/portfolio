import React from 'react';
import './PremiumPortfolio.css';

const PremiumPortfolio = () => {
  return (
    <div className="premium-portfolio">
      {/* Hero Section */}
      <section className="premium-hero">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-headline">
              Crafting Digital
              <span className="gradient-text"> Excellence</span>
            </h1>
            <p className="hero-subtitle">
              Full-Stack Developer specializing in modern web technologies
              and exceptional user experiences
            </p>
            <div className="hero-actions">
              <button className="premium-btn primary">View My Work</button>
              <button className="premium-btn secondary">Get In Touch</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-heading">What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Frontend Development</h3>
              <p>Creating beautiful, responsive interfaces with React, Angular, and modern CSS</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Backend Architecture</h3>
              <p>Building scalable APIs and server solutions with Laravel and Node.js</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🗄️</div>
              <h3>Database Design</h3>
              <p>Optimizing data structures with MySQL, PostgreSQL, and MongoDB</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumPortfolio;