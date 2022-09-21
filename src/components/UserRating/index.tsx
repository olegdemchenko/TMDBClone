import React from 'react';
import Progressbar from 'react-js-progressbar';
import { useTranslation } from 'react-i18next';
import { ThemeColors } from '../../common/styles';

interface UserRatingProps {
  rating?: number;
}

function UserRating({ rating = 0 }: UserRatingProps) {
  const { t } = useTranslation('details');
  return (
    <div className='py-2'>
      <Progressbar
        size={60}
        input={Math.round(rating * 10)}
        backgroundColor={ThemeColors.darkBlue}
        pathColor={['#1eb068', '#cccf30']}
        textStyle={{
          fontSize: '4.5rem',
          fill: 'white',
        }}
      />
      <span className='ps-2'>{t('userScore')}</span>
    </div>
  );
}

export default UserRating;
