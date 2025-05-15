import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books.json';

import { useCart } from '../context/CartContext';

function BookDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const book = booksData.find((book) => book.id === id);

  if (!book) return <p>No encontrado</p>;

  return (
    <button onClick={() => addToCart(book)}>Agregar al carrito</button>
  );
}

export default BookDetail;