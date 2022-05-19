import React from 'react';
import Logo from '../assets/img/logo.png';

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav>
        <ul>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
        </ul>
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
