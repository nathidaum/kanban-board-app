import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Column from "./components/Column";
import ticketData from "./assets/kanban.json";

function App() {
  // Filter tickets by status
  const todoTickets = ticketData.filter(ticket => ticket.status === "To Do");
  const inProgressTickets = ticketData.filter(ticket => ticket.status === "In Progress");
  const doneTickets = ticketData.filter(ticket => ticket.status === "Done");

  return (
    <div id="homepage">
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

export default App;