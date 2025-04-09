// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ currentPage, setPage }) => {
  return (
    <header className="header">
      <h1>Crypto Tracker 💹</h1>
      <div className="nav-buttons">
        <button
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => setPage('home')}
        >
          Home
        </button>
        <button
          className={currentPage === 'watchlist' ? 'active' : ''}
          onClick={() => setPage('watchlist')}
        >
          Watchlist ⭐
        </button>
      </div>
    </header>
  );
};

export default Header;
