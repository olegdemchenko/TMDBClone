import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithWrapper, getMovieDetailsPath } from '../../common/utils';
import { movieDetails as mockedDetails } from '../../../__mocks__/server/handlers/getMovieDetails';

import MovieDetails from '.';

test('check MovieDetails base content presence', async () => {
  renderWithWrapper(<MovieDetails />, {
    route: `/${getMovieDetailsPath(
      mockedDetails.id,
      mockedDetails.title as string
    )}`,
  });
  expect(
    await screen.findByRole('heading', { name: mockedDetails.title })
  ).toBeInTheDocument();
  expect(
    screen.getByText(mockedDetails.overview as string)
  ).toBeInTheDocument();
});
