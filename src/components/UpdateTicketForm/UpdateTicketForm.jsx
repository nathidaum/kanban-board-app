import { useState, useEffect } from "react";
import "../CreateTicketForm/create-ticket-form.css";

const UpdateTicketForm = ({ ticket, callBacktoUpdateTicket }) => {
  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const [assignee, setAssignee] = useState(ticket.assignee);
  const [priority, setPriority] = useState(ticket.priority);
  const [dueDate, setDueDate] = useState(ticket.dueDate);

  // Get today’s date formatted as YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTicket = {
      ...ticket,
      title,
      description,
      assignee,
      priority,
      dueDate,
    };

    callBacktoUpdateTicket(updatedTicket);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Edit Ticket</h2>
      <div className="inputs">
        <label>
          TITLE
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength="70"
          />
        </label>

        <label>
          DESCRIPTION
          <textarea
            className="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="5"
            cols="40"
            maxLength="350"
          />
        </label>

        <label>
          ASSIGNEE
          <input
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            required
          />
        </label>

        <div className="horizontal">
          <label>
            PRIORITY
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>

          <label>
            DUE DATE
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              min={today}
            />
          </label>
        </div>
      </div>
      <button className="submit" type="submit">Save Changes</button>
    </form>
  );
};

export default UpdateTicketForm;
