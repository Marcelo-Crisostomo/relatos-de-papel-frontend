import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Agregar un ítem al carrito
  const addToCart = (book) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === book.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  };

  // ✅ Eliminar un ítem específico del carrito
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // ✅ Actualizar la cantidad de un ítem
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // ✅ Vaciar carrito completo
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ✅ Hook personalizado para usar el carrito
export function useCart() {
  return useContext(CartContext);
}