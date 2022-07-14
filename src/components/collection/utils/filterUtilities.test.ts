import _ from 'lodash';
import {
  MovieListItem,
} from '../../../app/APIInfo';
import { SortAlg } from '../../filter/constants';
import filter from './filterUtilities';
import {
  TestMovie,
  getRandomReleaseDate,
  sortItems,
} from './testUtilities';

const movieList:TestMovie[] = Array(20).fill({}).map(() => ({
  poster_path: '/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg',
  adult: false,
  overview: 'The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.',
  genre_ids: [
    28,
    53,
  ],
  original_title: 'Jason Bourne',
  original_language: 'en',
  backdrop_path: '/AoT2YrJUJlg5vKE3iMOLvHlTd3m.jpg',
  vote_count: 649,
  video: false,
  id: Math.random(),
  popularity: Math.random() * 100,
  vote_average: _.random(9.999),
  title: _.uniqueId(),
  release_date: getRandomReleaseDate(),
}));

test.each([
  [SortAlg.popularityAsc, [...movieList].sort(sortItems('popularity', 'asc'))],
  [SortAlg.popularityDesc, [...movieList].sort(sortItems('popularity', 'desc'))],
  [SortAlg.ratingAsc, [...movieList].sort(sortItems('vote_average', 'asc'))],
  [SortAlg.ratingDesc, [...movieList].sort(sortItems('vote_average', 'desc'))],
  [SortAlg.releaseDateAsc, [...movieList].sort(sortItems('release_date', 'asc'))],
  [SortAlg.releaseDateDesc, [...movieList].sort(sortItems('release_date', 'desc'))],
  [SortAlg.titleAZ, [...movieList].sort(sortItems('title', 'asc'))],
  [SortAlg.titleZA, [...movieList].sort(sortItems('title', 'desc'))],
])('test sorting alg:%s', (sortAlg: SortAlg, presortedMovies: TestMovie[]) => {
  expect(filter({ sortAlg }, (movieList as unknown) as MovieListItem[])).toEqual(presortedMovies);
});
