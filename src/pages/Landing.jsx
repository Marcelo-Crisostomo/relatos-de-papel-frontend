import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
/*
function Landing() {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-100 to-white text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-blue-700">Relatos de Papel</h1>
      <p className="text-xl mb-6 text-gray-600">Tu librería digital favorita</p>
      <Link
        to="/home"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
      >
        Explorar libros
      </Link>
    </section>
  );
}

export default Landing;*/


function Landing() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-white text-center px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-full max-h-[300px] z-0 opacity-50 pointer-events-none">
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M0,0 C300,150 500,-100 800,100 L800,0 L0,0 Z" fill="url(#bg-gradient)" />
        </svg>
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 tracking-tight drop-shadow-sm">
          Relatos de Papel
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
          Tu librería digital favorita, donde las historias cobran vida.
        </p>
        <Link
          to="/home"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition shadow"
        >
          Explorar libros
        </Link>
      </div>
    </section>
  );
}

export default Landing;
