import { css } from '@emotion/react';
import { ThemeColors, BorderRadiuses } from '../../../../../../common/styles';

export const inputStyles = css({
  width: '100%',
  position: 'relative',
  border: `2px solid ${ThemeColors.lightGray}`,
  borderRadius: BorderRadiuses.small,
  outline: 'none',
  backgroundColor: 'transparent',
  '&:focus': {
    border: `2px solid ${ThemeColors.lightBlue}`,
  },
  zIndex: 1,
});

export const errorStyles = css({
  '&:focus': {
    borderColor: ThemeColors.red,
  },
});
