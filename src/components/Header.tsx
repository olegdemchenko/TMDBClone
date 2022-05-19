import React from 'react';
import Logo from '../assets/img/logo.png';
import Menu from './Menu';
import Options from './Options';

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav>
        <Menu />
        <Options />
      </nav>
    </header>
  );
}

export default Header;
