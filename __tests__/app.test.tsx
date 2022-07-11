import '@testing-library/jest-dom';
import React from 'react';
import {
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '../src/i18n';
import App from '../src/app/App';
import { renderWithWrapper } from '../src/common/utils';
import {
  movieListResult,
} from '../__mocks__/server/handlers/getMultiSearch';
import {
  Languages,
  SortAlg,
  UserScore,
  UserVotes,
} from '../src/components/filter/constants';

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
