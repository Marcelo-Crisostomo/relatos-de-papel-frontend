// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import booksData from '../data/books.json';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulación de llamada a API
    setTimeout(() => {
      setBooks(booksData);
    }, 500);
  }, []);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Catálogo de libros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
