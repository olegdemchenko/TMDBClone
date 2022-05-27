import '@testing-library/jest-dom';
import {
  screen,
  waitFor,
  render,
  fireEvent,
} from '@testing-library/react';
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

  test('check blocking search elems after search request is sent', async () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox', { name: /search input/i });
    const searchBtn = screen.getByRole('button', { name: /search/i });
    fireEvent.change(searchInput, { targer: { value: Search.MultiSearch } });
    fireEvent.click(searchBtn);
    await waitFor(() => {
      expect(searchBtn).toBeDisabled();
    });
    await waitFor(() => {
      expect(searchInput).toBeDisabled();
    });
  });

  test('check successful search', async () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox', { name: /search input/i });
    const searchBtn = screen.getByRole('button', { name: /search/i });
    fireEvent.change(searchInput, { targer: { value: Search.MultiSearch } });
    fireEvent.click(searchBtn);
    await waitFor(() => {
      expect(window.location.pathname).toBe('/search');
    });
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /search results/i })).toBeInTheDocument();
    });
  });

  test('check error handling after search request is sent', async () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox', { name: /search input/i });
    const searchBtn = screen.getByRole('button', { name: /search/i });
    fireEvent.change(searchInput, { targer: { value: Search.MultiSearchError } });
    fireEvent.click(searchBtn);
    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
    await waitFor(() => {
      expect(screen.getByRole('alert', { name: /search error/i })).toBeInTheDocument();
    });
  });
});

test('check footer presence', async () => {
  render(<App />);
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
});
