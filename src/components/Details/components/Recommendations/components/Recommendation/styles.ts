import { css } from '@emotion/react';

const posterWidth = 300;

export const posterWrapperStyles = css({
  width: posterWidth,
  position: 'relative',
  height: 150,
});

export const nameStyles = css({
  display: 'inline-block',
  maxWidth: posterWidth * 0.8,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});
