// src/components/CategoryMenu.jsx
import React from 'react';
/*
function CategoryMenu({ categories, onCategorySelect }) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="font-semibold text-lg mb-2">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="py-1">
            <button
              onClick={() => onCategorySelect(category)}
              className="text-blue-500 hover:text-blue-700"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}*/

function CategoryMenu({ categories, onCategorySelect }) {
  return (
    <aside className="bg-white shadow rounded-lg p-6 w-full sm:max-w-xs">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Categorías</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategorySelect(category)}
              className="w-full text-left text-blue-600 hover:text-blue-800 hover:underline transition font-medium"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryMenu;
