import React,{useContext} from 'react';
import ClickerIcon from '../../clickericon.jpg'
import {CreditContext} from '../../creditContext.js'

const Clicker =()=>{
    const [credits, setCredits] =useContext(CreditContext);

    const handleClick =()=>{

        setCredits({amount: credits.amount+credits.perclick,perclick: credits.perclick, creditsPerSec:credits.creditsPerSec, botsBought:credits.botsBought,upgradesBought:credits.upgradesBought})        
        

    }

    return (
        <div  className="icon-style" >
            <img src={ClickerIcon} style={{borderRadius:"50%" ,transform: "scale(1.5, 1.5)"}} onClick={handleClick}></img>
        </div>
    )
}
export default Clicker
