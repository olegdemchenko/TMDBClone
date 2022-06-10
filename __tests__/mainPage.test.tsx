import '@testing-library/jest-dom';
import {
  screen,
  waitFor,
  fireEvent,
  findAllByText,
} from '@testing-library/react';
import React from 'react';
import App from '../src/app/App';
import renderWithWrapper from './utils';
import server from '../__mocks__/server';
import { movieListResult } from '../__mocks__/server/handlers';

test('check header behavior', async () => {
  renderWithWrapper(<App />);
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  fireEvent.scroll(window, { target: { scrollY: 300 } });
  await waitFor(() => {
    expect(header).toHaveClass('hidden');
  });
});

describe('check fetching movies lists', () => {
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
});

test('check footer presence', async () => {
  renderWithWrapper(<App />);
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
});
