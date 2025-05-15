// src/components/CheckoutForm.jsx
import React, { useState } from 'react';
/*
function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit-card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  // Pasamos los datos al componente padre cuando el formulario se envía
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block">Payment Method</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Complete Purchase
      </button>
    </form>
  );
}*/
function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit-card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">Detalles de la compra</h2>

      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Dirección */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Dirección
        </label>
        <input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Método de pago */}
      <div>
        <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
          Método de pago
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="credit-card">Tarjeta de crédito</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition"
      >
        Confirmar compra
      </button>
    </form>
  );
}


export default CheckoutForm;
