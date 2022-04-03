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

  // function sorter(a, b) {
  //   if (sort!=="None") {
  //     displayStocks = stockList.sort((a, b) => {
  //       if (sort==="Alphabetically") {
  //         a.ticker-b.ticker
  //       } else {
  //         a.price-b.price
  //       }
  //     })
  //   }
  // }

  filterer();

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
