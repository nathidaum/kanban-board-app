import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div>
        <img id="sidebar-logo" src={logo} alt="Logo" />
      </div>
      <div className="sidebar-section">
        <ul>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Sidebar;
