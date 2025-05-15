// src/pages/Checkout.jsx
import React, { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';

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

  const handleFormSubmit = (formData) => {
    setUserData(formData);
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Finaliza tu compra</h1>

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
            <p className="text-sm text-gray-400">Método de pago: {userData.paymentMethod === 'credit-card' ? 'Tarjeta de crédito' : 'PayPal'}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Checkout;
