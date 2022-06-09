import '@testing-library/jest-dom';
import {
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import App from '../src/app/App';
import renderWithWrapper from './utils';
import server from '../__mocks__/server';

test('check header behavior', async () => {
  renderWithWrapper(<App />);
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  fireEvent.scroll(window, { target: { scrollY: 300 } });
  await waitFor(() => {
    expect(header).toHaveClass('hidden');
  });
});

describe('check fetching movies lists', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('check fetching popular movies info', async () => {
    renderWithWrapper(<App />);
    expect(await screen.findAllByAltText(/popular/)).toHaveLength(20);
  });
});

test('check footer presence', async () => {
  renderWithWrapper(<App />);
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
});
