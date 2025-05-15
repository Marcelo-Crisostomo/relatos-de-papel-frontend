import React, { useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import Swal from 'sweetalert2';

function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('🛒 Carrito actualizado:', cartItems);
  }, [cartItems]);
  const increaseQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const decreaseQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const handleRemoveItem = (id) => {
  Swal.fire({
    title: '¿Eliminar libro?',
    text: '¿Deseas quitar este libro del carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
  }).then((result) => {
    if (result.isConfirmed) {
      removeFromCart(Number(id)); // ✅ Desde el contexto
      Swal.fire('Eliminado', 'El libro fue quitado del carrito.', 'success');
    }
  });
};

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Vaciar carrito?',
      text: 'Esta acción eliminará todos los libros del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(); // ✅ desde el contexto
        Swal.fire('Carrito vaciado', 'Todos los libros fueron eliminados.', 'success');
        navigate('/home');
      }
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Carrito de compras</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-10 flex flex-col items-center justify-center text-gray-600">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-20 h-20 mb-4 text-blue-300"
            fill="currentColor"
            >
            <path d="M20 54a4 4 0 100 8 4 4 0 000-8zm24 0a4 4 0 100 8 4 4 0 000-8zM9 4a1 1 0 000 2h4.15l4.84 30.62a5 5 0 004.94 4.38h26.72a5 5 0 004.95-4.14l3.67-20A1 1 0 0061 16H16.42l-.63-4H55a1 1 0 000-2H14.72a1 1 0 00-.98.8l-.67 4a1 1 0 00.01.2L15.1 16h.02l.52 3.22L19 44.38a7 7 0 006.91 6.12H53a1 1 0 000-2H25.91a5 5 0 01-4.94-4.38l-4.84-30.6A1 1 0 0015 14H9z" />
            </svg>
            <p className="text-md font-medium">Tu carrito está vacío</p>
            <p className="text-sm text-gray-400 mt-1 mb-4">
            Cuando agregues libros, los verás aquí
            </p>
            <a
            href="/home"
            className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
            >
            Ir al catálogo
            </a>
        </div>
        ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={handleRemoveItem}
            />
          ))}

          <div className="text-right border-t pt-4">
            <p className="text-xl font-bold text-gray-800">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              * No incluye impuestos ni envío
            </p>

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