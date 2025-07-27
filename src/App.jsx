import "./App.css";

// import LudoBoard from "./LudoBoard";
import Todo from "./Todo";
import Lotterygame from "./Lotterygame";
import Lottery from "./Lottery";
import { sum } from "./helper";


function App() {
  let winnincondition=(ticket)=>{
   return sum(ticket)===15;
  }
  return(
    <>
   <Lottery n={3} winnigsum={winnincondition}/>
    </>
  )

 
}

export default App
