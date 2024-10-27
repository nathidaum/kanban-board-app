import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import TicketDetails from "./pages/TicketDetails";
import ticketData from "./assets/kanban.json";

function App() {
  const [tickets, setTickets] = useState(ticketData);

  // Function to add a new ticket
  const createTicket = (newTicketObj) => {
    setTickets((prevTickets) => [newTicketObj, ...prevTickets]);
    console.log(newTicketObj);
  };

  // Function to delete a ticket
  const deleteTicket = (id) => {
    setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== id));
  };


  return (
    <div id="homepage">
      <Navbar />
      <Sidebar />

      <Footer />

      <Routes>
        <Route path="/" element={<Dashboard tickets={tickets} createTicket={createTicket} deleteTicket={deleteTicket}/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ticket/:ticketId" element={<TicketDetails tickets={tickets} />} />
      </Routes>
    </div>
  );
}

export default App;
