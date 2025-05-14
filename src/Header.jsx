// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">📚 Relatos de Papel</Link>
        <div className="space-x-4">
          <Link to="/home" className="hover:underline">Inicio</Link>
          <Link to="/checkout" className="hover:underline">Carrito</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
