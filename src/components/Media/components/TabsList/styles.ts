import { css } from '@emotion/react';
import { ThemeColors } from '../../../../common/styles';

export const selectedTabStyles = css({
  '& > button[data-selected="true"]': {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: 5,
      bottom: 0,
      left: 0,
      backgroundColor: ThemeColors.dark,
    },
  },
});
