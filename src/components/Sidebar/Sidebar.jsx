import { NavLink } from "react-router-dom";
import "../Sidebar/sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div>
        <img id="sidebar-logo" src={logo} alt="Logo" />
      </div>
      <div className="sidebar-section">
        <ul>
          <li>
            <NavLink to="/">
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <i className="fas fa-info-circle"></i> About
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
