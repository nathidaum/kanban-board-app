import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div>
        <img id="sidebar-logo" src={logo} alt="Logo" />
      </div>
      <div className="sidebar-section">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Sidebar;
