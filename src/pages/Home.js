import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CoinList from '../components/CoinList';
import './Home.css';

function Home() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [showWatchlist, setShowWatchlist] = useState(false);

  const fetchCoins = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      const data = await res.json();
      setCoins(data);
      setFilteredCoins(data);
    } catch (error) {
      console.error("Failed to fetch coins:", error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    const results = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(q) ||
        coin.symbol.toLowerCase().includes(q)
    );
    setFilteredCoins(results);
  };

  const toggleWatchlist = (coinId) => {
    let updated;
    if (watchlist.includes(coinId)) {
      updated = watchlist.filter(id => id !== coinId);
    } else {
      updated = [...watchlist, coinId];
    }
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  const coinsToDisplay = showWatchlist
    ? coins.filter(coin => watchlist.includes(coin.id))
    : filteredCoins;

  return (
    <div className="home-container">
      <Header />
      <div className="toggle-buttons">
        <button onClick={() => setShowWatchlist(false)}>All Coins</button>
        <button onClick={() => setShowWatchlist(true)}>Watchlist</button>
      </div>
      <SearchBar onSearch={handleSearch} />
      <CoinList 
        coins={coinsToDisplay} 
        watchlist={watchlist} 
        toggleWatchlist={toggleWatchlist} 
      />
    </div>
  );
}

export default Home;
