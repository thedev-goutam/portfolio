import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Goutam</span> — a Full‑Stack Web Developer
            </h1>
            <p className="hero-subtitle">
              I build high-performance applications using <strong>Laravel, CodeIgniter, Angular, React, NextJs</strong> and modern databases. 6+ years designing scalable, maintainable systems and elegant user interfaces.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
            <div className="hero-tech">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
              </svg>
              <span>Laravel • CodeIgniter • React • Angular • Next.js</span>
            </div>
          </div>
          {/* <div className="hero-card">
            <div className="card-blur"></div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Featured Project" />
              <h3>Featured Project — E‑Commerce Platform</h3>
              <p>Full-stack e-commerce with payments, inventory, and analytics. Laravel + CodeIgniter + Angular + React + MySQL + MongoDB + PgSQL.</p>
              <div className="card-links">
                <a href="#">Live Demo</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;