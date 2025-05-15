// src/components/CartItem.jsx
import React from 'react';
/*
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
}*/
function CartItem({ item }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition my-3">
      {/* Imagen y detalles */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
          <p className="text-sm text-gray-500">Precio unitario: ${item.price}</p>
        </div>
      </div>

      {/* Precio total */}
      <div className="text-right">
        <p className="text-lg font-bold text-blue-600">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
