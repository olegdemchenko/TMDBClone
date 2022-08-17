import React from 'react';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { UserRate } from '../constants';
import { headingStyles, containerStyles, noBorderStyles } from '../styles';

const commonRangeStyles = css({
  width: '100%',
  position: 'relative',
  marginBottom: 20,
});

function makeMeasurementsScalesStyle(min: number, max: number) {
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

interface UserRatingsProps {
  currentRate: number;
  setRate: (rate: number) => void;
}

function UserRatings({ currentRate, setRate }: UserRatingsProps) {
  const { t } = useTranslation('collection');
  const scoresMeasurementsScaleStyles = makeMeasurementsScalesStyle(
    UserRate.min,
    UserRate.max
  );
  return (
    <form css={[containerStyles, noBorderStyles]}>
      <label css={headingStyles} htmlFor='userScore'>
        {t('filter.filters.userScore')}
      </label>
      <input
        css={[commonRangeStyles, scoresMeasurementsScaleStyles]}
        type='range'
        id='userScore'
        value={currentRate}
        min={UserRate.min}
        max={UserRate.max}
        step='1'
        onChange={(e) => setRate(Number(e.target.value))}
      />
    </form>
  );
}

export default UserRatings;
