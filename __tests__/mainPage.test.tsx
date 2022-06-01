import '@testing-library/jest-dom';
import {
  screen,
  waitFor,
  render,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../src/app/App';
import server from '../__mocks__/server';
import Search from '../__mocks__/testQueries';

test('check header behavior', async () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  fireEvent.scroll(window, { target: { scrollY: 300 } });
  await waitFor(() => {
    expect(header).toHaveClass('hidden');
  });
});

describe('check fetching data from API', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('check successful search', async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });
    await userEvent.type(searchInput, Search.MultiSearch);
    await userEvent.click(searchBtn);
    await waitFor(() => {
      expect(window.location.pathname).toBe('/search');
    });
    await screen.findByRole('heading', { name: /search results/i });
  });

  test('check error handling after search request is sent', async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });
    await userEvent.type(searchInput, Search.MultiSearchError);
    await userEvent.click(searchBtn);
    await waitFor(() => {
      expect(window.location.pathname).toBe('/search');
    });
    await screen.findByRole('alert');
  });
});

test('check footer presence', async () => {
  render(<App />);
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
});
