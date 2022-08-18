import { css } from '@emotion/react';
import { ThemeColors } from '../../../../common/styles';

export const headerBasicStyle = css({
  position: 'sticky',
  top: 0,
  left: 0,
  backgroundColor: ThemeColors.darkBlue,
  color: 'white',
  zIndex: 1000,
});

export const headerVisibleStyle = css({
  transform: 'translateY(0%)',
  transitionProperty: 'transform',
  transitionDuration: '0.5s',
});

export const headerInvisibleStyle = css({
  transform: 'translateY(-100%)',
  transitionProperty: 'transform',
  transitionDuration: '0.5s',
});

export const logoStyles = css({
  width: 120,
});
