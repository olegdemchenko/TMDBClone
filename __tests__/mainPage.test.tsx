import '@testing-library/jest-dom';
import {
  screen,
  waitFor,
  render,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import App from '../src/components/App';

test('check header behavior', async () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  fireEvent.scroll(window, { target: { scrollY: 300 } });
  await waitFor(() => {
    expect(header).toHaveClass('hidden');
  });
  fireEvent.scroll(window, { target: { scrollY: -100 } });
  await waitFor(() => {
    expect(header).toHaveClass('visible');
  });
});
