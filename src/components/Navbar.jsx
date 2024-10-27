const Navbar = ({ openForm }) => {
  return (
    <nav id="navbar">
      <div>
        <button onClick={openForm}>Create ticket</button>
      </div>
    </nav>
  );
};

export default Navbar;