import React, { useState } from 'react';
import useCart from '../hooks/useCart';

function Checkout() {
  const { clearCart, cartItems } = useCart();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'El nombre es requerido.';
    if (!address.trim()) newErrors.address = 'La dirección es requerida.';
    if (cartItems.length === 0) newErrors.cart = 'El carrito está vacío.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Compra realizada con éxito para ${name}`);
      clearCart();
      setName('');
      setAddress('');
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label className="block font-medium">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-2 border rounded-lg ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Dirección</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`w-full p-2 border rounded-lg ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.address && (
            <p className="text-red-600 text-sm mt-1">{errors.address}</p>
          )}
        </div>
        {errors.cart && (
          <p className="text-red-600 text-sm mt-1 font-semibold">{errors.cart}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Completar compra
        </button>
      </form>
    </div>
  );
}

export default Checkout;
