import { css } from '@emotion/react';
import { BorderRadiuses } from '../../common/styles';

export const commonWrapperStyles = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
});

export const wrapperBackgroundStyles = css({
  backgroundColor: 'rgba(219, 219, 219)',
});

export const wrapperBorderStyles = {
  all: css({ borderRadius: BorderRadiuses.medium }),
  none: css({}),
  left: css({
    borderRadius: `${BorderRadiuses.medium}px 0 0 ${BorderRadiuses.medium}px`,
  }),
  top: css({
    borderRadius: `${BorderRadiuses.medium}px ${BorderRadiuses.medium}px 0 0`,
  }),
};

export type BorderRadiusTypes = keyof typeof wrapperBorderStyles;

export const commonImgStyles = css({
  width: '100%',
  alignSelf: 'center',
});

export const imgWidthStyles = css({ width: '50%' });
