import React from 'react';
import AddMovie from './AddMovie';
import SelectLanguage from './SelectLanguage';
import Login from './Login';
import Join from './Join';
import Search from './Search';

function Options() {
  return (
    <div>
      <AddMovie />
      <SelectLanguage />
      <Login />
      <Join />
      <Search />
    </div>
  );
}

export default Options;
