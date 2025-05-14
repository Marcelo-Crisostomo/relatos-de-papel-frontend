// src/components/CartItem.jsx
import React from 'react';

function CartItem({ item }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg my-2">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
        </div>
      </div>
      <p className="text-lg font-bold">${item.price * item.quantity}</p>
    </div>
  );
}

export default CartItem;
