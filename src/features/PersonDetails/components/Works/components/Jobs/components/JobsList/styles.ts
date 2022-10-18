import { css } from '@emotion/react';
import { ThemeColors } from '../../../../../../../../common/styles';

const listStyles = css({
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  border: `1px solid ${ThemeColors.lightGray}`,
});

const listItemStyles = css({
  borderBottom: `1px solid ${ThemeColors.lightGray}`,
  '&:last-child': {
    borderBottom: 'none',
  },
});

export { listStyles, listItemStyles };
