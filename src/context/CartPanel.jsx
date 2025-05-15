import React from 'react';
import { useCart } from '../context/CartContext';

function CartPanel() {
  const { isCartOpen, cartItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="absolute top-full right-6 mt-2 w-80 bg-white text-black shadow-lg rounded-lg p-4 z-50">
      <h2 className="text-lg font-bold mb-2">Carrito</h2>
      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
          {cartItems.map((item) => (
            <li key={item.id} className="py-2 flex justify-between">
              <span>{item.title}</span>
              <span className="text-sm text-gray-600">x{item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPanel;