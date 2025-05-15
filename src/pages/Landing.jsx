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
    <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-white text-center px-6">
      {/* Título principal */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 tracking-tight drop-shadow-sm">
        Relatos de Papel
      </h1>

      {/* Subtítulo */}
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
        Tu librería digital favorita, donde las historias cobran vida.
      </p>

      {/* Botón */}
      <Link
        to="/home"
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition shadow"
      >
        Explorar libros
      </Link>
    </section>
  );
}

export default Landing;
