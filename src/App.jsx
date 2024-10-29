import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import TicketDetails from "./pages/TicketDetails/TicketDetails";
import CreateTicketForm from "./components/CreateTicketForm/CreateTicketForm";
import ticketData from "./assets/kanban.json";

function App() {
  const [tickets, setTickets] = useState(ticketData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [query, setQuery] = useState("");

  const createTicket = (newTicketObj) => {
    setTickets((prevTickets) => [newTicketObj, ...prevTickets]);
    closeForm();
  };

  const deleteTicket = (id) => {
    setTickets((prevTickets) =>
      prevTickets.filter((ticket) => ticket.id !== id)
    );
  };

  const updateStatus = (ticketId, newStatus) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  // Function to handle search input change
  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log("Updated query:", e.target.value); // Debugging
  };

  const filteredTickets = useMemo(() => {
    // Log query and filtered results for debugging
    console.log("Filtering tickets with query:", query);
    const filtered = tickets.filter((ticket) =>
      ticket.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered tickets:", filtered);
    return filtered;
  }, [tickets, query]);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div id="app">
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              tickets={filteredTickets}
              createTicket={createTicket}
              deleteTicket={deleteTicket}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/ticket/:ticketId"
          element={
            <TicketDetails tickets={tickets} updateStatus={updateStatus} />
          }
        />
      </Routes>
      <Navbar
        openForm={openForm}
        callBackToFilterTickets={handleSearch}
        query={query}
      />
      <Sidebar />
      <Footer />
      {isFormOpen && (
        <div className="form-overlay" onClick={closeForm}>
          <div className="form-box" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeForm} className="close-button">
              X
            </button>
            <CreateTicketForm callBacktoCreateTicket={createTicket} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
