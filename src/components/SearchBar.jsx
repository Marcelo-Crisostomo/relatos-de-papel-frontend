import React from 'react';

const SearchBar = ({ setSearch }) => (
  <input 
    type="text" 
    placeholder="Buscar por título..." 
    onChange={(e) => setSearch(e.target.value)}
  />
);

export default SearchBar;
