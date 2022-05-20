import React from 'react';
import DropdownMenu from './DropdownMenu';

function Menu() {
  const menu = {
    movies: ['popular', 'now playing', 'top rated', 'upcoming'],
    'tv shows': ['popular', 'airing today', 'on tv', 'top rated'],
    people: ['popular people'],
    more: ['discussions', 'leaderboard', 'support', 'api'],
  };

  return (
    <>
      {Object.entries(menu).map(([name, list]) => <DropdownMenu name={name} list={list} />)}
    </>
  );
}

export default Menu;
