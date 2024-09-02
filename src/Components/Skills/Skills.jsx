import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <h3>React.js</h3>
          <p>Proficient in building dynamic and responsive web applications using React.js, including the use of React Hooks, Context API, and component-based architecture.</p>
        </div>
        <div className="skill-card">
          <h3>HTML & CSS</h3>
          <p>Experienced in creating well-structured, semantic HTML and styling with modern CSS techniques, including Flexbox, Grid, and animations.</p>
        </div>
        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Strong knowledge of JavaScript for client-side scripting, including ES6+ features, asynchronous programming, and DOM manipulation.</p>
        </div>
        <div className="skill-card">
          <h3>Bootstrap</h3>
          <p>Skilled in using Bootstrap to build responsive, mobile-first web applications with pre-designed components and utility classes.</p>
        </div>
        <div className="skill-card">
          <h3>GitHub</h3>
          <p>Proficient in using GitHub for version control, collaborative development, and managing repositories with pull requests and code reviews.</p>
        </div>
        <div className="skill-card">
          <h3>Web Development</h3>
          <p>Comprehensive understanding of web development practices, including front-end and basic back-end technologies, and best practices for user experience.</p>
        </div>
        <div className="skill-card">
          <h3>Agile Methodology</h3>
          <p>Experience working in Agile environments, focusing on iterative development, continuous feedback, and collaborative teamwork.</p>
        </div>
      </div>
      <div className="interests-section">
        <h3>My Interests</h3>
        <ul>
          <li>Web Designing</li>
          <li>React.js Projects</li>
          <li>Continuous Learning</li>
          <li>Front-End Technologies</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
