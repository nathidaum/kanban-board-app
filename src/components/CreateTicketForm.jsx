import { useState } from "react";

const CreateTicketForm = ({ tickets, callBacktoCreateTicket }) => {
  // set up states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the next ticket ID if needed, otherwise use Date.now() for unique ID
    const nextTicketId = Math.max(...tickets.map(ticket => ticket.id)) + 1;

    // Create the ticket object using the latest input values
    const newTicketObj = {
      id: nextTicketId,
      title: title,
      description: description,
      assignee: assignee,
      status: "To Do",
      priority: priority,
      createdDate: new Date(),
      dueDate: dueDate,
    };

    // Pass the new ticket back to Dashboard before clearing inputs
    callBacktoCreateTicket(newTicketObj);

    // Clear all input fields after the ticket has been created
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
            name="title"
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
            name="description"
            type="text"
            placeholder="Here are some details about the ticket..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Assignee:
          <input
            name="assignee"
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
            name="priority"
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
            name="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default CreateTicketForm;
