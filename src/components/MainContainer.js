import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([]);
  const [stockDisplayList, setStockDisplayList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => {
      setStockList(data);
      setStockDisplayList(data);
    })
  }, [])

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
