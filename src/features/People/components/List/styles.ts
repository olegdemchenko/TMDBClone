import { css } from '@emotion/react';
import { listItemWidth } from '../ListItem/styles';

const columnsCount = 5;

export const listStyles = css({
  display: 'flex',
  justifyContent: 'start',
  flexWrap: 'wrap',
  columnGap: `calc((100% - ${columnsCount} * ${listItemWidth}px) / ${
    columnsCount - 1
  })`,
  '@media (max-width: 1200px)': {
    columnGap: `calc((100% - ${columnsCount - 1} * ${listItemWidth}px) / ${
      columnsCount - 2
    })`,
  },
  '@media (max-width: 900px)': {
    columnGap: `calc((100% - ${columnsCount - 2} * ${listItemWidth}px) / ${
      columnsCount - 3
    })`,
  },
  '@media (max-width: 650px)': {
    columnGap: `calc((100% - ${columnsCount - 3} * ${listItemWidth}px) / ${
      columnsCount - 4
    })`,
  },
});
