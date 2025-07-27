import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket } from "./helper";
import { sum } from "./helper";
export default function Lottery({n=3,winnincondition}){
    let[ticket,SetTicket]=useState(genTicket(n));
    let iswinning=winnincondition(ticket);
    let genrate=()=>{
        SetTicket(genTicket(n))
    }
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket} iswinning={iswinning}/>
            </div>
            <h3>{iswinning && "Congratulations you won"}</h3>
            <button onClick={genrate}>Genrate Ticket</button>
        </div>
    )
}