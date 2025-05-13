// src/components/SearchBar.jsx
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Llamamos a la función de búsqueda pasada como prop
  };

  return (
    <div className="flex items-center space-x-2 p-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for books..."
        className="p-2 w-full border border-gray-300 rounded-lg"
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Search</button>
    </div>
  );
}

export default SearchBar;
