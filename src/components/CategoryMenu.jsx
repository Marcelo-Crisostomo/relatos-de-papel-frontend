// src/components/CategoryMenu.jsx
import React from 'react';

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
}

export default CategoryMenu;
