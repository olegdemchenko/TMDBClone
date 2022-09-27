import { css } from '@emotion/react';
import { BorderRadiuses, ThemeColors } from '../../../../common/styles';

const commonWidth = 150;

export const textWrapperStyles = css({
  width: commonWidth,
  height: 100,
  border: `2px solid ${ThemeColors.lightGray}`,
  borderTop: 'none',
  borderRadius: `0 0 ${BorderRadiuses.medium}px ${BorderRadiuses.medium}px`,
});

export const logoSizeStyles = css({
  width: commonWidth,
  height: 200,
});
