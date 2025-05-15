import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, setCartItems } = useCart();

  const handleClearCart = () => {
    setCartItems([]); // Limpia el carrito
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Carrito de compras</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-6">
          {/* Lista de ítems */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg"
            >
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  Precio unitario: ${item.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">
                  Cantidad: {item.quantity}
                </p>
              </div>
              <p className="text-lg font-bold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          {/* Resumen */}
          <div className="text-right border-t pt-4">
            <p className="text-xl font-bold text-gray-800">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mb-2">* No incluye impuestos ni envío</p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 mt-4">
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
              >
                Vaciar carrito
              </button>

              <Link
                to="/checkout"
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition text-center"
              >
                Proceder a la compra
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

/* function Cart() {
  return (
    <div className="p-6 text-center text-2xl text-blue-800 font-bold">
      Página del carrito ✅
    </div>
  );
}

export default Cart; */