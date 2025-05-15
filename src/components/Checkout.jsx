import React, { useState, useEffect } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import Swal from 'sweetalert2';
import { useCart } from '../context/CartContext'; 
import { useNavigate } from 'react-router-dom';

/*
function Checkout() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar la compra
    alert(`Purchase completed for ${name}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Complete Purchase
        </button>
      </form>
    </div>
  );
}*/

function Checkout() {
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState(null);
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    setUserData(formData);
    setSubmitted(true);

    // 1️⃣ Generar número de pedido y guardar en localStorage
    const orderId = `ORD-${Date.now()}`;
    const orderData = {
      id: orderId,
      ...formData,
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...existingOrders, orderData]));

    // 2️⃣ Mostrar alerta y redirigir
    Swal.fire({
      title: '¡Gracias por tu compra!',
      html: `
        <p><strong>Pedido #${orderId}</strong></p>
        <p>A nombre de <b>${formData.name}</b>, será enviado a <i>${formData.address}</i>.</p>
      `,
      icon: 'success',
      confirmButtonText: 'Volver al inicio',
    }).then(() => {
      clearCart();
      navigate('/home');
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Finaliza tu compra
        </h1>

        {!submitted ? (
          <CheckoutForm onSubmit={handleFormSubmit} />
        ) : (
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 text-center space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">¡Gracias por tu compra!</h2>
            <p className="text-gray-700">
              Pedido a nombre de <span className="font-bold">{userData.name}</span>.
            </p>
            <p className="text-gray-500">
              Será enviado a: <span className="italic">{userData.address}</span>.
            </p>
            <p className="text-sm text-gray-400">
              Método de pago: {userData.paymentMethod === 'credit-card' ? 'Tarjeta de crédito' : 'PayPal'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Checkout;