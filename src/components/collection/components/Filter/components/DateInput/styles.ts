import { css } from '@emotion/react';
import { ThemeColors } from '../../../../../../common/styles';
import calendar from './assets/img/calendar.svg';

export const dateInputStyles = css({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  visibility: 'hidden',
  border: 'none',
  '&:before': {
    position: 'absolute',
    visibility: 'visible',
    width: 30,
    top: 2,
    right: 2,
    bottom: 2,
    content: '""',
    borderRadius: '0 3px 3px 0',
    backgroundColor: ThemeColors.lightGray,
    zIndex: 5,
  },
  '&:after': {
    position: 'absolute',
    visibility: 'visible',
    width: 30,
    height: '100%',
    top: 0,
    right: 0,
    content: '""',
    background: `url(${calendar})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: '25% 25%',
    zIndex: 8,
  },
  '&:hover': {
    '&:before': {
      backgroundColor: ThemeColors.gray,
    },
  },
});
