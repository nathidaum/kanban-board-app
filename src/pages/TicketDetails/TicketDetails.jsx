import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import "../TicketDetails/ticket-details.css";

function TicketDetails({ tickets, callbackToUpdateStatus, onEdit }) {
  const { ticketId } = useParams();
  const ticket = tickets.find((ticket) => String(ticket.id) === ticketId);

  if (!ticket) {
    return <h2>Ticket not found</h2>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <div className="ticket-details">
      <div className="detailed-card">
        <div className="detailed-card-top">
          <div className="title">
            <h3>{ticket.title}</h3>
            <p className={`label ${ticket.priority}`}>{ticket.priority}</p>
          </div>
          <button onClick={() => onEdit(ticket)}>Edit</button>
        </div>
        <p className="date">
          Created {formatDate(ticket.createdDate)} - Due{" "}
          {formatDate(ticket.dueDate)}
        </p>
        <p>{ticket.description}</p>
        <p className="assigned">{ticket.assignee}</p>
      </div>

      <div className="buttons">
        <NavLink to="/" className="back-button">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}

export default TicketDetails;
