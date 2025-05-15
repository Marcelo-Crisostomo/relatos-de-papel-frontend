import React from 'react';
import { useCart } from '../context/CartContext';

function CartPanel() {
  const { isCartOpen, cartItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="absolute top-full right-6 mt-3 w-96 bg-white text-gray-800 shadow-xl rounded-xl p-4 z-50 border border-gray-200">
      <h2 className="text-lg font-bold mb-3 border-b pb-2">Carrito de compras</h2>
      {cartItems.length === 0 ? (
            <div className="text-center py-8 flex flex-col items-center justify-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
                />
                </svg>
                <p className="text-gray-500 text-sm">Tu carrito está vacío.</p>
                <p className="text-xs text-gray-400 mt-1">Agrega libros para verlos aquí 🛍️</p>
            </div>
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