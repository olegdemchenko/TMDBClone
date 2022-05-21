import React from 'react';
import AddMovie from './AddMovie';
import SelectLanguage from './SelectLanguage';
import Login from './Login';
import Join from './Join';

function Options() {
  return (
    <div>
      <AddMovie />
      <SelectLanguage />
      <Login />
      <Join />
    </div>
  );
}

export default Options;
