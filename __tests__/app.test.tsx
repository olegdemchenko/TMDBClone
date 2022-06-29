import '@testing-library/jest-dom';
import React from 'react';
import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '../src/i18n';
import App from '../src/app/App';
import renderWithWrapper from './utils';
import server from '../__mocks__/server';
import SearchQueries from '../__mocks__/server/testQueries';
import { movieListResult } from '../__mocks__/server/handlers';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('check fetching popular movies info', () => {
  renderWithWrapper(<App />);
  ['popular', 'playing', 'rated', 'upcoming'].forEach(async (type) => {
    const typeRegExp = new RegExp(type, 'i');
    expect(await screen.findByRole('heading', { name: typeRegExp })).toBeInTheDocument();
    expect(screen.getAllByAltText(typeRegExp)).not.toHaveLength(0);
  });
});

test('check successful search', async () => {
  renderWithWrapper(<App />);
  const searchInput = screen.getByPlaceholderText(/search/i);
  const searchBtn = screen.getByRole('button', { name: /search/i });
  await userEvent.type(searchInput, SearchQueries.MultiSearch);
  await userEvent.click(searchBtn);
  await waitFor(() => {
    expect(window.location.pathname).toBe('/search');
  });
  await screen.findByRole('heading', { name: /search results/i });
  const secondPageLink = await screen.findByTestId(2);
  await userEvent.click(secondPageLink);
  await waitFor(() => {
    expect(new URL(window.location.href).searchParams.get('page')).toBe('2');
  });
  expect(await screen.findAllByText(movieListResult.title as string)).not.toHaveLength(0);
  const firstPageLink = await screen.findByTestId(1);
  await userEvent.click(firstPageLink);
  await waitFor(() => {
    expect(new URL(window.location.href).searchParams.get('page')).toBe('1');
  });
  expect(await screen.findAllByText(movieListResult.title as string)).not.toHaveLength(0);
});

test('check error handling after search request is sent', async () => {
  renderWithWrapper(<App />);
  const searchInput = screen.getByPlaceholderText(/search/i);
  const searchBtn = screen.getByRole('button', { name: /search/i });
  await userEvent.type(searchInput, SearchQueries.MultiSearchError);
  await userEvent.click(searchBtn);
  await waitFor(() => {
    expect(window.location.pathname).toBe('/search');
  });
  await screen.findByRole('alert');
});

test.only('check movies tab behavior', async () => {
  renderWithWrapper(<App />);
  await userEvent.click(screen.getByRole('button', { name: /movies/i }));
  await userEvent.click(screen.getByRole('button', { name: /popular/i }));
  await waitFor(() => {
    expect(window.location.pathname).toBe('/movie/');
  });
  const movies = await screen.findAllByText(movieListResult.title as string);
  const moviesCount = movies.length;
  expect(moviesCount).toBeGreaterThan(0);
  const loadBtn = screen.getByRole('button', { name: /load more/i });
  await userEvent.click(loadBtn);
  fireEvent.scroll(window, { target: { scrollY: 700 } });
  await waitFor(() => {
    expect(screen.getByTestId('collectionSpinner')).toBeInTheDocument();
  });
  await waitForElementToBeRemoved(() => screen.getByTestId('collectionSpinner'));
  expect(
    (await screen.findAllByText(movieListResult.title as string)).length,
  ).toBeGreaterThan(moviesCount);
});
