// src/components/BookCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
/*
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

export default BookCard;*/

function BookCard({ book }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(book);
    toast.success(`"${book.title}" fue agregado al carrito 🛒`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg hover:scale-[1.02]">
      <Link to={`/book/${book.id}`}>
        <img
          src={book.image}
          alt={book.title}
          className="h-60 w-full object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
          <p className="text-sm text-gray-500">{book.author}</p>
          <p className="mt-2 text-xl font-bold text-gray-900">${book.price}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default BookCard;
