import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ticketData from "../assets/kanban.json";
import Column from "../components/Column";

function Dashboard() {
  // Filter tickets by status to pass them as props
  const todoTickets = ticketData.filter((ticket) => ticket.status === "To Do");
  const inProgressTickets = ticketData.filter(
    (ticket) => ticket.status === "In Progress"
  );
  const doneTickets = ticketData.filter((ticket) => ticket.status === "Done");

  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className="kanban-board">
        <Column title="To Do" tickets={todoTickets} />
        <Column title="In Progress" tickets={inProgressTickets} />
        <Column title="Done" tickets={doneTickets} />
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
