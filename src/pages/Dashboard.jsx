import Column from "../components/Column";
import CreateTicketForm from "../components/CreateTicketForm";

function Dashboard({ tickets, createTicket, deleteTicket }) {
  const todoTickets = tickets.filter((ticket) => ticket.status === "To Do");
  const inProgressTickets = tickets.filter((ticket) => ticket.status === "In Progress");
  const doneTickets = tickets.filter((ticket) => ticket.status === "Done");

  return (
    <div>
      <CreateTicketForm tickets={tickets} callBacktoCreateTicket={createTicket} />

      <div className="kanban-board">
        <Column title="To Do" tickets={todoTickets} callbackToDelete={deleteTicket} />
        <Column title="In Progress" tickets={inProgressTickets} callbackToDelete={deleteTicket} />
        <Column title="Done" tickets={doneTickets} callbackToDelete={deleteTicket} />
      </div>
    </div>
  );
}

export default Dashboard;