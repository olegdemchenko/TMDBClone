import '@testing-library/jest-dom';
import {
  screen,
  waitFor,
  render,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import Root from '../src/components/Root';
import server from '../src/mocks/server';
import Search from '../src/mocks/testQueries';

test('check header behavior', async () => {
  render(<Root />);
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
    render(<Root />);
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
  render(<Root />);
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
});
