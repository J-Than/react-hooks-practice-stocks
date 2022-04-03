import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sort, setSort] = useState("None");
  const [filter, setFilter] = useState("All");

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
    } else {
      setPortfolio(portfolio.filter(s => s.id !== stock.id))
    }
  }

  function handleSort(sort) {
    setSort(sort)
  }

  function handleFilter(filter) {
    setFilter(filter)
  }

  return (
    <div>
      <SearchBar sort={sort} filter={filter} onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} onTradeStock={handleTradeStock} sort={sort} filter={filter} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onTradeStock={handleTradeStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
