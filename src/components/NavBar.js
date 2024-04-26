import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/navg.svg';
import navIcon3 from '../assets/img/navian.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#Education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
              <Nav.Link href="#Achievements" className={activeLink === 'Achievements' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Achievements')}>Achievement</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/mannu-chaurasiya-15793a23a/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/man0045"><img src={navIcon2} alt="" /></a>
                <a href="https://leetcode.com/Mannu_Chaurasiya/"><img src={navIcon3} alt="work" /></a>
              </div>

              <button>
              <a href ="https://github.com/man0045/Data_Structure_with_Cpp/blob/master/my%20resume.pdf" attributes-list style={{ color: 'gray', textDecoration: 'none' }}> My Resume </a>
      
              </button>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
