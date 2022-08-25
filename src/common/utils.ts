import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { MovieListItem, TVListItem } from '../app/TMDBAPIInterfaces';

const renderWithWrapper = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

function isDataDefined<T>(data: T | undefined | null): asserts data is T {
  // eslint-disable-next-line eqeqeq
  if (data == undefined) {
    throw new Error(`Data must be defined. Received data type: ${typeof data}`);
  }
}

function capitalize(phrase: string) {
  return phrase
    .split(' ')
    .map((word) => {
      if (word === 'tv' || word === 'api') {
        return word.toUpperCase();
      }
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    })
    .join(' ');
}

function addZeroToDate(date: number) {
  return date < 10 ? `0${date}` : String(date);
}

function dateToStringWithDash(date: Date) {
  return `${date.getFullYear()}-${addZeroToDate(
    date.getMonth() + 1
  )}-${addZeroToDate(date.getDate())}`;
}

type DatesTypes = 'dash' | 'dot';

function parseDate(dateStr: string, dateType: DatesTypes) {
  const regexMap: { [Key in DatesTypes]: RegExp } = {
    dot: /(?<day>[0-9]{1,2}).(?<month>[0-9]{1,2}).(?<year>[0-9]{4})/,
    dash: /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
  };
  if (!regexMap[dateType].test(dateStr)) {
    throw new Error(`Incorrect string date format: ${dateStr}`);
  }
  const { year, month, day } = dateStr.match(regexMap[dateType])!.groups as {
    year: string;
    month: string;
    day: string;
  };
  return new Date(Number(year), Number(month) - 1, Number(day));
}

function dateToStringWithDot(date?: Date) {
  if (!date) {
    return '';
  }
  const stringifiedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;
  return stringifiedDate;
}

function validateDate(date: string) {
  const maxDay = 31;
  const maxMonth = 11;
  const maxYear = 2022;
  try {
    const parsedDate = parseDate(date, 'dot');
    return (
      parsedDate.getDate() <= maxDay &&
      parsedDate.getMonth() <= maxMonth &&
      parsedDate.getFullYear() <= maxYear
    );
  } catch (e) {
    return false;
  }
}

function getTitle(elem: MovieListItem | TVListItem) {
  if ('name' in elem) {
    return elem.name;
  }
  return (elem as MovieListItem).title;
}

function getReleaseDate(elem: MovieListItem | TVListItem) {
  if ('release_date' in elem) {
    return elem.release_date;
  }
  return (elem as TVListItem).first_air_date;
}

function getMovieDetailsPath(movieId: number, movieTitle: string) {
  return `${movieId}-${movieTitle.split(' ').join('-')}`;
}

export {
  capitalize,
  isDataDefined,
  renderWithWrapper,
  dateToStringWithDash,
  dateToStringWithDot,
  validateDate,
  parseDate,
  getTitle,
  getReleaseDate,
  getMovieDetailsPath,
};
