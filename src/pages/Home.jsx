import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import books from '../data/books.json'; 
import useBooks from '../hooks/useBooks';
import SearchBar from '../components/SearchBar';

/*
function Home() {
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

export default Home;*/


function Home() {
  const { books, loading } = useBooks();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (loading) return <p className="text-center text-gray-500">Cargando libros...</p>;

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-10 text-center">
          Catálogo de libros
        </h2>
        <SearchBar onSearch={setSearchQuery} />

        {filteredBooks.length > 0 ? (
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No se encontraron libros.</p>
        )}
      </div>
    </section>
  );
}

export default Home;
