import { css } from '@emotion/react';
import { ThemeColors, BorderRadiuses } from '../../../../common/styles';

export const containerStyles = {
  medium: css({
    position: 'relative',
    width: 154,
  }),
  large: css({
    position: 'relative',
    borderRadius: BorderRadiuses.medium,
    border: `2px solid ${ThemeColors.lightGray}`,
  }),
};

export const logoWrapperSizes = {
  medium: css({
    width: 154,
    height: 230,
  }),
  large: css({
    '@media (min-width: 1400px)': {
      height: 255,
    },
    '@media (max-width: 1400px)': {
      height: '16vw',
    },
    '@media (max-width: 1200px)': {
      height: '18vw',
    },
    '@media (max-width: 1000px)': {
      height: '27vw',
    },
    '@media (max-width: 850px)': {
      height: '36vw',
    },
    '@media (max-width: 700px)': {
      height: '57vw',
    },
  }),
};

export const textStyles = {
  medium: {},
  large: css({
    padding: 15,
  }),
};

export const progressbarContainerStyles = css({
  position: 'absolute',
  transform: 'translate(30%, -50%)',
  width: 40,
  height: 40,
  padding: 2,
  backgroundColor: ThemeColors.darkBlue,
  borderRadius: '50%',
});
