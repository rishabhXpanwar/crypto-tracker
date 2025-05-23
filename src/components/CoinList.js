import React from 'react';
import CoinCard from './CoinCard';
import './CoinList.css';

function CoinList({ coins = [], watchlist = [], toggleWatchlist }) {
  return (
    <div className="coin-list">
      {coins.map((coin) => {
        if (!coin || !coin.id) return null; // Prevent undefined errors

        return (
          <CoinCard
            key={coin.id}
            coin={coin}
            isInWatchlist={watchlist.includes(coin.id)}
            toggleWatchlist={toggleWatchlist}
          />
        );
      })}
    </div>
  );
}

export default CoinList;
