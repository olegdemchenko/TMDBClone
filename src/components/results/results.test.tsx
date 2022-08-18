import React from 'react';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import '../../translations';
import { store } from '../../app/store/store';
import { renderWithWrapper } from '../../common/utils';
import Results from '.';
import {
  SearchQueries,
  movieListResult,
} from '../../../__mocks__/server/handlers/getMultiSearch';

function getRoute(query: string) {
  const route = new URL('/search', window.location.origin);
  route.searchParams.set('query', query);
  route.searchParams.set('page', '1');
  return route.toString();
}

test('check successful results fetching', async () => {
  renderWithWrapper(
    <Provider store={store}>
      <Results />
    </Provider>,
    { route: getRoute(SearchQueries.MultiSearch) }
  );
  await waitFor(() => {
    expect(
      screen.getAllByText(movieListResult.title as string)
    ).not.toHaveLength(0);
  });
});

test('check error handling', async () => {
  renderWithWrapper(
    <Provider store={store}>
      <Results />
    </Provider>,
    { route: getRoute(SearchQueries.MultiSearchError) }
  );
  await waitFor(() => {
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
