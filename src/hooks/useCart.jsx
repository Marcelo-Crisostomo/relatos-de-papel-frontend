import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext); // ← ahora usa el contexto global

  const addToCart = (book) => {
    setCart((prev) => [...prev, book]);
  };

  const removeFromCart = (bookId) => {
    setCart((prev) => {
      const index = prev.findIndex((b) => b.id === bookId);
      if (index !== -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      }
      return prev;
    });
  };

  const clearCart = () => setCart([]);

  const groupedCart = cart.reduce((acc, item) => {
    const existing = acc.find((b) => b.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    groupedCart,
  };
};