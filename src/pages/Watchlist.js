// src/pages/Watchlist.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CoinList from '../components/CoinList';
import './Watchlist.css';

function Watchlist() {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem('watchlist')) || []
  );

  const fetchCoins = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      const data = await res.json();
      const filtered = data.filter((coin) => watchlist.includes(coin.id));
      setCoins(filtered);
    } catch (error) {
      console.error("Failed to fetch coins:", error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [watchlist]);

  const toggleWatchlist = (id) => {
    let updated = [...watchlist];
    if (updated.includes(id)) {
      updated = updated.filter((coinId) => coinId !== id);
    } else {
      updated.push(id);
    }
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  return (
    <div className="watchlist-container">
      <Header />
      <h2>Your Watchlist</h2>
      {coins.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No coins in watchlist.</p>
      ) : (
        <CoinList
          coins={coins}
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist}
        />
      )}
    </div>
  );
}

export default Watchlist;
