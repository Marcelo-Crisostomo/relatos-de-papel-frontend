// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget';
import CartPanel from '../context/CartPanel';
/*
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
}*/

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md relative z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight hover:text-blue-200 transition">
          Relatos de Papel
        </Link>

        <nav className="flex items-center space-x-6 text-sm md:text-base font-medium">
          <Link to="/home" className="hover:text-blue-200 transition">Home</Link>
          {/* <Link to="/checkout" className="hover:text-blue-200 transition">Checkout</Link> */}
          <CartWidget />
        </nav>
      </div>
      <CartPanel />
    </header>
  );
}

export default Header;
