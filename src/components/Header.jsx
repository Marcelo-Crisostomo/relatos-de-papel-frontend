// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Relatos de Papel</Link>
        <div className="space-x-6">
          <Link to="/home" className="hover:text-gray-200">Home</Link>
          <Link to="/checkout" className="hover:text-gray-200">Checkout</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
