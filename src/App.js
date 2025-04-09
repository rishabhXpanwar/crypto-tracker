// src/App.js
import React, { useState } from 'react';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <div className="top-nav">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('watchlist')}>Watchlist</button>
      </div>

      {page === 'home' ? <Home /> : <Watchlist />}
    </div>
  );
}

export default App;
