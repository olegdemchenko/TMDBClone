import React from 'react';
import Logo from '../assets/img/logo.png';
import NavContent from './NavContent';

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav>
        <NavContent />
        <ul>
          <li>+</li>
          <li>Eng</li>
          <li>Login</li>
          <li>Join TMDB</li>
          <li>Search</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
