import '@testing-library/jest-dom';
import { screen, waitFor, render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../src/components/App';

test('check header behavior', async () => {
  const { container } = render(<App />);
  const logo = screen.getByRole('img', { name: /logo/i });
  expect(logo).toBeInTheDocument();
  fireEvent.scroll(container, { y: 100 });
  await waitFor(() => {
    expect(logo).not.toBeVisible();
  });
  fireEvent.scroll(container, { y: -100 });
  await waitFor(() => {
    expect(logo).toBeVisible();
  });
});