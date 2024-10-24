import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Column from "./components/Column";
import ticketData from "./assets/kanban.json";
import About from "./pages/About";

function App() {
  // Filter tickets by status to pass them as props
  const todoTickets = ticketData.filter((ticket) => ticket.status === "To Do");
  const inProgressTickets = ticketData.filter(
    (ticket) => ticket.status === "In Progress"
  );
  const doneTickets = ticketData.filter((ticket) => ticket.status === "Done");

  return (
    <div id="homepage">
      <Navbar />
      <Sidebar />

      <Footer />

      <Routes>
        <Route
          path="/"
          element={
            <div className="kanban-board">
              <Column title="To Do" tickets={todoTickets} />
              <Column title="In Progress" tickets={inProgressTickets} />
              <Column title="Done" tickets={doneTickets} />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
