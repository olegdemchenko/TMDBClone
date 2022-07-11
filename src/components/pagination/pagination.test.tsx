import React from 'react';
import '@testing-library/jest-dom';
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from '../../i18n';
import { renderWithWrapper } from '../../common/utils';
import Pagination from './index';

function getPage(queryString: string) {
  return queryString.match(/page=(\d+)/)?.[1] ?? '';
}

test('check page changing', async () => {
  const lastPage = 100;
  const prev = i18n.t('pagination:prev');
  const next = i18n.t('pagination:next');
  renderWithWrapper(<Pagination total={lastPage} />);
  expect(screen.queryByRole('button', { name: prev })).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: next })).toBeInTheDocument();
  userEvent.click(screen.getByTestId(5));
  await waitFor(() => {
    expect(getPage(window.location.search)).toBe('5');
  });
  userEvent.click(screen.getByRole('button', { name: prev }));
  await waitFor(() => {
    expect(getPage(window.location.search)).toBe('4');
  });
  userEvent.click(screen.getByRole('button', { name: next }));
  await waitFor(() => {
    expect(getPage(window.location.search)).toBe('5');
  });
  userEvent.click(screen.getByTestId(lastPage));
  await waitForElementToBeRemoved(() => screen.getByRole('button', { name: next }));
});
