import '@testing-library/jest-dom';
import {
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../src/app/App';
import server from '../__mocks__/server';
import SearchQueries from '../__mocks__/testQueries';
import renderWithWrapper from './utils';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

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