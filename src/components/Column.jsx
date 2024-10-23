import Card from "./Card";

const Column = ({ title, tickets }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;