import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function Root() {
  return (
    <div className='d-flex min-vh-100 flex-column justify-content-between'>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
