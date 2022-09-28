import { css } from '@emotion/react';
import { ThemeColors } from '../../../../common/styles';

export const listItemWidth = 185;

export const listItemStyles = css({
  width: listItemWidth,
  marginBottom: '30px',
});

export const photoWrapperStyles = css({
  height: '230px',
});

export const worksListStyles = css({
  color: ThemeColors.gray,
  margin: 0,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const textWrapperStyles = css({
  border: `1px solid ${ThemeColors.lightGray}`,
  borderTop: 0,
});
