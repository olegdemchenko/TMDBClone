import React from 'react';
import AddMovie from './AddMovie';
import SelectLanguage from './SelectLanguage';
import Login from './Login';

function Options() {
  return (
    <div>
      <AddMovie />
      <SelectLanguage />
      <Login />
      <li>Join TMDB</li>
      <li>Search</li>
    </div>
  );
}

export default Options;
