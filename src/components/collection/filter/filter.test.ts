import _ from 'lodash';
import {
  SortAlg,
  releasesStartDate,
} from '../../filter/constants';
import filter from '.';
import {
  TestMovie,
  getSubsequentStringDate,
  sortItems,
  filterByReleaseDate,
} from './helpers';
import { stringToDate } from '../../../common/utils';

const testItemsAmount = 20;

const movieList: TestMovie[] = Array(testItemsAmount).fill({}).map((empty, index) => ({
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
  release_date: getSubsequentStringDate(index),
}));

const testReleaseDates = {
  beforeStart: {
    from: new Date(stringToDate(releasesStartDate).getFullYear() - testItemsAmount * 2, 1, 1),
    to: new Date(stringToDate(releasesStartDate).getFullYear() - testItemsAmount, 1, 1),
  },
  afterStart: {
    from: new Date(stringToDate(releasesStartDate).getFullYear() - testItemsAmount / 2, 1, 1),
    to: new Date(stringToDate(releasesStartDate).getFullYear() + testItemsAmount / 2, 1, 1),
  },
};

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
  expect(
    filter({ sortAlg, dates: null }, [...movieList]),
  ).toEqual(presortedMovies);
});

test.each([
  [
    testReleaseDates.beforeStart,
    filterByReleaseDate(testReleaseDates.beforeStart, movieList),
  ],
  [
    testReleaseDates.afterStart,
    filterByReleaseDate(testReleaseDates.afterStart, movieList),
  ],
])('test filtering by release dates: %j', (dates, filteredMovies) => {
  expect(
    filter({ sortAlg: null, dates }, movieList),
  ).toEqual(filteredMovies);
});
