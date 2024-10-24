import {useState} from 'react';

const Card = ({ ticket, deleteTicket }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString("en-US", { month: "short" });  // first three characters of the month
        const day = date.getDate(); // day of the month
        return `${month} ${day}`;
    };
  
    return (
      <div className="card">
        <h3>{ticket.title}</h3>
        <p>{ticket.description}</p>
        <hr></hr>
        <p className="assigned">{ticket.assignee}</p>
        <p className={`label ${ticket.priority}`}>{ticket.priority}</p>
        <p className="date">📅 Created {formatDate(ticket.createdDate)} - 🚨 Due {formatDate(ticket.dueDate)}</p>
        <button onClick={() => {deleteTicket(ticket.id)}}>Delete</button>
      </div>
    );
  };
  
  export default Card;
  