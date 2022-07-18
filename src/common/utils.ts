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

function dateToStringWithDash(date: Date) {
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
  const transformedDate = new Date(Number(year), Number(month) - 1, Number(day));
  return transformedDate;
}

function dateToStringWithDot(date?: Date) {
  if (!date) {
    return '';
  }
  const stringifiedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  return stringifiedDate;
}

const dateRegex = /(?<day>[0-9]{1,2}).(?<month>[0-9]{1,2}).(?<year>[0-9]{4})/;

function validateDate(date: string) {
  if (!dateRegex.test(date)) {
    return false;
  }
  const maxDay = 31;
  const maxMonth = 12;
  const maxYear = 2022;
  const { day, month, year } = date
    .match(dateRegex)?.groups as { day: string, month: string, year: string };
  return Number(day) <= maxDay && Number(month) <= maxMonth && Number(year) <= maxYear;
}

function parseDate(date: string) {
  const { day, month, year } = date
    .match(dateRegex)?.groups as { day: string, month: string, year: string };
  return new Date(Number(year), Number(month) - 1, Number(day));
}

export {
  capitalize,
  isDataDefined,
  renderWithWrapper,
  dateToStringWithDash,
  dateToStringWithDot,
  validateDate,
  parseDate,
  stringToDate,
};
