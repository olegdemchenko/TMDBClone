import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store/store';
import i18n from '../../../../translations';
import Media from '.';

test('check changing current content type', async () => {
  const currentTabAttr = 'data-selected';
  render(
    <Provider store={store}>
      <Media id={666} />
    </Provider>
  );
  const videoTab = screen.getByRole('button', {
    name: i18n.t('details:videos'),
  });
  expect(videoTab).toHaveAttribute(currentTabAttr);
  const backdropTab = screen.getByRole('button', {
    name: i18n.t('details:backdrops'),
  });
  await userEvent.click(backdropTab);
  expect(backdropTab).toHaveAttribute(currentTabAttr);
  expect(videoTab).not.toHaveAttribute(currentTabAttr);
});
