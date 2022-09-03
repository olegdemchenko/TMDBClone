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
