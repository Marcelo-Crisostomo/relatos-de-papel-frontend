import React from 'react';
import { useParams } from 'react-router-dom';

import books from '../data/books';

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(b => b.id.toString() === id);
  if (!book) return <p>Libro no encontrado.</p>;
  return (
    <div className='book-detail'>
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Precio: ${book.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default BookDetail;
