import { NavLink } from "react-router-dom";

const Card = ({ ticket, deleteTicket }) => {

  return (
    <div className="card">
      <div className="card-top">
      <h3>{ticket.title}</h3>
      <p className={`label ${ticket.priority}`}>{ticket.priority}</p>
      </div>
      {/* <p className="description">{ticket.description}</p> */}
      <section className="card-buttons">
      <button className="delete-button" onClick={() => {deleteTicket(ticket.id);}}>Delete</button>
      <NavLink to={`/ticket/${ticket.id}`}>
        <button>See details</button>
      </NavLink>
      </section>
    </div>
  );
};

export default Card;
