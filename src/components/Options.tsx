import React from 'react';
import AddMovie from './AddMovie';
import SelectLanguage from './SelectLanguage';

function Options() {
  return (
    <div>
      <AddMovie />
      <SelectLanguage />
      <li>Login</li>
      <li>Join TMDB</li>
      <li>Search</li>
    </div>
  );
}

export default Options;
