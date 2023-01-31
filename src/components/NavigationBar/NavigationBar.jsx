import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Path,
} from "react-router-dom";

import styles from "./NavigationBar.module.css";

import Home from "../Home/Home";
import Projects from "../Projects/Project";
import Footer from "../Footer/Footer";

export default function NavigationBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className={styles.navigationBar}>
          <Container fluid>
            <Navbar.Brand className={styles.logo} href="#">
              Logo
            </Navbar.Brand>
            <Navbar.Toggle
              className={styles.canvasButton}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link to="/home">Home</Nav.Link>
                  <Nav.Link to="/proyectos">Proyectos</Nav.Link>
                  <Nav.Link to="/contacto">Contacto</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Router>
        <Routes>
          <Route path="/ " element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}
