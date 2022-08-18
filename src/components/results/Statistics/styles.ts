import { css } from '@emotion/react';
import { ThemeColors, BorderRadiuses } from '../../../common/styles';

export const statisticsContainerStyles = css({
  borderRadius: BorderRadiuses.medium,
  border: `2px solid ${ThemeColors.lightGray}`,
});

export const statisticsHeaderStyles = css({
  borderRadius: `${BorderRadiuses.medium}px ${BorderRadiuses.medium}px 0 0`,
  backgroundColor: ThemeColors.lightBlue,
});

export const categoryCountStyles = css({
  backgroundColor: ThemeColors.lightGray,
  padding: '0 10px',
  borderRadius: BorderRadiuses.small,
});

export const categoryStyles = css({
  '&:hover': {
    backgroundColor: ThemeColors.lightGray,
    '.category-count': {
      backgroundColor: 'white',
    },
  },
});

export const primaryCategoryStyles = css({
  backgroundColor: ThemeColors.lightGray,
  '.category-name': {
    fontWeight: 'bold',
  },
  '.category-count': {
    backgroundColor: 'white',
  },
});
