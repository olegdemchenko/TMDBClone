import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '../../translations';
import { renderWithWrapper } from '../../common/utils';
import { store } from '../../app/store/store';
import { movieDetails as mockedDetails } from '../../../__mocks__/server/handlers/getMovieDetails';
import { detailsPaths } from '../../routes';

import MovieDetails from '.';

test('check MovieDetails base content presence', async () => {
  renderWithWrapper(
    <Provider store={store}>
      <Routes>
        <Route path='/movie/:movieCredentials' element={<MovieDetails />} />
      </Routes>
    </Provider>,
    {
      route: detailsPaths.movie(
        mockedDetails.id,
        mockedDetails.title as string
      ),
    }
  );
  expect(
    await screen.findByText(mockedDetails.tagline as string, { exact: false })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockedDetails.overview as string)
  ).toBeInTheDocument();
});
