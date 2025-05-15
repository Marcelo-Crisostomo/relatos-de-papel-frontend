import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import useCountdownRedirect from '../hooks/useCountdownRedirect';
import '../styles/pages/_checkout.scss';


const Checkout = () => {
  const navigate = useNavigate();
  const countdown = useCountdownRedirect(15, '/home');
  
  return (
    <div className="checkout-wrapper">
      <div className="checkout-card">
        <CheckCircle size={64} color="#2ecc71" />
        <h2>¡Pedido realizado con éxito!</h2>
        <p>Gracias por tu compra. Recibirás un correo con los detalles.</p>
        <p>Serás redirigido al inicio en <strong>{countdown}</strong> segundos...</p>

        <button className="btn-back-home" onClick={() => navigate('/home')}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};


export default Checkout;

