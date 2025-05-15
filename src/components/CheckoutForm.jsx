// src/components/CheckoutForm.jsx
import React, { useState } from 'react';

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
}

export default CheckoutForm;
