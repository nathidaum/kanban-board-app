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
      <h2>Create a new ticket</h2>
      <div className="inputs">
        <label>
          TITLE
          <br></br>
          <input
            type="text"
            placeholder="Do something..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          DESCRIPTION
          <br />
          <textarea
            className="textarea"
            placeholder="Here are some details about the ticket so that..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="5" // Controls the height of the textarea
            cols="40" // Controls the width of the textarea
          />
        </label>

        <label>
          ASSIGNEE
          <br></br>
          <input
            type="text"
            placeholder="Nathi"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            required
          />
        </label>

        <div className="horizontal">
          <label>
            PRIORITY
            <br></br>
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
            DUE DATE
            <br></br>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              min={today} // Set the minimum date to today
            />
          </label>
        </div>
      </div>
      <button className="submit" type="submit">Create ticket</button>
    </form>
  );
};

export default CreateTicketForm;
