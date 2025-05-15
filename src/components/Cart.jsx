// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

function Cart() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Mi carrito</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
              </div>
              <p className="text-lg font-bold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-bold text-gray-800">
              Total: ${total.toFixed(2)}
            </p>
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Ir al checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
