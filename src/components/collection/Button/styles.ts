import { css } from '@emotion/react';
import { ThemeColors } from '../../../../common/styles';

export const buttonStyles = css({
  width: '100%',
  margin: '25px 0 40px 0',
  backgroundColor: ThemeColors.lightBlue,
  color: 'white',
  fontSize: '2rem',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: ThemeColors.lightBlue,
    color: 'black',
  },
});
