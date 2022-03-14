import React,{useContext} from 'react';
import ClickerIcon from '../../clickericon.jpg'
import {CreditContext} from '../../creditContext.js'
const Counter =()=>{
    const [credits,setCredits] = useContext(CreditContext);
    const style ={
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor:"red"

    }
    return(
        <div style={style}>

            <h1>
                
                {credits.amount} 
            </h1>

        </div>
    )
}
export default Counter