import { Dropdown, Stack, Form } from "react-bootstrap";
import logo from "@/assets/img/logo.webp";
import user from "@/assets/img/user.jpg";
import { FiBell, FiMoon, FiSun } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import useUserStore from "@/store/userStore";
import useThemeStore from "@/store/themeStore";
import { format } from "date-fns";

const Header = () => {
  const { notifications, unreadCount, markNotificationAsRead } = useUserStore();
  const { theme, toggleTheme } = useThemeStore();

  const handleMarkAsRead = (id: string) => {
    markNotificationAsRead(id);
  };

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
                {unreadCount > 0 && <span>{unreadCount}</span>}
              </Dropdown.Toggle>

              <Dropdown.Menu align="end" className="notifications">
                {notifications.length === 0 ? (
                  <div className="notification-item">
                    <p>No new notifications</p>
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div key={notification.id} className={`notification-item ${notification.read ? "read" : "unread"}`}>
                      <div className="niDetail">
                        <p>{notification.message}</p>
                        <small className="text-muted">{format(notification.timestamp, "PPp")}</small>
                      </div>
                      {!notification.read && (
                        <button className="btn btn-link btn-sm" onClick={() => handleMarkAsRead(notification.id)}>
                          Mark as Read
                        </button>
                      )}
                    </div>
                  ))
                )}
              </Dropdown.Menu>
            </Dropdown>

            {/* Profile Dropdown */}
            <Dropdown className="profile">
              <Dropdown.Toggle bsPrefix="noBtn" id="profile" variant="none">
                <img src={user} alt="Profile" />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <NavLink to="/profile" className="dropdown-item">
                  Profile
                </NavLink>
                <NavLink to="/notifications" className="dropdown-item">
                  Notifications
                </NavLink>
                <Dropdown.Divider />
                <div className="px-3 py-2 d-flex align-items-center gap-2">
                  {theme === "dark" ? <FiMoon className="icon" /> : <FiSun className="icon" />}
                  <Form.Check type="switch" id="theme-switch" label={theme === "dark" ? "Dark Mode" : "Light Mode"} checked={theme === "dark"} onChange={toggleTheme} />
                </div>
                <Dropdown.Divider />
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
