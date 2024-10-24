import { useParams, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ticketData from "../assets/kanban.json";

function TicketDetails() {
  const { ticketId } = useParams(); // Get ticketId from the URL

  // Find the ticket in the array based on the ticketId
  const ticket = ticketData.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <h2>Ticket not found</h2>; // what to show if the ticket is not found
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

      <div className="card">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h3>{ticket.title}</h3>
        <p>{ticket.description}</p>
        <hr></hr>
        <p className="assigned">{ticket.assignee}</p>
        <p className={`label ${ticket.priority}`}>{ticket.priority}</p>
        <p className="date">📅 Created {formatDate(ticket.createdDate)}</p>
        <p className="date">🚨 Due {formatDate(ticket.dueDate)}</p>
      </div>

      <Footer />
    </div>
  );
}

export default TicketDetails;
