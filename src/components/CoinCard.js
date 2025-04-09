import React from 'react';
import './CoinCard.css';

function CoinCard({ coin }) {
  return (
    <div className="coin-card">
      <div className="top">
        <img src={coin.image} alt={coin.name} />
        <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
      </div>

      <p>💰 Price: ${coin.current_price.toLocaleString()}</p>
      <p>📊 Market Cap: ${coin.market_cap.toLocaleString()}</p>
      <p>📈 24h Change: <span style={{ color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </span></p>
      <p>🔄 Volume: ${coin.total_volume.toLocaleString()}</p>
    </div>
  );
}

export default CoinCard;
