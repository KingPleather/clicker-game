import React from "react";
import AutoClickItems from "./autoClickItems.js";
import bots from "./autoClickers.json";
const BotShop = () => {
  return (
    <div>
      {bots.map((items) => (
        <AutoClickItems
          id={items.id}
          title={items.title}
          description={items.description}
          upgrade={items.upgrade}
          price={items.price}
        />
      ))}
    </div>
  );
};
export default BotShop;
