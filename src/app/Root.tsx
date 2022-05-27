import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';

function Root() {
  return (
    <div style={{ height: '2000px' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
