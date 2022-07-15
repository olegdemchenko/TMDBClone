import {
  MovieListItem,
} from '../../../app/APIInfo';
import { releasesStartDate } from '../../filterMenu/constants';
import { FilterState } from '../../filterMenu/state';
import {
  stringToDate,
  dateToString,
} from '../../../common/utils';

export function getSubsequentStringDate(index: number) {
  const startDate = stringToDate(releasesStartDate);
  startDate.setFullYear(startDate.getFullYear() + index);
  return dateToString(startDate);
}

export type PropertiesKeys = keyof MovieListItem;

export type TestMovie = {
  [Key in keyof MovieListItem]-?: NonNullable<MovieListItem[Key]>
};

type TestMovieValues = TestMovie[PropertiesKeys];

export function compare(firstValue: TestMovieValues, secondValue: TestMovieValues) {
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

export function getPrimitiveValue(key: PropertiesKeys, container: TestMovie) {
  return key === 'release_date' ? new Date(container[key] as string).valueOf() : container[key];
}

export function sortItems(key: PropertiesKeys, direction: 'asc' | 'desc') {
  return (a: TestMovie, b: TestMovie) => {
    const valueA = getPrimitiveValue(key, a);
    const valueB = getPrimitiveValue(key, b);
    return direction === 'asc' ? compare(valueA, valueB) : compare(valueB, valueA);
  };
}

export function filterByReleaseDate(dates: NonNullable<FilterState['dates']>, movies: TestMovie[]) {
  return movies.filter((movie) => {
    if (dates.from && dates.to) {
      return (
        (dates.from.valueOf() <= stringToDate(movie.release_date).valueOf())
        && (stringToDate(movie.release_date).valueOf() <= dates.to.valueOf())
      );
    }
    return true;
  });
}
