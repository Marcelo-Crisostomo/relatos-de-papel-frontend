import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './context/SearchContext';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchProvider><App /></SearchProvider>);