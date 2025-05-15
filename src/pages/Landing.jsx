import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCountdownRedirect from '../hooks/useCountdownRedirect';
import '../styles/pages/_landing.scss';

const Landing = () => {
  const navigate = useNavigate();
  const countdown = useCountdownRedirect(5, '/home');

  const handleGoNow = () => navigate('/home');

  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1 className="landing-title">📚 Relatos de Papel</h1>
        <p className="landing-subtitle">Explora historias que cobran vida...</p>

        <div className="loader"></div>

        <p className="redirect-message">
          Serás redirigido en <strong>{countdown}</strong> segundo{countdown !== 1 && 's'}...
        </p>

        <button className="go-now-button" onClick={handleGoNow}>
          Ir ahora
        </button>
      </div>
    </div>
  );
};

export default Landing;