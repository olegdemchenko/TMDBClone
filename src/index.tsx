import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './translations';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/normalize.css';

const root = createRoot(document.getElementById('root') as HTMLBodyElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
