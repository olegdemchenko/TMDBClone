import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from '../../../../translations';
import Media from '.';

test('check changing current content type', async () => {
  const currentTabAttr = 'data-selected';
  render(<Media id={666} />);
  const videoTab = screen.getByRole('listitem', {
    name: i18n.t('details:videos'),
  });
  expect(videoTab).toHaveAttribute(currentTabAttr);
  const backdropTab = screen.getByRole('listitem', {
    name: i18n.t('details:backdrops'),
  });
  userEvent.click(backdropTab);
  expect(backdropTab).toHaveAttribute(currentTabAttr);
  expect(videoTab).not.toHaveAttribute(currentTabAttr);
});
