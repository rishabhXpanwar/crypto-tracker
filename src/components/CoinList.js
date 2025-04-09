import React, { useState } from 'react';
import CoinCard from './CoinCard';
import './CoinList.css';

function CoinList({ coins }) {
  const [sortKey, setSortKey] = useState('');

  const sortedCoins = [...coins].sort((a, b) => {
    if (sortKey === 'market_cap') {
      return b.market_cap - a.market_cap;
    } else if (sortKey === 'price_change') {
      return b.price_change_percentage_24h - a.price_change_percentage_24h;
    }
    return 0;
  });

  return (
    <div className="coin-list">
      <div className="sort-buttons">
        <button onClick={() => setSortKey('market_cap')}>Sort by Market Cap</button>
        <button onClick={() => setSortKey('price_change')}>Sort by 24h Change</button>
      </div>

      <div className="grid">
        {sortedCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}

export default CoinList;
