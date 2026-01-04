// main.tsx - OVAKO TREBA DA IZGLEDA:
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';  // DODAJ VITIČASTE ZAGRADE!
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);