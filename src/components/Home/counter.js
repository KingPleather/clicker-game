import React, { useContext } from "react";
import ClickerIcon from "../../clickericon.jpg";
import { CreditContext } from "../../creditContext.js";
const Counter = () => {
  const [credits, setCredits] = useContext(CreditContext);
  const style = {
    position: "fixed",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "red"
  };
  const BalDisplay = () => {
    let str;
    let num = credits.amount;
    if (num >= 1000000000000000000) {
      str = toString(Math.round(num / 10000000000000000.0) / 100);
      return str.substr(0, str.length() - 4) + " Quintillion";
    } else if (num >= 1000000000000000) {
      str = toString(Math.round(num / 10000000000000.0) / 100);
      return str.substr(0, str.length() - 4) + " Quadrillion";
    } else if (num >= 1000000000000) {
      str = toString(Math.round(num / 10000000000.0) / 100);
      return str.substr(0, str.length() - 4) + " Trillion";
    } else if (num >= 1000000000) {
      str = toString(Math.round(num / 10000000.0) / 100);
      return str.substr(0, str.length() - 4) + " Billion";
    } else if (num >= 1000000) {
      str = toString(Math.round(num / 10000.0) / 100);
      return str.substr(0, str.length() - 4) + " Million";
    } else if (num >= 1000) {
      str = toString(Math.round(num / 10.0) / 100);
      return str.substr(0, str.length() - 4) + " Thousand";
    } else {
      return toString(num);
    }
  };

  return (
    <div style={style}>
      <h1>{credits.amount}</h1>
    </div>
  );
};
export default Counter;
