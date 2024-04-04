import React from "react";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {
  return (
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
    </Nav>
  );
};

export default Menu;
