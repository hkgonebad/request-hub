import React from "react";

import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="mainNav">
          <FiMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="mainNav">
          <Nav className="justify-content-center" activeKey="/home">
            <NavDropdown title="Mission Control" id="basic-nav-dropdown">
              <NavLink to="/home" className="dropdown-item">
                Mission Dashboard
              </NavLink>
              <NavLink to="/dashboard" className="dropdown-item">
                Request Analytics
              </NavLink>
            </NavDropdown>
            <Nav.Item>
              <NavLink to="/existing-forms" className="nav-link">
                Mission Forms
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/requests" className="nav-link">
                Mission Requests
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/reports" className="nav-link">
                Mission Reports
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
