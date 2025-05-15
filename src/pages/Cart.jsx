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
        <p className="text-gray-600">Tu carrito está vacío.</p>
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