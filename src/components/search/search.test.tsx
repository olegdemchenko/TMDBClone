import React from 'react';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from '../../translations';
import { renderWithWrapper } from '../../common/utils';
import { SearchQueries } from '../../../__mocks__/server/handlers/getMultiSearch';
import Search from './Search';

test('check redirecting', async () => {
  renderWithWrapper(<Search mode='main' />);
  const searchInput = screen.getByPlaceholderText(/search/i);
  const searchBtn = screen.getByRole('button', { name: /search/i });
  await userEvent.type(searchInput, SearchQueries.MultiSearch);
  userEvent.click(searchBtn);
  await waitFor(() => {
    expect(window.location.pathname).toBe('/search');
  });
  expect(new URLSearchParams(window.location.search).get('query')).toBe(
    SearchQueries.MultiSearch
  );
});

test('check error handling', async () => {
  renderWithWrapper(<Search mode='results' />);
  const searchBtn = screen.getByRole('button');
  userEvent.click(searchBtn);
  await waitFor(() => {
    expect(
      screen.getByText(i18n.t('search:errors.emptyQuery') as string)
    ).toBeInTheDocument();
  });
});
