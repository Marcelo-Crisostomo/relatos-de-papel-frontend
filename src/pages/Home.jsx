
import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import Navbar from '../components/Navbar';
import PageSizeSelector from '../components/PageSizeSelector';
import Paginator from '../components/Paginator';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../styles/pages/_home.scss';
import booksData from '../data/books';
import { useSearch } from '../context/SearchContext';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const { searchTerm } = useSearch()
  
  useEffect(() => {
    setBooks(booksData);
  }, []);


  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="home-container">
        <PageSizeSelector itemsPerPage={itemsPerPage} onChange={setItemsPerPage} />

        <div className="book-grid">
          {visibleBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <Paginator currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
      <ScrollToTopButton />
    </div>
    
  );
};

export default Home;
