import React, { useState } from 'react';

export default function LogoCard() {
  // Estado para manejar filtro hover (drop-shadow)
  const [filter, setFilter] = useState('none');
  const [isReactLogo, setIsReactLogo] = useState(false); // Simula si el logo tiene clase react

  // Maneja hover con diferentes drop-shadow según el tipo de logo
  const handleMouseEnter = () => {
    if (isReactLogo) {
      setFilter('drop-shadow(0 0 2em #61dafbaa)');
    } else {
      setFilter('drop-shadow(0 0 2em #646cffaa)');
    }
  };

  const handleMouseLeave = () => {
    setFilter('none');
  };

  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
      }}
      id="root"
    >
      <h1
        style={{
          fontSize: '1.875rem', // 3xl approx.
          fontWeight: '700',
          marginBottom: '1.5rem',
        }}
      >
        Mi Logo Animado
      </h1>

      <button
        onClick={() => setIsReactLogo(!isReactLogo)}
        style={{
          marginBottom: '1.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#2563eb', // azul
          color: 'white',
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 200ms',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1e40af')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2563eb')}
      >
        Toggle React Logo
      </button>

      <a
        href="#"
        aria-label="Logo link"
        style={{
          display: 'inline-block',
          cursor: 'pointer',
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            height: '6em',
            padding: '1.5em',
            transition: 'filter 300ms',
            willChange: 'filter',
            filter: filter,
            display: 'block',
            margin: '0 auto',
          }}
        />
      </a>

      <div
        style={{
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginTop: '2.5rem',
        }}
        className="content__card"
      >
        <p
          style={{
            color: '#888888',
            fontSize: '1rem',
            lineHeight: 1.5,
            margin: 0,
          }}
          className="footer__note"
        >
          Aquí se incluye el texto con estilo gris medio (equivale a #888).
        </p>
      </div>
    </div>
  );
}
