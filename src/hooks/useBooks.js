import { useEffect, useState } from 'react';

function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/books.json')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar libros:', error);
        setLoading(false);
      });
  }, []);

  return { books, loading };
}

export default useBooks;