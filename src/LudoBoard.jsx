import { useState } from "react"
export default function LudoBoard(){
      let [moves, SetMoves]=useState({blue:0,yellow:0,green:0,red:0});
      let [arr,SetArr]=useState(["nomoves"]);
let updateBlue = () =>
  SetMoves((prevmoves) => ({
    ...prevmoves,
    blue: prevmoves.blue + 1,
  }));
let updateYellow = () => {
  SetMoves((prevmoves) => ({
    ...prevmoves,
    yellow: prevmoves.yellow + 1,
  }));

  SetArr((prevArr) => [...prevArr, "yellow moves"]);
};


  let updateGreen = () =>
  SetMoves((prevmoves) => ({
    ...prevmoves,
   green: prevmoves.green + 1,
  }));

  let updateRed = () =>
  SetMoves((prevmoves) => ({
    ...prevmoves,
   red: prevmoves.red + 1,
  }));



      
    return(
    
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue Moves ={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves ={moves.yellow}</p>
                <button style={{backgroundColor:"yellow"} }onClick={updateYellow}>+1</button>
                <p>Green ={moves.green}</p>
                <button style={{backgroundColor:"green"}}onClick={updateGreen}>+1</button>
                <p>Red ={moves.red}</p>
                <button style={{backgroundColor:"red"}}onClick={updateRed}>+1</button>
            </div>
        </div>

    )
}