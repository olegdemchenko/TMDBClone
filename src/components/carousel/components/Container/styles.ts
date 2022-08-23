import { css } from '@emotion/react';

export const innerShadowStyles = css({
  position: 'relative',
  '&::after': {
    position: 'absolute',
    content: '""',
    top: 0,
    left: 0,
    right: 0,
    bottom: '4rem',
    backgroundImage: 'linear-gradient(to right, transparent 93%, white)',
  },
});

export const hiddenVerticalScrollbarStyles = css({
  overflowY: 'hidden',
});
