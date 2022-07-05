import React from 'react';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import {
  headingStyles,
  containerStyles,
  noBorderStyles,
} from './styles';

const commonRangeStyles = css({
  width: '100%',
  position: 'relative',
  marginBottom: 20,
});

function makeMeasurementsScalesStyle(min:number, max:number) {
  return css({
    '&:before': {
      position: 'absolute',
      content: `"${min}"`,
      top: 10,
      left: 0,
    },
    '&:after': {
      position: 'absolute',
      content: `"${max}"`,
      top: 10,
      right: 0,
    },
  });
}

function UserRatings() {
  const { t } = useTranslation('collection');
  const scoresMeasurementsScaleStyles = makeMeasurementsScalesStyle(0, 10);
  const votesMeasurementsScaleStyles = makeMeasurementsScalesStyle(0, 500);
  return (
    <form css={[containerStyles, noBorderStyles]}>
      <label css={headingStyles} htmlFor="userScore">{t('filter.filters.userScore')}</label>
      <input css={[commonRangeStyles, scoresMeasurementsScaleStyles]} type="range" name="" id="userScore" />
      <label css={headingStyles} htmlFor="userVotes">{t('filter.filters.userVotes')}</label>
      <input css={[commonRangeStyles, votesMeasurementsScaleStyles]} type="range" name="" id="userVotes" />
    </form>
  );
}

export default UserRatings;
