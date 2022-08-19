import React from 'react';
import '@testing-library/jest-dom';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithWrapper } from '../../common/utils';
import '../../translations';
import Header from '.';

test('check hiding on scroll', async () => {
  renderWithWrapper(
    <div style={{ height: '2000px' }}>
      <Header />
    </div>
  );
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  fireEvent.scroll(window, { target: { scrollY: 300 } });
  await waitFor(() => {
    expect(header).toHaveAttribute('data-visibility', 'invisible');
  });
});

test('check redirecting', async () => {
  renderWithWrapper(<Header />);
  await userEvent.click(screen.getByRole('button', { name: /movies/i }));
  userEvent.click(screen.getByRole('button', { name: /popular/i }));
  await waitFor(() => {
    expect(window.location.pathname).toBe('/movie/');
  });
});
