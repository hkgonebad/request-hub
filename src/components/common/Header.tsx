import { Dropdown, Stack } from "react-bootstrap";
import logo from "@/assets/img/logo.svg";
import { FiBell } from "react-icons/fi";

import Menu from "./Menu";

const Header = () => {
  return (
    <header className="mainHeader">
      <div className="container">
        <Stack direction="horizontal" gap={2}>
          {/* Logo */}
          <a href="#!" className="logo">
            <img src={logo} alt="" />
          </a>

          {/* Menu */}
          <Menu />

          {/* User */}
          <Stack direction="horizontal" gap={2} className="user ms-auto">
            <a href="#!" className="myRequest btn">
              My Request
              <span>2</span>
            </a>

            {/* Notification Dropdown */}
            <Dropdown className="notification">
              <Dropdown.Toggle
                bsPrefix="noBtn"
                id="notification"
                variant="none"
              >
                <FiBell />
                <span>4</span>
              </Dropdown.Toggle>

              <Dropdown.Menu align="end" className="notifications">
                <Dropdown.Item href="#/action-1">Notification 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Notification 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Notification 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Profile Dropdown */}
            <Dropdown className="profile">
              <Dropdown.Toggle bsPrefix="noBtn" id="profile" variant="none">
                <img src="https://randomuser.me/api/portraits/thumb/men/9.jpg" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
        </Stack>
      </div>
    </header>
  );
};

export default Header;
