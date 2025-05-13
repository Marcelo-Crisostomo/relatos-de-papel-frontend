// src/components/Footer.jsx
import React from 'react';

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
}

export default Footer;
