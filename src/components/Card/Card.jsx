import { NavLink } from "react-router-dom";
import "./card.css"

const Card = ({ ticket, deleteTicket }) => {

  const onDragStart = (event, id) => {
    console.log("Dragstart" + id)
    event.dataTransfer.setData("id", id) // set the card’s id in the data transfer so it can be accessed on drop
    event.currentTarget.classList.add("dragging")
  }

  const onDragEnd = (event) => {
    event.currentTarget.classList.remove("dragging")
  }

  return (
    <div
      className="card"
      draggable // make the card draggable
      onDragStart={(e) => onDragStart(e, ticket.id)}
      onDragEnd={onDragEnd}
    >
      <div className="card-top">
      <h3>{ticket.title}</h3>
      <p className={`label ${ticket.priority}`}>{ticket.priority}</p>
      </div>
      {/* <p className="description">{ticket.description}</p> */}
      <section className="card-buttons">
      <button className="delete-button" onClick={() => {deleteTicket(ticket.id);}}>Delete</button>
      <NavLink to={`/ticket/${ticket.id}`}>
        <button className="outline-button">See details</button>
      </NavLink>
      </section>
    </div>
  );
};

export default Card;
