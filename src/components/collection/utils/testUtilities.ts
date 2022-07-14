import {
  MovieListItem,
} from '../../../app/APIInfo';
import { releasesStartDate } from '../../filter/constants';
import { FilterState } from '../../filter/state';

export function addZeroToDate(date:number) {
  return date < 10 ? `0${date}` : String(date);
}

export function normalizeMonth(month: number) {
  return month + 1;
}

export function dateToString(date: Date) {
  return `${date.getFullYear()}-${addZeroToDate(normalizeMonth(date.getMonth()))}-${addZeroToDate(date.getDate())}`;
}

export function stringToDate(dateStr: string) {
  const dateRegex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
  if (!dateRegex.test(dateStr)) {
    throw new Error(`Incorrect string date format: ${dateStr}`);
  }
  const {
    year,
    month,
    day,
  } = dateStr.match(dateRegex)!.groups as { year: string, month: string, day: string };
  const transformedDate = new Date(Number(year), Number(month), Number(day));
  return transformedDate;
}

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
