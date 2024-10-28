import Card from "../Card/Card";
import "../../components/Card/card.css"
import "../Column/column.css"

const Column = ({ title, tickets, callbackToDelete }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} deleteTicket={callbackToDelete} />
      ))}
    </div>
  );
};

export default Column;
