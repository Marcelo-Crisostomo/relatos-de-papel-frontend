import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { useCart } from '../hooks/useCart';
import { toast } from 'react-toastify';
import '../styles/components/_bookcard.scss';
import { X } from 'lucide-react';

const BookModal = ({ isOpen, onClose, book }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
  
    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
          addToCart(book);
        }
      
        onClose(); 
      
        Swal.fire({
          icon: 'success',
          title: '¡Agregado al carrito!',
          text: `${quantity} ejemplar(es) de "${book.title}" han sido añadidos al carrito.`,
          confirmButtonColor: '#3085d6',
          background: '#fefefe',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: true,
        });
    };
  
    if (!book) return null;
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Detalle del Libro"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="modal-close-button" onClick={onClose}>
          <X size={20} />
        </button>
  
        <div className="modal-header">
          <h2>{book.title}</h2>
          <p>Autor: <span>{book.author}</span></p>
        </div>
  
        <div className="modal-body">
          <img src={book.image} alt={book.title} className="modal-image" />
          <div className="modal-description">
            <h3>Sinopsis:</h3>
            <p>{book.synopsis}</p>
            <p><strong>Precio:</strong> ${book.price.toFixed(2)}</p>
          </div>
        </div>
  
        <div className="modal-footer">
          <div className="quantity-selector">
            <label>Cantidad:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
          </div>
          <button className="btn-add" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </Modal>
    );
  };
  
  export default BookModal;