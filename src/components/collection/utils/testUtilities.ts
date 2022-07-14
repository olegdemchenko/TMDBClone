import {
  MovieListItem,
} from '../../../app/APIInfo';

export function addZeroToDate(date:number) {
  return date < 10 ? `0${date}` : String(date);
}

export function normalizeMonth(month: number) {
  return month + 1;
}

export function changeDateRepr(date: Date) {
  return `${date.getFullYear()}-${addZeroToDate(normalizeMonth(date.getMonth()))}-${addZeroToDate(date.getDate())}`;
}

export function getRandomReleaseDate() {
  const timestamp = Number(Math.random().toFixed(13)) * 10000000000000;
  return changeDateRepr(new Date(timestamp));
}

export type PropertiesKeys = keyof MovieListItem;

export type TestMovie = {
  [Key in keyof MovieListItem as string]-?: NonNullable<MovieListItem[Key]>
};

export function compare(firstValue: TestMovie[string], secondValue: TestMovie[string]) {
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
