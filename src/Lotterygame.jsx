import { useState } from "react";
export default function Lotterygame(){
    let[random, SetRandom]=useState(null);
    let[isluckey, SetisLuckey]=useState(false);
    let Randomnum=()=>{
           let num= Math.floor(100+Math.random()*900)
           let sum=getSum(num);
           SetRandom(num);
           SetisLuckey(sum==14);

        }
    let getSum=(num)=>{
        return num.toString().split("").reduce((acc,digit)=>{ return acc+parseInt(digit,0)})

    }
    
    return(
        <div style={styles.container}>
            <button onClick={Randomnum} style={styles.button}>Genrate Number</button>
            {random !== null && (<>
            <h3>Genrated Number:{random}</h3>
            <h4>{isluckey?"🎉 Lucky! Digit sum is 15!" : "❌ Not lucky. Try again!"}</h4>
            </>
            )
            }
        </div>
    )

}
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
};
