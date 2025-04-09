import React from 'react';
import './CoinCard.css';

function CoinCard({ coin, isInWatchlist, toggleWatchlist }) {
  return (
    <div className="coin-card">
      <div className="coin-header">
        <img src={coin.image} alt={coin.name} className="coin-image" />
        <div>
          <h3>{coin.name} ({coin.symbol.toUpperCase()})</h3>
          <p>Price: ${coin.current_price.toLocaleString()}</p>
        </div>
        <button
          className={`watchlist-btn ${isInWatchlist ? 'remove' : 'add'}`}
          onClick={() => toggleWatchlist(coin.id)}
        >
          {isInWatchlist ? '★ Remove' : '☆ Add'}
        </button>
      </div>
      <div className="coin-details">
        <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
        <p>24h Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
        <p>Volume: ${coin.total_volume.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CoinCard;
