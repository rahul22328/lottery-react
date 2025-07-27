import { useState } from "react"

export default function Likebuton(){
    let[isLike, setIsLike]=useState(false);
    let[Clicks,setClicks]=useState(0);
    function togglebutton(){
        let newval=!isLike
        setIsLike(newval);
        setClicks(Clicks+1)
    }
    let likestyle={color:"red"};

    return(
        <div>
            <p>Clicks={Clicks}</p>
            <p  onClick={togglebutton}>{}{isLike ? <i className="fa-solid fa-heart" style={likestyle}></i>:<i class="fa-regular fa-heart"></i>} </p>
        </div>
    )
}