import '@testing-library/jest-dom';
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';
import { renderWithWrapper } from '../../common/utils';
import People from '.';
import {
  popularPerson,
  pagesCount,
  peoplePerPage,
} from '../../../__mocks__/server/handlers/getPopularPeople';

test('check rendering list of popular people', async () => {
  renderWithWrapper(
    <Provider store={store}>
      <People />
    </Provider>
  );
  await waitFor(() => {
    expect(screen.getAllByText(popularPerson.name as string).length).toBe(
      peoplePerPage
    );
  });

  const lastPage = screen.getByRole('button', { name: String(pagesCount) });
  userEvent.click(lastPage);

  await waitFor(() => {
    expect(screen.getAllByText(popularPerson.name as string).length).toBe(
      peoplePerPage
    );
  });
  expect(window.location.search).toBe(`?page=${pagesCount}`);
});
