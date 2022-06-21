import React from 'react';
import _ from 'lodash';
import DropdownMenu from './DropdownMenu';

function Menu() {
  const menu = {
    movies: ['popular', 'now playing', 'top rated', 'upcoming'],
    'tv shows': ['popular', 'airing today', 'on tv', 'top rated'],
    people: ['popular people'],
    more: ['discussions', 'leaderboard', 'support', 'api'],
  };
  return (
    <div className="d-flex">
      {Object.entries(menu).map(([name, list]) => (
        <DropdownMenu key={_.uniqueId()} name={name} list={list} />
      ))}
    </div>
  );
}

export default Menu;
