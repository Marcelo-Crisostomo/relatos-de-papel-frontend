import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

function Checkout() {
  const handleSubmit = (formData) => {
    alert('Compra realizada con éxito. Gracias ' + formData.name + '!');
  };

  return (
    <div className="p-8 bg-white max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Finalizar compra</h2>
      <CheckoutForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Checkout;
