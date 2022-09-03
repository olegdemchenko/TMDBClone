import { css } from '@emotion/react';
import { BorderRadiuses } from '../../common/styles';

export const commonWrapperStyles = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: BorderRadiuses.medium,
  overflow: 'hidden',
});

export const wrapperBackgroundStyles = css({
  backgroundColor: 'rgba(219, 219, 219)',
});

export const commonImgStyles = css({
  width: '100%',
  alignSelf: 'center',
});

export const imgWidthStyles = css({ width: '50%' });
