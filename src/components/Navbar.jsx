const Navbar = ({ openForm }) => {
  return (
    <nav id="navbar">
      <div>
        <button className="create-new-btn" onClick={openForm}>Create ticket</button>
      </div>
    </nav>
  );
};

export default Navbar;