import Column from "../components/Column/Column";
import "../pages/pages.css";

function Dashboard({ tickets, deleteTicket, updateStatus }) {
  const todoTickets = tickets.filter((ticket) => ticket.status === "To Do");
  const inProgressTickets = tickets.filter((ticket) => ticket.status === "In Progress");
  const doneTickets = tickets.filter((ticket) => ticket.status === "Done");

  return (
    <div>
      <div className="kanban-board">
        <Column title="To Do" tickets={todoTickets} status="To Do" deleteTicket={deleteTicket} updateStatus={updateStatus} />
        <Column title="In Progress" tickets={inProgressTickets} status="In Progress" deleteTicket={deleteTicket} updateStatus={updateStatus} />
        <Column title="Done" tickets={doneTickets} status="Done" deleteTicket={deleteTicket} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default Dashboard;
