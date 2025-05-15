import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; 

function CartWidget() {
  const { cartItems, toggleCart } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();
  const handleClick = () => {
  navigate('/cart'); 
};
  return (
    <button
      onClick={handleClick}
      className="relative flex items-center hover:text-blue-300 transition"
      title="Ver carrito"
    >
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-2 py-0.5 rounded-full">
          {totalItems}
        </span>
      )}
    </button>
  );
}

export default CartWidget;