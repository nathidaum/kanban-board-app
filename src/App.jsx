import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import TicketDetails from "./pages/TicketDetails";
import CreateTicketForm from "./components/CreateTicketForm"; // Import the form component
import ticketData from "./assets/kanban.json";

function App() {
  const [tickets, setTickets] = useState(ticketData);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to add a new ticket
  const createTicket = (newTicketObj) => {
    setTickets((prevTickets) => [newTicketObj, ...prevTickets]);
    closeForm(); // Close the form after creating a ticket
  };

  // Function to delete a ticket
  const deleteTicket = (id) => {
    setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== id));
  };

  // Form control functions
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div id="app">

      <Routes>
        <Route path="/" element={<Dashboard tickets={tickets} createTicket={createTicket} deleteTicket={deleteTicket}/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ticket/:ticketId" element={<TicketDetails tickets={tickets} />} />
      </Routes>


      <Navbar openForm={openForm} /> {/* Pass the openForm function to Navbar */}
      <Sidebar />
      <Footer />

      {/* Conditionally render the CreateTicketForm if isFormOpen is true */}
      {isFormOpen && (
        <div className="form-overlay" onClick={closeForm}> {/* clicking outside the form content should also close the form */}
          <div className="form-box" onClick={(e) => e.stopPropagation()}> {/* prevents accidental closure of the form if user clicks inside the modal */}
            <button onClick={closeForm} className="close-button">X</button>
            <CreateTicketForm callBacktoCreateTicket={createTicket} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
