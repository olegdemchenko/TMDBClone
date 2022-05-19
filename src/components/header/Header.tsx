import React from 'react';
import Logo from '../../assets/img/logo.png';
import Menu from './Menu';
import Options from './Options';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={Logo} alt="logo" />
        <nav>
          <Menu />
          <Options />
        </nav>
      </div>
    </header>
  );
}

export default Header;
