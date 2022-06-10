import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './styles/styles.scss';

const root = createRoot(document.getElementById('root') as HTMLBodyElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
