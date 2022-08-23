import { css } from '@emotion/react';
import { ThemeColors, BorderRadiuses } from '../../../../common/styles';

export const headingStyles = css({
  display: 'block',
  margin: 0,
  padding: '0 0 10px 0',
});

export const selectStyles = css({
  display: 'block',
  width: '100%',
  position: 'relative',
  padding: 5,
  border: 'none',
  borderRadius: BorderRadiuses.small,
  outline: 0,
  backgroundColor: ThemeColors.lightGray,
});

export const containerStyles = css({
  borderBottom: `1px solid ${ThemeColors.lightGray}`,
  padding: '1.25rem 1.25rem 1rem 1.25rem',
});

export const noBorderStyles = css({
  border: 'none',
});

export const buttonSelectedStyles = css({
  border: `1px solid ${ThemeColors.lightBlue}`,
  backgroundColor: ThemeColors.lightBlue,
  color: 'white',
});

export const buttonStyles = css({
  height: 30,
  verticalAlign: 'middle',
  border: `1px solid ${ThemeColors.gray}`,
  borderRadius: 15,
  padding: '0 15px',
  '&:hover': buttonSelectedStyles,
});
