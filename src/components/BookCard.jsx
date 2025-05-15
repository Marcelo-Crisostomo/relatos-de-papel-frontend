import React, { useState } from 'react';
import Swal from 'sweetalert2';
import BookModal from './BookModal';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { toast } from 'react-toastify';

import '../styles/components/_bookcard.scss';

const BookCard = ({ book }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { cart, addToCart } = useCart();

  const handleAddToCart = async () => {
    const alreadyInCart = cart.some((item) => item.id === book.id);

    if (alreadyInCart) {
        const result = await Swal.fire({
          title: `"${book.title}" ya está en el carrito`,
          text: '¿Deseas añadirlo nuevamente?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, añadir',
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        });
  
        if (!result.isConfirmed) return;
      }

    addToCart(book);
    toast.success(`📚 "${book.title}" añadido al carrito`, {
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      position: 'top-right',
      theme: 'colored',
    });
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />

      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p className="book-price">${book.price.toFixed(2)}</p>

        <div className="buttons-container">
          <button className="btn-details" onClick={() => setModalOpen(true)}>
            Ver detalles
          </button>

          <button className="btn-cart" onClick={handleAddToCart}>
            <ShoppingCart size={16} />
            <span className="tooltip">Añadir al carrito</span>
          </button>
        </div>
      </div>

      {modalOpen && (
        <BookModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          book={book}
        />
      )}
    </div>
  );
};

export default BookCard;