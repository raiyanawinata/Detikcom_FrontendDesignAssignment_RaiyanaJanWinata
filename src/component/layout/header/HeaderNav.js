

import React from "react";
import { Link, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import {  Route, Routes } from 'react-router-dom';
import Register from "../../registrasi/Register";
const HeaderNav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar fixed-top" style={{ backgroundColor: "#007cbd" }}>
        <Container>
          <Navbar.Brand as={Nav.Link} onClick={() => scrollToSection("home")} className="d-flex align-items-center">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={require("../../../assets/img/Navbar Brand.png")} alt="Navbar Brand" className="img-fluid" style={{ height: "100%" }} />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              
              <Nav.Link onClick={() => scrollToSection("about")} className="nav-link2">About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("mechanisme")} className="nav-link2">Mechanism</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("update")} className="nav-link2">Latest Update</Nav.Link>
              <Nav.Item className="nav-item2">
                <Nav.Link onClick={() => Navigate("register")} className="nav-regis">Register</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderNav;
