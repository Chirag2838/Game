import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Cricket } from './context/cricketContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Cricket>
    <App />
  </Cricket>
);