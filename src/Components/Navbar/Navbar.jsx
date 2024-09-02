import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import './Navbar.css';

const NavigationBar = () => {
  const handleDownload = () => {
    window.location.href = '/path/to/myReactjsResume.pdf'; // Adjust the path if necessary
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home">Ajay Krishna Reddy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-links">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Button className="resume-btn" onClick={handleDownload}>
          <FaDownload /> Download Resume
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
