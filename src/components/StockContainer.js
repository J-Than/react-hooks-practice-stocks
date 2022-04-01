import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map(stock => <Stock key={stock.id} stock={stock} />)}
    </div>
  );
}

export default StockContainer;
