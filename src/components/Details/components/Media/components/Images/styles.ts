import { css } from '@emotion/react';

export const slideSizes = {
  backdrops: css({ width: 500 }),
  posters: css({ width: 200 }),
};

export const sliderStyles = css({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowY: 'hidden',
});
