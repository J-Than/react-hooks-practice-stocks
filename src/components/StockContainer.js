import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, onTradeStock, sort, filter }) {

  let displayStocks = [];

  function filterer() {
    if (filter!=="All") {
      displayStocks = stockList.filter(s => s.type===filter)
    } else {
      displayStocks = stockList
    }
  }

  function sorter() {
    if (sort!=="None") {
      displayStocks = displayStocks.sort((a, b) => {
        if (sort==="Alphabetically") {
          return a.ticker < b.ticker ? -1 : 1;
        } else {
          return a.price-b.price
        }
      })
    }
  }

  filterer();
  sorter();

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks.map(stock => <Stock
        key={stock.id}
        stock={stock}
        onTradeStock={onTradeStock}
      />)}
    </div>
  );
}

export default StockContainer;
