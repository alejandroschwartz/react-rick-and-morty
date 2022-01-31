import React from 'react';
import '../styles/Search.scss'

export default function Search({ darkMode, search, searchInput, handleSearch }) {
  return (
    <div className="Search">
      <input
        className={darkMode ? "Search__inputLight" : "Search__inputDark"}
        type="text"
        value={search}
        ref={searchInput}
        placeholder="Buscar..."
        onChange={handleSearch}
      />
    </div>
  );
}
