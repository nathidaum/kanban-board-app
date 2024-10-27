import { useParams, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function TicketDetails({ tickets }) {
  const { ticketId } = useParams(); // Get ticketId from the URL

  // Find the ticket in the array based on the ticketId
  const ticket = tickets.find((ticket) => String(ticket.id) === ticketId);

  if (!ticket) {
    return <h2>Ticket not found</h2>; // What to show if the ticket is not found
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short" }); // first three characters of the month
    const day = date.getDate(); // day of the month
    return `${month} ${day}`;
  };

  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className="detailed-card">
        <p className="date">
          Created {formatDate(ticket.createdDate)} - Due {formatDate(ticket.dueDate)}
        </p>
        <div className="card-top">
          <h3>{ticket.title}</h3>
          <p className={`label ${ticket.priority}`}>{ticket.priority}</p>
        </div>
        <p>{ticket.description}</p>
        <p className="assigned">{ticket.assignee}</p>
      </div>

      <NavLink to="/" className="back-button">
        <button>Back</button>
      </NavLink>

      <Footer />
    </div>
  );
}

export default TicketDetails;
