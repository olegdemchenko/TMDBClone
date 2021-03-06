import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Root() {
  return (
    <div className="d-flex min-vh-100 flex-column justify-content-between">
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
