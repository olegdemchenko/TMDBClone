import {
  MovieListItem,
} from '../../../app/APIInfo';
import { SortAlg, UserRate } from './constants';
import { FilterState } from './state';
import {
  parseDate,
} from '../../../common/utils';

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

function doesMovieBelongToTime(movie: MovieListItem, dates: FilterState['dates']) {
  if (!dates || !movie.release_date) {
    return true;
  }
  const movieDate = parseDate(movie.release_date, 'dash');
  if (dates.from && !dates.to) {
    return dates.from.valueOf() <= movieDate.valueOf();
  }
  if (!dates.from && dates.to) {
    return movieDate.valueOf() <= dates.to.valueOf();
  }
  if (dates.to && dates.from) {
    return (dates.from.valueOf() <= movieDate.valueOf())
    && (movieDate.valueOf() <= dates.to.valueOf());
  }
  return true;
}

function isMovieRelToGenres(movie: MovieListItem, genres: number[]) {
  if (genres.length === 0) {
    return true;
  }
  return genres.every((genreId) => movie.genre_ids?.includes(genreId));
}

function doesMovieHaveLang(language: string, movie: MovieListItem) {
  if (!language) {
    return true;
  }
  return movie.original_language === language;
}

function doesMovieHaveRate(rate: number, movie: MovieListItem) {
  return (movie.vote_average ?? UserRate.max) >= rate;
}

function filter({
  sortAlg,
  dates,
  genres,
  language,
  rate,
}: FilterState, movies: MovieListItem[]) {
  return movies
    .sort(sortAlg ? Algs[sortAlg] : undefined)
    .filter((movie) => doesMovieBelongToTime(movie, dates))
    .filter((movie) => isMovieRelToGenres(movie, genres))
    .filter((movie) => doesMovieHaveLang(language, movie))
    .filter((movie) => doesMovieHaveRate(rate, movie));
}

export default filter;
