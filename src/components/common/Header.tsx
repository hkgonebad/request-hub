import { Dropdown, Stack } from "react-bootstrap";
import logo from "@/assets/img/logo.webp";
import { FiBell } from "react-icons/fi";

import Menu from "./Menu";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="mainHeader">
      <div className="container">
        <Stack direction="horizontal" gap={2} className="mhRow">
          {/* Logo */}
          <NavLink to="/home" className="logo">
            <img src={logo} alt="" />
          </NavLink>

          {/* Menu */}
          <Menu />

          {/* User */}
          <Stack direction="horizontal" className="user ms-auto">
            <NavLink to="requests" className="myRequest btn">
              <i>My Request</i>
              <span>2</span>
            </NavLink>

            {/* Notification Dropdown */}
            <Dropdown className="notification">
              <Dropdown.Toggle bsPrefix="noBtn" id="notification" variant="none">
                <FiBell className="icon" />
                <span>4</span>
              </Dropdown.Toggle>

              <Dropdown.Menu align="end" className="notifications">
                <div className="notification-item">
                  <p>
                    Notification 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae soluta reprehenderit eaque iste, magnam quia quisquam iusto autem deserunt eum! Saepe excepturi laborum soluta delectus accusantium
                    sint praesentium autem.
                  </p>
                </div>
                <div className="notification-item">
                  <p>
                    Notification 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae soluta reprehenderit eaque iste, magnam quia quisquam iusto autem deserunt eum! Saepe excepturi laborum soluta delectus accusantium
                    sint praesentium autem.
                  </p>
                </div>
                {/* <Dropdown.Item href="#/action-2">Notification 2</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>

            {/* Profile Dropdown */}
            <Dropdown className="profile">
              <Dropdown.Toggle bsPrefix="noBtn" id="profile" variant="none">
                <img src="https://randomuser.me/api/portraits/thumb/men/9.jpg" />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <NavLink to="/profile" className="dropdown-item">
                  Profile
                </NavLink>
                <NavLink to="/settings" className="dropdown-item">
                  Settings
                </NavLink>
                <NavLink to="/" className="dropdown-item">
                  Logout
                </NavLink>
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
        </Stack>
      </div>
    </header>
  );
};

export default Header;
