import Ticketnum from "./Ticketnum";
import "./Ticket.css";

export default function Ticket({ ticket, iswinning }) {
  return (
    <div className="ticket-wrapper">
      <span className="ticket-label">Ticket</span>
      <div className={`ticket ${iswinning ?"ticket-winner":""}`}>
        {ticket.map((num, idx) => (
          <Ticketnum num={num} key={idx} />
        ))}
      </div>
    </div>
  );
}
