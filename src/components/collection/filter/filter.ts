import {
  MovieListItem,
  TVListItem,
} from '../../../app/TMDBAPIInterfaces';
import { SortAlg, UserRate } from './constants';
import { FilterState } from './state';
import {
  parseDate,
} from '../../../common/utils';

type Movie = {
  [Key in keyof MovieListItem as string]: MovieListItem[Key]
};

type TV = {
  [Key in keyof TVListItem as string]: TVListItem[Key]
};

type MovieValues = Movie[string];
type TVValues = TV[string];
type Values = MovieValues | TVValues;

const getCompareableValue = (prop?: Values) => prop ?? 1;

function compareValuesByAsc(value1?: Values, value2?: Values) {
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

type ListItem = MovieListItem | TVListItem;

type AlgorithmsMap = {
  [key in SortAlg]: (a: ListItem, b: ListItem) => number;
};

function getTitle(elem: ListItem) {
  if ('name' in elem) {
    return elem.name;
  }
  return (elem as MovieListItem).title;
}

function getReleaseDate(elem: ListItem) {
  if ('release_date' in elem) {
    return elem.release_date;
  }
  return (elem as TVListItem).first_air_date;
}

const Algs: AlgorithmsMap = {
  [SortAlg.popularityAsc]: (a, b) => compareValuesByAsc(a?.popularity, b?.popularity),
  [SortAlg.popularityDesc]: (a, b) => compareValuesByAsc(b?.popularity, a?.popularity),
  [SortAlg.ratingAsc]: (a, b) => compareValuesByAsc(a?.vote_average, b?.vote_average),
  [SortAlg.ratingDesc]: (a, b) => compareValuesByAsc(b?.vote_average, a?.vote_average),
  [SortAlg.titleAZ]: (a, b) => compareValuesByAsc(getTitle(a), getTitle(b)),
  [SortAlg.titleZA]: (a, b) => compareValuesByAsc(getTitle(b), getTitle(a)),
  [SortAlg.releaseDateAsc]: (a, b) => (
    compareValuesByAsc(
      new Date(getReleaseDate(a) ?? 0).valueOf(),
      new Date(getReleaseDate(b) ?? 0).valueOf(),
    )
  ),
  [SortAlg.releaseDateDesc]: (a, b) => (
    compareValuesByAsc(
      new Date(getReleaseDate(b) ?? 0).valueOf(),
      new Date(getReleaseDate(a) ?? 0).valueOf(),
    )
  ),
};

function doesMovieBelongToTime(movie: ListItem, dates: FilterState['dates']) {
  const releaseDate = getReleaseDate(movie);
  if (!dates || !releaseDate) {
    return true;
  }
  const movieDate = parseDate(releaseDate, 'dash');
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

function isMovieRelToGenres(movie: ListItem, genres: number[]) {
  if (genres.length === 0) {
    return true;
  }
  return genres.every((genreId) => movie.genre_ids?.includes(genreId));
}

function doesMovieHaveLang(language: string, movie: ListItem) {
  if (!language) {
    return true;
  }
  return movie.original_language === language;
}

function doesMovieHaveRate(rate: number, movie: ListItem) {
  return (movie.vote_average ?? UserRate.max) >= rate;
}

function filter({
  sortAlg,
  dates,
  genres,
  language,
  rate,
}: FilterState, movies: ListItem[]) {
  return movies
    .sort(sortAlg ? Algs[sortAlg] : undefined)
    .filter((movie) => doesMovieBelongToTime(movie, dates))
    .filter((movie) => isMovieRelToGenres(movie, genres))
    .filter((movie) => doesMovieHaveLang(language, movie))
    .filter((movie) => doesMovieHaveRate(rate, movie));
}

export default filter;
