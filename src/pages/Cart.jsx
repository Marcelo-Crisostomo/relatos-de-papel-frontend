import React from 'react';
import Swal from 'sweetalert2';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/pages/_cart.scss';



const Cart = () => {
  const {
    cart,
    groupedCart,
    increaseQuantity, decreaseQuantity,
    addToCart,
    removeFromCart,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  //const totalItems = cart.length;

  const totalItems = groupedCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = groupedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  const handleClear = () => {
    Swal.fire({
      title: '¿Vaciar carrito?',
      text: 'Esta acción eliminará todos los libros del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {clearCart();
        navigate('/home');};
    });
  };

  const handleCheckout = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Pedido confirmado!',
      text: 'Gracias por tu compra.',
    });
    clearCart();
    navigate('/checkout');
  };

  return (
    <div className="checkout-container">
      <h2>Resumen del carrito</h2>

      {groupedCart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="checkout-actions">
            <button className="clear-cart-btn" onClick={handleClear}>
              🗑️ Vaciar carrito
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              ✅ Confirmar pedido
            </button>
          </div>

          <p className="checkout-subtitle">
            Total de libros seleccionados: <strong>{totalItems}</strong>
          </p>

          <ul className="checkout-list">
            {groupedCart.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={item.image} alt={item.title} />
                <div className="book-info">
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                  <p>Precio unitario: <strong>${item.price.toFixed(2)}</strong></p>

                  <div className="quantity-control">
                    <button onClick={() => removeFromCart(item.id)}><Minus size={16} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}><Plus size={16} /></button>
                  </div>

                  <p>Subtotal: <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => {
                    for (let i = 0; i < item.quantity; i++) {
                      removeFromCart(item.id);
                    }
                  }}
                >
                  <Trash2 color="red" />
                </button>
              </li>
            ))}
          </ul>

          <div className="checkout-total">
            <h3>Total a pagar: <span>${totalPrice.toFixed(2)}</span></h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;