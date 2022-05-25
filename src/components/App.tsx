import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';

function App() {
  return (
    <div style={{ height: '2000px' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
