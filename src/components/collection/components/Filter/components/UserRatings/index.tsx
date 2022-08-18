import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserRate } from '../../constants';
import { headingStyles, containerStyles, noBorderStyles } from '../../styles';
import { makeMeasurementsScalesStyle, commonRangeStyles } from './styles';

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
