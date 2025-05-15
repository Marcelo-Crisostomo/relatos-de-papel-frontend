import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function MiniCart() {
  const { cartItems } = useCart();
  const location = useLocation();
  const [hovering, setHovering] = useState(false);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (location.pathname === '/checkout') return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg cursor-pointer">
        <ShoppingCart className="w-5 h-5" />
        {totalQuantity > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            {totalQuantity}
          </span>
        )}
      </div>

      <AnimatePresence>
        {hovering && totalQuantity > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mt-2 w-72 bg-white shadow-xl rounded-xl border border-blue-100 p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-semibold text-blue-700">Mi carrito</span>
              <span className="text-xs text-gray-500">{totalQuantity} artículo(s)</span>
            </div>

            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-gray-700">Total:</p>
              <p className="text-lg font-bold text-blue-800">${total.toFixed(2)}</p>
            </div>

            <Link
              to="/cart"
              className="block mt-4 w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg transition font-medium"
            >
              Ir al carrito
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MiniCart;
