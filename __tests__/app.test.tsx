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

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('check fetching popular movies info', () => {
  renderWithWrapper(<App />);
  ['popular', 'playing', 'rated', 'upcoming'].forEach(async (type) => {
    const typeRegExp = new RegExp(type, 'i');
    expect(screen.getByRole('heading', { name: typeRegExp })).toBeInTheDocument();
    expect(await screen.findAllByAltText(typeRegExp)).not.toHaveLength(0);
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
