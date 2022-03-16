import React, { useState, useContext } from "react";
import { CreditContext } from "../../creditContext.js";
const AutoClickItems = ({ id,title, description, upgrade, price }) => {
    const [credits, setCredits] = useContext(CreditContext);
    const item = {
        id:id,
        title: title,
        description: description,
        upgrade: upgrade,
        price: price
    };
    const [items, setItems] = useState(item);
    let enabled = false;
    const handleClick = () => {
        if (credits.amount >= items.price) {
            let temp = parseInt(items.upgrade.replace("+",""))
            let secondtemp = credits.botsBought
            console.log(items.price)
            setCredits({
                amount: credits.amount - items.price,
                perclick: credits.perclick, 
                creditsPerSec:credits.creditsPerSec+temp, 
                botsBought:[secondtemp.push(id)],
                upgradesBought:credits.upgradesBought
            })
            console.log(credits.amount-items.price)
            enabled=true;
        }
    }

    {/*setCredits({amount: credits.amount + credits.creditsPerSec,perclick: credits.perclick, creditsPerSec:credits.creditsPerSec, botsBought:credits.botsBought,upgradesBought:credits.upgradesBought},1000)*/}

    



    return (
        <div>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <h5>{price}</h5>
            <button onClick={handleClick}>Purchase</button>
        </div>
    );
};
export default AutoClickItems;
