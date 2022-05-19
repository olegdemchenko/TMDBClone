import React from 'react';

function Header() {
  return (
    <header>
      <img src="../assets/img/logo.png" alt="logo" />
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
