// src/components/Cart.jsx
import React from 'react';
import CartItem from './CartItem';

function Cart({ items }) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4 text-xl font-bold">Total: ${total}</div>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
