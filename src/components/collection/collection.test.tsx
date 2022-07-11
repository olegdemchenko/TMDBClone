import '@testing-library/jest-dom';
import React from 'react';
import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';
import i18n from '../../i18n';
import { tmdbApi } from '../../app/store/api';
import { renderWithWrapper } from '../../common/utils';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import MovieCollection from '.';
import {
  movie,
} from '../../../__mocks__/server/handlers/getPopularMovies';

test('check fetching on scroll', async () => {
  renderWithWrapper(
    <Provider store={store}>
      <MovieCollection
        heading="Popular"
        sendQuery={
          useCachedQueryData(
            tmdbApi.endpoints.getPopularMovies,
          )
        }
      />
    </Provider>,
  );
  const movies = await screen.findAllByText(movie.title as string);
  const moviesCount = movies.length;
  expect(moviesCount).toBeGreaterThan(0);
  const loadBtn = screen.getByRole('button', { name: i18n.t('collection:loadMore') });
  await userEvent.click(loadBtn);
  fireEvent.scroll(window, { target: { scrollY: 700 } });
  await waitFor(() => {
    expect(screen.getByTestId('collectionSpinner')).toBeInTheDocument();
  });
  await waitForElementToBeRemoved(() => screen.getByTestId('collectionSpinner'));
  expect(
    (await screen.findAllByText(movie.title as string)).length,
  ).toBeGreaterThan(moviesCount);
});
