import '@testing-library/jest-dom';
import React from 'react';
import {
  screen,
  waitFor,
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
