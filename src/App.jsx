import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartProvider';

import { useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import './styles/main.scss';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
    
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };
  return (
    <CartProvider>
      <Router>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={9000}
          hideProgressBar={false}
          pauseOnFocusLoss
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </Router>
    </CartProvider>
  );
};

export default App;