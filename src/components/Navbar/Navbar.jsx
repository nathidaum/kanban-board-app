import "../Navbar/navbar.css";

const Navbar = ({ openForm, callBackToFilterTickets, query }) => {

  return (
    <nav id="navbar">
      <div id="navbar-search">
      <input
          type="search"
          placeholder="Search a ticket..."
          value={query} // Ensures input reflects current query state
          onChange={callBackToFilterTickets} // Updates query on change
        />
      </div>
      <div>
        <button onClick={openForm}>Create ticket</button>
      </div>
    </nav>
  );
};

export default Navbar;
