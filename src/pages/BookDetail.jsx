import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books.json';

function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p className="p-8">Libro no encontrado</p>;

  return (
    <div className="p-8 flex flex-col md:flex-row gap-8">
      <img src={book.image} alt={book.title} className="w-full md:w-1/3 rounded-xl shadow-lg" />
      <div>
        <h2 className="text-4xl font-bold text-blue-800 mb-2">{book.title}</h2>
        <p className="text-lg text-gray-600 mb-2">Autor: {book.author}</p>
        <p className="text-gray-800 mb-4">{book.description}</p>
        <p className="text-2xl text-green-600 font-semibold">€{book.price}</p>
      </div>
    </div>
  );
}

export default BookDetail;
