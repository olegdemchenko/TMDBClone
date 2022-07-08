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
import { renderWithWrapper } from '../src/common/utils';
import {
  SearchQueries,
  movieListResult,
} from '../__mocks__/server/handlers/getMultiSearch';
import {
  Languages,
  SortAlg,
  UserScore,
  UserVotes,
} from '../src/components/filter/constants';

test('check successful search', async () => {
  renderWithWrapper(<App />);
  const searchInput = screen.getByPlaceholderText(/search/i);
  const searchBtn = screen.getByRole('button', { name: /search/i });
  await userEvent.type(searchInput, SearchQueries.MultiSearch);
  await userEvent.click(searchBtn);
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

test('check movies tab scroll behavior', async () => {
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

test('check movies tab filter behavior', async () => {
  renderWithWrapper(<App />);
  await userEvent.click(screen.getByRole('button', { name: /movies/i }));
  await userEvent.click(screen.getByRole('button', { name: /popular/i }));
  const sortAlg = screen.getByLabelText(/sort/i);
  const dateFrom = screen.getByLabelText(/from/i);
  const dateTo = screen.getByLabelText(/to/i);
  const genres = screen.getByText(/genres/i);
  const language = screen.getByLabelText(/language/i);
  const age = screen.getByText(/^age$/i);
  const userScore = screen.getByLabelText(/user score/i);
  const userVotes = screen.getByLabelText(/user votes/i);
  userEvent.selectOptions(sortAlg, [SortAlg.titleAZ]);
  userEvent.type(dateFrom, '1/1/1');
  userEvent.type(dateTo, '1/1/1');
  genres.querySelectorAll('button').forEach((btn) => userEvent.click(btn));
  userEvent.selectOptions(language, [Languages.zh]);
  age.querySelectorAll('button').forEach((btn) => userEvent.click(btn));
  fireEvent.change(userScore, { target: { value: UserScore.max } });
  fireEvent.change(userVotes, { target: { value: UserVotes.max } });
  await waitFor(() => {
    expect(screen.getByText(movieListResult.title as string)).not.toBeInTheDocument();
  });
  userEvent.deselectOptions(sortAlg, [SortAlg.titleAZ]);
  userEvent.type(dateFrom, '');
  userEvent.type(dateTo, '');
  genres.querySelectorAll('button').forEach((btn) => userEvent.click(btn));
  userEvent.selectOptions(language, [Languages.en]);
  age.querySelectorAll('button').forEach((btn) => userEvent.click(btn));
  fireEvent.change(userScore, { target: { value: UserScore.min } });
  fireEvent.change(userVotes, { target: { value: UserScore.max } });
  await waitFor(() => {
    expect(screen.getByText(movieListResult.title as string)).toBeInTheDocument();
  });
});
