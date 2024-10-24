import { NavLink } from "react-router-dom";

const Card = ({ ticket, deleteTicket }) => {
  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <hr></hr>
      <p className="assigned">{ticket.assignee}</p>
      <p className={`label ${ticket.priority}`}>{ticket.priority}</p>
      <button
        onClick={() => {
          deleteTicket(ticket.id);
        }}
      >
        Delete
      </button>
      <NavLink to={`/ticket/${ticket.id}`}>
        <button>See details</button>
      </NavLink>
    </div>
  );
};

export default Card;
