import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => {
      setStockList(data);
    })
  }, [])

  function handleTradeStock(stock) {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
      setStockList(stockList.filter(s => s.id !== stock.id))
    } else {
      setStockList([...stockList, stock]);
      setPortfolio(portfolio.filter(s => s.id !== stock.id))
    }
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} onTradeStock={handleTradeStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onTradeStock={handleTradeStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
