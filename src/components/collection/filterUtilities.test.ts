import _ from 'lodash';
import {
  MovieListItem,
} from '../../app/APIInfo';
import { SortAlg } from '../filter/constants';
import filter from './filterUtilities';

function addZeroToDate(date:number) {
  return date < 10 ? `0${date}` : String(date);
}

function normalizeMonth(month: number) {
  return month + 1;
}

function getRandomReleaseDate() {
  const timestamp = Number(Math.random().toFixed(13)) * 10000000000000;
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${addZeroToDate(normalizeMonth(date.getMonth()))}-${addZeroToDate(date.getDate())}`;
}

type TestMovie = {
  [Key in keyof MovieListItem as string]-?: NonNullable<MovieListItem[Key]>
};

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

type PropertiesKeys = keyof MovieListItem;

function compare(firstValue: TestMovie[string], secondValue: TestMovie[string]) {
  if (!Array.isArray(firstValue)) {
    if (firstValue > secondValue) {
      return 1;
    }
    if (firstValue < secondValue) {
      return -1;
    }
    return 0;
  }
  return 0;
}

function getPrimitiveValue(key: PropertiesKeys, container: TestMovie) {
  return key === 'release_date' ? new Date(container[key] as string).valueOf() : container[key];
}

const sortItems = (key: PropertiesKeys, direction: 'asc' | 'desc') => (a: TestMovie, b: TestMovie) => {
  const valueA = getPrimitiveValue(key, a);
  const valueB = getPrimitiveValue(key, b);
  return direction === 'asc' ? compare(valueA, valueB) : compare(valueB, valueA);
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
  expect(filter({ sortAlg }, (movieList as unknown) as MovieListItem[])).toEqual(presortedMovies);
});
