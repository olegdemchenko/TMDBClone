import { css } from '@emotion/react';

export const containerStyles = css({
  position: 'relative',
  '&::after': {
    position: 'absolute',
    content: '""',
    top: 0,
    right: 0,
    width: 80,
    height: '100%',
    backgroundImage: 'linear-gradient(to right, transparent, white)',
    opacity: 1,
    pointerEvents: 'none',
    transition: 'opacity 0.5s',
  },

  '&.hidden::after': {
    opacity: 0,
  },
});
