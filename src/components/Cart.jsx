// src/components/Cart.jsx

import React from 'react';
import useCart from '../hooks/useCart';
import CartItem from './CartItem';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Compra realizada con éxito. Gracias por tu compra.');
    clearCart();
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
          <p className="mt-4 text-lg font-semibold">Total: €{total.toFixed(2)}</p>
          <button
            onClick={handleCheckout}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
