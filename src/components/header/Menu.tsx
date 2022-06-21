import React from 'react';
import _ from 'lodash';
import DropdownMenu from './DropdownMenu';

function Menu() {
  const menu = {
    movie: ['popular', 'now playing', 'top rated', 'upcoming'],
    tv: ['popular', 'airing today', 'on tv', 'top rated'],
    person: ['popular people'],
    more: ['discussions', 'leaderboard', 'support', 'api'],
  };

  const dropdownNames = {
    movie: 'movies',
    tv: 'tv shows',
    person: 'people',
    more: 'more',
  };

  return (
    <div className="d-flex">
      {Object.entries(menu).map(([path, list]) => (
        <DropdownMenu
          key={_.uniqueId()}
          path={path}
          name={dropdownNames[path as keyof typeof dropdownNames]}
          list={list}
        />
      ))}
    </div>
  );
}

export default Menu;
