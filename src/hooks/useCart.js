// src/hooks/useCart.js
import { useState } from 'react';

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prev) => [...prev, book]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return { cartItems, addToCart, removeFromCart, clearCart };
}
