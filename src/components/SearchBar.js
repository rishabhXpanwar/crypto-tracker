import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    onSearch(query); // Call parent handler
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search coins..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
