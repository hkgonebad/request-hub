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
            <Nav.Item>
              <NavLink to="/existing-forms" className="nav-link">
                Existing Forms
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/messages" className="nav-link">
                Create New Form
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/messages" className="nav-link">
                History Logs
              </NavLink>
            </Nav.Item>
            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
              <NavLink to="/dashboard" className="dropdown-item">
                Dashboard
              </NavLink>
              <NavLink to="/dashboard-spoc" className="dropdown-item">
                Dashboard Spoc
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
