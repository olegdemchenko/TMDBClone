import React from 'react';
import Logo from '../assets/img/logo.png';
import NavContent from './NavContent';
import Options from './Options';

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav>
        <NavContent />
        <Options />
      </nav>
    </header>
  );
}

export default Header;
