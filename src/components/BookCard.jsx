// src/components/BookCard.jsx
import React from 'react';

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{book.title}</h2>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="mt-2 text-xl font-bold text-gray-900">${book.price}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add to Cart</button>
      </div>
    </div>
  );
}

export default BookCard;

