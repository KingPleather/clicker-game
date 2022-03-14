import React, { Component } from 'react';
import Clicker from './clicker.js'
import Counter from './counter.js'
import Shop from '../Shop/shop.js'
const Home =()=>{
    
    return (
        <div>
            <Counter/>
            <Clicker/>
            <Shop/>
        </div>
    )

}
export default Home