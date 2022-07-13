import {
  MovieListItem,
} from '../../app/APIInfo';
import { SortAlg } from '../filter/constants';

interface FilterParams {
  sortAlg: SortAlg | null
}

type MovieData = {
  [Key in keyof MovieListItem as string]: MovieListItem[Key]
};

type MovieDataValues = MovieData[string];

const getCompareableValue = (prop?: MovieDataValues) => prop ?? 1;

function compareValuesByAsc(value1?: MovieDataValues, value2?: MovieDataValues) {
  if (Array.isArray(value1)) {
    return 1;
  }
  if (getCompareableValue(value1) > getCompareableValue(value2)) {
    return 1;
  }
  if (getCompareableValue(value1) < getCompareableValue(value2)) {
    return -1;
  }
  return 0;
}

type AlgorithmsMap = {
  [key in SortAlg]: (a: MovieListItem, b: MovieListItem) => number;
};

const Algs: AlgorithmsMap = {
  [SortAlg.popularityAsc]: (a, b) => compareValuesByAsc(a?.popularity, b?.popularity),
  [SortAlg.popularityDesc]: (a, b) => compareValuesByAsc(b?.popularity, a?.popularity),
  [SortAlg.ratingAsc]: (a, b) => compareValuesByAsc(a?.vote_average, b?.vote_average),
  [SortAlg.ratingDesc]: (a, b) => compareValuesByAsc(b?.vote_average, a?.vote_average),
  [SortAlg.titleAZ]: (a, b) => compareValuesByAsc(a.title, b.title),
  [SortAlg.titleZA]: (a, b) => compareValuesByAsc(b.title, a.title),
  [SortAlg.releaseDateAsc]: (a, b) => (
    compareValuesByAsc(
      new Date(a.release_date ?? 0).valueOf(),
      new Date(b.release_date ?? 0).valueOf(),
    )
  ),
  [SortAlg.releaseDateDesc]: (a, b) => (
    compareValuesByAsc(
      new Date(b.release_date ?? 0).valueOf(),
      new Date(a.release_date ?? 0).valueOf(),
    )
  ),
};

function filter({ sortAlg }: FilterParams, movies: MovieListItem[]) {
  return movies.sort(sortAlg ? Algs[sortAlg] : undefined);
}

export default filter;
