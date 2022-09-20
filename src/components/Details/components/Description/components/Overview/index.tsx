import React from 'react';
import { useTranslation } from 'react-i18next';

interface OverviewProps {
  tagline?: string | null;
  overview?: string | null;
}

function Overview({ tagline = '', overview = '' }: OverviewProps) {
  const { t } = useTranslation('details');

  return (
    <div className='py-2'>
      <p className='fst-italic fs-5 m-0'>{tagline}</p>
      <p className='fs-5 fw-bold my-1 m-0'>{t('overview')}</p>
      <p className='m-0'>{overview}</p>
    </div>
  );
}

export default Overview;
