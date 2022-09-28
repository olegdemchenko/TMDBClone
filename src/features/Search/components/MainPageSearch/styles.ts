import { css } from '@emotion/react';
import { ThemeColors } from '../../../../common/styles';

export const searchStyles = css({
  position: 'relative',
  paddingTop: '5rem',
  paddingBottom: '5rem',
  backgroundColor: ThemeColors.darkBlue,
  color: 'white',
  '&:after': {
    position: 'absolute',
    top: -100,
    left: 0,
    content: '""',
    width: '100%',
    height: 100,
    backgroundColor: ThemeColors.darkBlue,
  },
});

export const sloganStyles = css({
  paddingBottom: '4rem',
});

export const buttonStyles = css({
  backgroundColor: ThemeColors.lightBlue,
  '&:hover': {
    backgroundColor: ThemeColors.lightBlue,
    color: 'black',
  },
});
