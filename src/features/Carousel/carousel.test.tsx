import React from 'react';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';
import { moviesApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { renderWithWrapper } from '../../common/utils';
import {
  movie,
  moviesPerPage,
} from '../../../__mocks__/server/handlers/getPopularMovies';

import Carousel from './index';

test('check fetching movies', async () => {
  const heading = 'Popular';
  renderWithWrapper(
    <Provider store={store}>
      <Carousel
        heading={heading}
        sendQuery={useCachedQueryData(moviesApi.endpoints.getPopularMovies)}
      />
    </Provider>
  );
  await waitFor(() => {
    expect(screen.getAllByText(movie.title as string)).toHaveLength(
      moviesPerPage
    );
  });
});

test('check error handling', async () => {
  const heading = 'Upcoming';
  renderWithWrapper(
    <Provider store={store}>
      <Carousel
        heading={heading}
        sendQuery={useCachedQueryData(moviesApi.endpoints.getUpcomingMovies)}
      />
    </Provider>
  );
  await waitFor(() => {
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
