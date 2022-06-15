import '@testing-library/jest-dom';
import {
  screen,
  findAllByText,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '../src/i18n';
import React from 'react';
import App from '../src/app/App';
import renderWithWrapper from './utils';
import server from '../__mocks__/server';
import SearchQueries from '../__mocks__/server/testQueries';
import { movieListResult } from '../__mocks__/server/handlers';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('check fetching popular movies info', async () => {
  renderWithWrapper(<App />);
  const popularMoviesHeading = screen.getByRole('heading', { name: /popular/i });
  expect(
    await findAllByText(
      popularMoviesHeading.parentElement as HTMLBodyElement,
      movieListResult.title as string,
    ),
  ).not.toHaveLength(0);
});

test('check fetching now playing movies info', async () => {
  renderWithWrapper(<App />);
  const nowPlayingMoviesHeading = screen.getByRole('heading', { name: /playing/i });
  expect(
    await findAllByText(
      nowPlayingMoviesHeading.parentElement as HTMLBodyElement,
      movieListResult.title as string,
    ),
  ).not.toHaveLength(0);
});

test('check fetching top rated movies info', async () => {
  renderWithWrapper(<App />);
  const topRatedMoviesHeading = screen.getByRole('heading', { name: /rated/i });
  expect(
    await findAllByText(
      topRatedMoviesHeading.parentElement as HTMLBodyElement,
      movieListResult.title as string,
    ),
  ).not.toHaveLength(0);
});

test('check fetching upcoming movies info', async () => {
  renderWithWrapper(<App />);
  const upcomingMoviesHeading = screen.getByRole('heading', { name: /upcoming/i });
  expect(
    await findAllByText(
      upcomingMoviesHeading.parentElement as HTMLBodyElement,
      movieListResult.title as string,
    ),
  ).not.toHaveLength(0);
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
