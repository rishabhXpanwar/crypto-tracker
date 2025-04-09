import React from "react";
import "./SortButtons.css";

function SortButtons({ sortBy, setSortBy }) {
  return (
    <div className="sort-buttons">
      <button
        className={sortBy === "market_cap" ? "active" : ""}
        onClick={() => setSortBy("market_cap")}
      >
        Sort by Market Cap
      </button>
      <button
        className={sortBy === "price_change" ? "active" : ""}
        onClick={() => setSortBy("price_change")}
      >
        Sort by 24h Change
      </button>
    </div>
  );
}

export default SortButtons;
