import Card from "../Card/Card";
import "../../components/Card/card.css";
import "../Column/column.css";

const Column = ({ title, tickets, status, deleteTicket, updateStatus }) => {
  const onDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("hovered"); // Add a hovered class
  };
  
  const onDragLeave = (event) => {
    event.currentTarget.classList.remove("hovered"); // Remove hovered class
  };

  const onDrop = (event) => {
    const id = event.dataTransfer.getData("id"); // Retrieve ID as string
    updateStatus(id, status); // Pass ID as string
    event.currentTarget.classList.remove("hovered");
};

  return (
    <div
    className="kanban-column"
    onDragOver={onDragOver}
    onDrop={(e) => onDrop(e, status)}
    onDragLeave={onDragLeave}
  >
      <h2>{title}</h2>
      <div className="ticket-container">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} deleteTicket={deleteTicket} />
        ))}
      </div>
    </div>
  );
};

export default Column;
