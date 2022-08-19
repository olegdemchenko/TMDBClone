import { css } from '@emotion/react';

const listGap = 25;
export const commonStyles = css({
  display: 'flex',
  gap: listGap,
  flexGrow: 1,
  alignContent: 'start',
});

export const rowListStyles = css({
  paddingTop: '3rem',
  flexWrap: 'nowrap',
});

export const multilineListStyles = css({
  display: 'grid',
  gridTemplateColumns: `repeat(5, calc((100% - ${4 * listGap}px) / 5))`,
  '@media (max-width: 1200px)': {
    gridTemplateColumns: `repeat(4, calc((100% - ${3 * listGap}px) / 4))`,
  },
  '@media (max-width: 1000px)': {
    gridTemplateColumns: `repeat(3, calc((100% - ${2 * listGap}px) / 3))`,
  },
  '@media (max-width: 850px)': {
    gridTemplateColumns: `repeat(2, calc((100% - ${listGap}px) / 2))`,
  },
  '@media (max-width: 700px)': {
    gridTemplateColumns: '100%',
  },
});
