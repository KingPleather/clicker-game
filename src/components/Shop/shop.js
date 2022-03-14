import React, { Component } from 'react';
import ShopItem from './shopItems.js'
import upgrades from './upgrades.json'
const Shop =()=>{


    return(
        <div>
            {upgrades.map((items)=><ShopItem title={items.title} description={items.description} upgrade={items.upgrade} price ={items.price}/>)}
        </div>
    )
}
export default Shop