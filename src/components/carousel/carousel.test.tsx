import React from 'react';
import {
  screen,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';
import { tmdbApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { renderWithWrapper } from '../../common/utils';
import { movie, movieList } from '../../../__mocks__/server/handlers/getPopularMovies';
import Carousel from './index';

test('check fetching popular movies info', async () => {
  const heading = 'Popular';
  renderWithWrapper(
    <Provider store={store}>
      <Carousel
        heading={heading}
        sendQuery={useCachedQueryData(tmdbApi.endpoints.getPopularMovies)}
      />
    </Provider>,
  );
  await waitFor(() => {
    expect(screen.getAllByText(movie.title as string)).toHaveLength(movieList.results.length);
  });
});
