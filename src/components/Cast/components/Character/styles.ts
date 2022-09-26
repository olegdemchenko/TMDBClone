import { css } from '@emotion/react';
import { BorderRadiuses, ThemeColors } from '../../../../common/styles';

export const textWrapperStyles = css({
  height: 100,
  border: `2px solid ${ThemeColors.lightGray}`,
  borderTop: 'none',
  borderRadius: `0 0 ${BorderRadiuses.medium}px ${BorderRadiuses.medium}px`,
});

export const logoSizeStyles = css({
  width: 150,
  height: 200,
});
