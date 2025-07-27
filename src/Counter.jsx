import { useState } from 'react';
function init(){
  console.log("init was executed")
  return Math.random();
}

export default function Counter() {
  const [count, setcount] = useState(init);
  console.log("component was rendered");
  // console.log(`count=${count}`)

  let inccount=()=>{
    setcount((currcount) => {
      return currcount+1;
    });
       setcount((currcount) => {
      return currcount+1;
    });
    


  }

  return (
    <div>
      <h3>count = {count}</h3>
      <button onClick={inccount}>Increase Count</button>
    </div>
  );
}
