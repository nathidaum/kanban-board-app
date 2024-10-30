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

  // available statuses
  const statuses = ["To Do", "In Progress", "Done"];
  const [selectedStatus, setSelectedStatus] = useState(ticket.status);
  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    callbackToUpdateStatus(ticket.id, newStatus); // Update status in app
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

        {/* dropdown menu to change state */}
        <select
          className="dropdown"
          id="status"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
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
