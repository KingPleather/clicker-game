import React, { useState,useContext } from 'react';
import {CreditContext} from '../../creditContext.js'
const ShopItem =({title, description, upgrade, price})=>{
    const [credits, setCredits] =useContext(CreditContext);
    const item = {title:title, description:description, upgrade:upgrade, price:price}
    const [items, setItems] = useState(item);
    const handleClick =()=>{
        console.log(items)
        if(credits.amount >= items.price) {

            if (items.upgrade.includes('x')) {
                setCredits({amount:credits.amount-items.price, perclick:credits.perclick * parseInt((items.upgrade.replace('x','')))})
                setItems({title:items.title, description:items.description, upgrade:items.upgrade, price:Math.floor(items.price*2.2)})

            } else if (items.upgrade.includes('+')) {
                setCredits({amount:credits.amount-items.price, perclick:credits.perclick + parseInt((items.upgrade.replace('+','')))})
                setItems({title:items.title, description:items.description, upgrade:items.upgrade, price:Math.floor(items.price*1.5)})

            }

        }

        



    }
    return(
        <div>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <button onClick={handleClick}>Purchase</button>
        </div>
    )
}
export default ShopItem