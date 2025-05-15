// src/components/Footer.jsx
import React from 'react';
/*
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="text-center">
        <p>© 2025 Relatos de Papel. All Rights Reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}*/
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.
        </p>
        <div className="space-x-6 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Política de Privacidad</a>
          <a href="#" className="hover:text-blue-400 transition">Términos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
