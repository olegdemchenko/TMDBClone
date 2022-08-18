import { css } from '@emotion/react';
import { ThemeColors, BorderRadiuses } from '../../../../common/styles';

export const movieInfoStyle = css({
  borderRadius: BorderRadiuses.medium,
  border: `2px solid ${ThemeColors.lightGray}`,
});

export const logoWrapperStyle = css({
  width: 92,
  height: 138,
  borderRadius: `${BorderRadiuses.medium}px 0 0 ${BorderRadiuses.medium}px`,
});

export const infoWrapperStyle = css({
  padding: '15px 15px 0 15px',
});
