import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Yantratools — eCommerce Web Application",
      description: "A modern eCommerce web application developed using Angular, Node.js, and MongoDB. The platform delivers a fast and scalable shopping experience with dynamic product browsing, efficient backend services, and responsive user interfaces. Designed with a focus on performance, maintainability, and seamless user interaction.",
      image: "/images/India-s-Largest-Online-Machinery-Marketplace.png",
      liveLink: "https://yantratools.com/",
      githubLink: "#"
    },
    {
      title: "Cold Room Bazaar — Service Listing Platform",
      description: "A service-listing web platform developed using Laravel and MySQL, where service providers can register and showcase their offerings. Customers can browse available services and connect directly with providers through the website. The system is designed for easy service management, structured listings, and a smooth user experience.",
      image: "/images/Cold-Room-Bazaar-Home.png",
      liveLink: "https://www.coldroombazaar.com",
      githubLink: "#"
    },
    {
      title: "Ramkrishna Library — Online Bookstore",
      description: "An eCommerce book-selling website developed using Laravel and MySQL. The platform allows users to browse books, place orders online, and manage purchases through a secure and user-friendly shopping experience. Designed to support efficient product management, order processing, and reliable performance.",
      image: "/images/Ramkrishna-Library.png",
      liveLink: "https://www.ramkrishnalibrary.com",
      githubLink: "#"
    },
    {
      title: "Farm Vegetables — Online Food eCommerce Platform",
      description: "An eCommerce food-selling website developed using Laravel and MySQL. The platform allows users to browse food items, place orders online, and manage their purchases through a secure and user-friendly shopping experience. Built to ensure smooth order processing, product management, and reliable performance.",
      image: "/images/Farm-Vegitables-Delivery-Fresh-Vegetables.png",
      liveLink: "https://www.farmvegitables.com",
      githubLink: "#"
    },    
    {
      title: "iMart Wholesale — Multi-Vendor eCommerce Platform",
      description: "A multi-vendor eCommerce website developed using Laravel and MySQL. The platform includes a seller module that enables multiple vendors to register, list products, and manage sales through a centralized system. Designed to support scalable product management, order processing, and vendor coordination with an intuitive admin interface.",
      image: "/images/iMart-Wholesale-Home.png",
      liveLink: "https://developer-beta.com/p5/gurung_new/",
      githubLink: "#"
    },
    {
      title: "Restaurant Management Website",
      description: "A multi-outlet restaurant management portal developed using Laravel and MySQL. The system enables administrators to create and manage multiple restaurant outlets, organize menu items, and handle online sales directly through the website. Designed to streamline restaurant operations with a centralized and user-friendly management interface.",
      image: "/images/Tasteo-Demo-Restaurant.png",
      liveLink: "https://merchant.tasteo.in",
      githubLink: "#"
    },
    {
      title: "Food Ordering Website",
      description: "A web-based food ordering system developed for a single restaurant outlet using Laravel, MySQL, and modern frontend technologies. The platform allows customers to browse the menu, place orders online, and provides the admin with an easy-to-use dashboard to manage menu items, orders, and daily operations. Built with a focus on simplicity, performance, and a user-friendly ordering experience.",
      image: "/images/Pepper-Castle-Demo.png",
      liveLink: "https://www.peppercastle.sg",
      githubLink: "#"
    },
    {
      title: "Compare Indian Grocery — Price Comparison Platform",
      description: "A grocery price comparison website developed using CodeIgniter 4 and MySQL. The platform allows users to compare prices of Indian grocery products across multiple online stores, helping them find the best deals quickly and easily. Built with a focus on efficient data handling, performance, and a user-friendly interface.",
      image: "/images/Compare-Indian-Grocery.png",
      liveLink: "https://compareindiangrocery.co.uk",
      githubLink: "#"
    }
    
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Works</h2>
        <p className="projects-subtitle">
          Selected projects demonstrating full-stack capabilities.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{index+1}. {project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} className="project-link primary">
                  Live Demo
                </a>
                {/* <a href={project.githubLink} className="project-link secondary">
                  GitHub
                </a> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;