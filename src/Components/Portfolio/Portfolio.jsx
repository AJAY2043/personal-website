import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>My Projects</h2>
      
      <div className="project-card">
        <h3>AR-Mart</h3>
        <p>
          AR-Mart is a beginner-friendly e-commerce project that showcases a basic yet functional online shopping experience. This project includes features like product listing, shopping cart, and checkout functionality, providing a solid foundation for understanding e-commerce development.
        </p>
        <a href="https://github.com/AJAY2043/react-ecom-armart" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      
      <div className="project-card">
        <h3>SHOPPER</h3>
        <p>
          SHOPPER is a fully functional e-commerce website with advanced features including user authentication, dynamic product management, and a responsive design. This project demonstrates my ability to handle complex requirements and deliver a polished, production-ready application.
        </p>
        <a href="https://github.com/AJAY2043/shopper-react" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      
      <div className="project-card">
        <h3>Where's My Foreman</h3>
        <p>
          Where's My Foreman is a startup project focused on connecting users with skilled professionals in various fields such as mechanics, drivers, and electricians. This project features a user-friendly interface, search functionality, and a detailed directory of service providers.
        </p>
        <a href="https://github.com/AJAY2043/foreman-project" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </section>
  );
};

export default Portfolio;
