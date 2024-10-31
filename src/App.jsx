import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import React from "react";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import TicketDetails from "./pages/TicketDetails/TicketDetails";
import CreateTicketForm from "./components/CreateTicketForm/CreateTicketForm";
import UpdateTicketForm from "./components/UpdateTicketForm/UpdateTicketForm";
import ticketData from "./assets/kanban.json";

function App() {
  const [tickets, setTickets] = useState(ticketData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentTicket, setCurrentTicket] = useState(null);
  const [query, setQuery] = useState("");

  // Open forms
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const openEditForm = (ticket) => {
    setCurrentTicket(ticket);
    setIsEditFormOpen(true);
  };
  const closeEditForm = () => setIsEditFormOpen(false);

  // Calculate the initial highest ID from the ticket data
  const initialNextId =
    Math.max(...ticketData.map((ticket) => parseInt(ticket.id, 10))) + 1;
    const [nextId, setNextId] = useState(initialNextId);

  // Function to create a new ticket
  const createTicket = (newTicketObj) => {
    const ticketWithId = { ...newTicketObj, id: nextId }; // Assign nextId as a string
    setTickets((prevTickets) => [ticketWithId, ...prevTickets]);
    setNextId((prevId) => prevId + 1); // Increment nextId for the next ticket
    closeForm();

    // Trigger toast notification
    toast.success("🎉 New ticket created successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
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

  // Function to change the status of a ticket
  const updateStatus = (ticketId, newStatus) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id.toString() === ticketId.toString()
          ? { ...ticket, status: newStatus }
          : ticket
      )
    );
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
              updateStatus={updateStatus}
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
              callbackToUpdateStatus={updateStatus}
              onEdit={openEditForm}
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

      {/* ToastContainer renders toast notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
