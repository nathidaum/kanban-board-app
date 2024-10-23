const Card = ({ ticket }) => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
  
    return (
      <div className="card">
        <h3>{ticket.title}</h3>
        <h4>{ticket.description}</h4>
        <p>{ticket.assignee}</p>
        <p>{ticket.priority}</p>
        <p>✨ <strong>Created</strong> {formatDate(ticket.createdDate)}</p>
        <p>🚨 <strong>Due</strong> {formatDate(ticket.dueDate)}</p>
      </div>
    );
  };
  
  export default Card;
  