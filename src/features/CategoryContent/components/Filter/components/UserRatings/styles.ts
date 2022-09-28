import { css } from '@emotion/react';

export const commonRangeStyles = css({
  width: '100%',
  position: 'relative',
  marginBottom: 20,
});

export function makeMeasurementsScalesStyle(min: number, max: number) {
  return css({
    '&:before': {
      position: 'absolute',
      content: `"${min}"`,
      top: 10,
      left: 0,
    },
    '&:after': {
      position: 'absolute',
      content: `"${max}"`,
      top: 10,
      right: 0,
    },
  });
}
