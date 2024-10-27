import Column from "../components/Column";

function Dashboard({ tickets, deleteTicket }) {
  const todoTickets = tickets.filter((ticket) => ticket.status === "To Do");
  const inProgressTickets = tickets.filter((ticket) => ticket.status === "In Progress");
  const doneTickets = tickets.filter((ticket) => ticket.status === "Done");

  return (
    <div>
      <div className="kanban-board">
        <Column title="To Do" tickets={todoTickets} callbackToDelete={deleteTicket} />
        <Column title="In Progress" tickets={inProgressTickets} callbackToDelete={deleteTicket} />
        <Column title="Done" tickets={doneTickets} callbackToDelete={deleteTicket} />
      </div>
    </div>
  );
}

export default Dashboard;