import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

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

function capitalize(phrase:string) {
  return phrase.split(' ').map((word) => {
    if (word === 'tv' || word === 'api') {
      return word.toUpperCase();
    }
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }).join(' ');
}

function addZeroToDate(date:number) {
  return date < 10 ? `0${date}` : String(date);
}

function normalizeMonth(month: number) {
  return month + 1;
}

function dateToString(date: Date) {
  return `${date.getFullYear()}-${addZeroToDate(normalizeMonth(date.getMonth()))}-${addZeroToDate(date.getDate())}`;
}

function stringToDate(dateStr: string) {
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

export {
  capitalize,
  isDataDefined,
  renderWithWrapper,
  dateToString,
  stringToDate,
};
