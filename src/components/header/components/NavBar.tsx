import React from 'react';
import _ from 'lodash';
import DropdownMenu from './DropdownMenu';
import {
  moviesPathNames,
  tvPathsNames,
  peoplePathNames,
} from '../../../routes';

const dropdownPaths = {
  movies: {
    popular: moviesPathNames.popularMovies,
    'now playing': moviesPathNames.nowPlayingMovies,
    'top rated': moviesPathNames.topRatedMovies,
    upcoming: moviesPathNames.upcomingMovies,
  },
  'tv shows': {
    popular: tvPathsNames.popularShows,
    'airing today': tvPathsNames.airingTodayShows,
    'on tv': tvPathsNames.onTVShows,
    'top rated': tvPathsNames.topRatedShows,
  },
  people: {
    'popular people': peoplePathNames.popularPeople,
  },
} as const;

function Menu() {
  return (
    <div className='d-flex'>
      {Object.keys(dropdownPaths).map((name: keyof typeof dropdownPaths) => (
        <DropdownMenu
          key={_.uniqueId()}
          name={name}
          paths={dropdownPaths[name]}
        />
      ))}
    </div>
  );
}

export default Menu;
