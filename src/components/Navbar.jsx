import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div>
        <img id="navbar-logo" src={logo} alt="Logo" />
      </div>
      <h2>Your tasks ✨</h2>
      <div>
        <button className="create-new-btn">Add Task</button>
      </div>
    </nav>
  );
};

export default Navbar;
