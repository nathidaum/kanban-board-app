import { useState } from "react";
import "../CreateTicketForm/create-ticket-form.css";

const CreateTicketForm = ({ callBacktoCreateTicket }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Get today’s date formatted as YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicketObj = {
      id: Date.now(),
      title,
      description,
      assignee,
      status: "To Do",
      priority,
      createdDate: new Date(),
      dueDate,
    };

    callBacktoCreateTicket(newTicketObj); // This will also close the modal in App

    // Clear all input fields
    setTitle("");
    setDescription("");
    setAssignee("");
    setPriority("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Create New Ticket</h2>
      <div className="inputs">
        <label>
          Title:
          <input
            type="text"
            placeholder="Do something..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            placeholder="Here are some details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Assignee:
          <input
            type="text"
            placeholder="Alice"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            required
          />
        </label>

        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            min={today} // Set the minimum date to today
          />
        </label>
      </div>
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default CreateTicketForm;
