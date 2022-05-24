import React from 'react';
import Header from './header/Header';
import Footer from './Footer';
import Search from './Search';

function MainPage() {
  return (
    <div style={{ height: '2000px' }}>
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default MainPage;
