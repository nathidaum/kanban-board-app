import { useState } from "react";
import Card from "./Card";

const Column = ({ title, tickets }) => {
  const [ticketList, setTicketList] = useState(tickets);

  const deleteTicket = (id) => {
    const updatedTicketList = ticketList.filter(
      (ticketObj) => ticketObj.id !== id
    );
    setTicketList(updatedTicketList);
  };

  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {/* <hr></hr> */}
      {ticketList.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} deleteTicket={deleteTicket} />
      ))}
    </div>
  );
};

export default Column;
