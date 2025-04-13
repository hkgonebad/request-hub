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
                Dashboard
              </NavLink>
              <NavLink to="/dashboard" className="dropdown-item">
                Analytics
              </NavLink>
            </NavDropdown>
            <Nav.Item>
              <NavLink to="/existing-forms" className="nav-link">
                Missions
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/requests" className="nav-link">
                Requests
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/reports" className="nav-link">
                Reports
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
