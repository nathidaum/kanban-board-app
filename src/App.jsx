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
import UpdateTicketForm from "./components/UpdateTicketForm/UpdateTicketForm"; // Import Update Form
import ticketData from "./assets/kanban.json";

function App() {
  const [tickets, setTickets] = useState(ticketData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false); // New state for edit form
  const [currentTicket, setCurrentTicket] = useState(null); // Store ticket being edited
  const [query, setQuery] = useState("");

  // Open forms
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const openEditForm = (ticket) => {
    setCurrentTicket(ticket); // Set ticket to be edited
    setIsEditFormOpen(true);
  };
  const closeEditForm = () => setIsEditFormOpen(false);

  // Function to create a new ticket
  const createTicket = (newTicketObj) => {
    setTickets((prevTickets) => [newTicketObj, ...prevTickets]);
    closeForm();
  };

  // Function to edit / update a ticket
  const updateTicket = (updatedTicket) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === updatedTicket.id ? updatedTicket : ticket
      )
    );
    closeEditForm();
  };

  // Function to delete a ticket
  const deleteTicket = (id) => {
    setTickets((prevTickets) =>
      prevTickets.filter((ticket) => ticket.id !== id)
    );
  };

  // Function to handle search input change
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) =>
      ticket.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [tickets, query]);

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
            <TicketDetails
              tickets={tickets}
              callbackToUpdateStatus={updateTicket} // Pass update callback
              onEdit={openEditForm} // Pass edit handler
            />
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

      {isEditFormOpen && currentTicket && (
        <div className="form-overlay" onClick={closeEditForm}>
          <div className="form-box" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeEditForm} className="close-button">
              X
            </button>
            <UpdateTicketForm
              ticket={currentTicket}
              callBacktoUpdateTicket={updateTicket}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
