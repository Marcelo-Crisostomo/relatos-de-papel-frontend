// src/pages/BookDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { booksData } from '../data/books';  

function BookDetail() {
  const { id } = useParams();
  const book = booksData.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-6">
        <img src={book.image} alt={book.title} className="w-1/2 h-96 object-cover" />
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold">{book.title}</h1>
          <p className="text-lg text-gray-600">{book.author}</p>
          <p className="mt-4">{book.description}</p>
          <p className="mt-4 text-xl font-bold text-gray-900">${book.price}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;

