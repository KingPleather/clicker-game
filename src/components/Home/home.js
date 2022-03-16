import React, { Component } from "react";
import Clicker from "./clicker.js";
import Counter from "./counter.js";
import Shop from "../Shop/shop.js";
import BotShop from "../Shop/autoClickShop.js";
const Home = () => {
  return (
    <div>
      <Counter />
      <Clicker />
      <Shop />
      <BotShop />
    </div>
  );
};
export default Home;
