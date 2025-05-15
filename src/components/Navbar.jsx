import React, { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Search, XCircle } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useSearch } from '../context/SearchContext';

import '../styles/components/_navbar.scss';

const Navbar = ({ onSearch }) => {
    const { searchTerm, setSearchTerm } = useSearch();
    const { cart } = useCart();
    //const [searchTerm, setSearchTerm] = useState('');
    const totalItems = cart.length;
    const location = useLocation();
    const handleSearch = (e) => setSearchTerm(e.target.value);
    const clearSearch = () => setSearchTerm('');
    
    useEffect(() => {
        if (!location.pathname.includes('/home')) {
          setSearchTerm('');
        }
      }, [location.pathname]);

    return (
      <nav className="navbar">
        <div className="navbar__left">
          <Link to="/home" className="navbar__logo">
            📚 <strong>Relatos de Papel - BookStore</strong>
          </Link>
        </div>
  
        <div className="navbar__center">
          <div className="navbar__search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Buscar libros..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm && (
              <button className="navbar__clear-btn" onClick={clearSearch}>
                <XCircle size={16} />
              </button>
            )}
          </div>
        </div>
  
        <div className="navbar__right">
          <Link to="/home" className="navbar__link">
            <Home size={18} />
            <span>Inicio</span>
          </Link>
          <Link to="/cart" className="navbar__link navbar__cart">
            <ShoppingCart size={18} />
            <span>Carrito</span>
            {totalItems > 0 && <span className="navbar__badge">{totalItems}</span>}
          </Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;