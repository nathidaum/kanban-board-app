import "../Navbar/navbar.css";

const Navbar = ({ openForm }) => {
  return (
    <nav id="navbar">
      <div id="navbar-search">
        <input type="text" placeholder="Search a task..." />
      </div>
      <div>
        <button onClick={openForm}>Create ticket</button>
      </div>
    </nav>
  );
};

export default Navbar;
