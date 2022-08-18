import { css } from '@emotion/react';
import { ThemeColors, BorderRadiuses } from '../../../../../common/styles';

export const labelsStyles = css({
  fontSize: '0.9rem',
  color: ThemeColors.gray,
});

export const datesWrapperStyles = css({
  width: 150,
  position: 'relative',
  borderRadius: BorderRadiuses.small,
});
