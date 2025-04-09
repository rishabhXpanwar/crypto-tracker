// src/components/SortButtons.js
import React from 'react';
import './SortButtons.css';

const SortButtons = ({ coins, setCoins }) => {
  const handleSort = (type) => {
    let sorted = [...coins];

    if (type === 'asc') {
      sorted.sort((a, b) => a.current_price - b.current_price);
    } else if (type === 'desc') {
      sorted.sort((a, b) => b.current_price - a.current_price);
    } else if (type === 'marketcap') {
      sorted.sort((a, b) => b.market_cap - a.market_cap);
    }

    setCoins(sorted);
  };

  return (
    <div className="sort-buttons">
      <button onClick={() => handleSort('asc')}>Price ↑</button>
      <button onClick={() => handleSort('desc')}>Price ↓</button>
      <button onClick={() => handleSort('marketcap')}>Market Cap</button>
    </div>
  );
};

export default SortButtons;
