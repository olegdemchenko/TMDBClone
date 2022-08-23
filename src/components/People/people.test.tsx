import '@testing-library/jest-dom';
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';
import { renderWithWrapper } from '../../common/utils';
import People from '.';
import {
  popularPerson,
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
});
