import React from 'react';
import '@testing-library/jest-dom';
import {
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import renderWithWrapper from '../../../__tests__/utils';
import '../../i18n';
import Header from './Header';

test('check header behavior', async () => {
  renderWithWrapper(
    <div style={{ height: '2000px' }}>
      <Header />
    </div>,
  );
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  fireEvent.scroll(window, { target: { scrollY: 300 } });
  await waitFor(() => {
    expect(header).toHaveAttribute('data-visibility', 'invisible');
  });
});
