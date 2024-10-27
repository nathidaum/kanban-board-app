import Card from "./Card";

const Column = ({ title, tickets, callbackToDelete }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <hr />
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} deleteTicket={callbackToDelete} />
      ))}
    </div>
  );
};

export default Column;
