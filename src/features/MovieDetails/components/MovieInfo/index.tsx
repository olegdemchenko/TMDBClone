import React from 'react';
import { useTranslation } from 'react-i18next';

interface MovieInfoProps {
  budget?: number;
  revenue?: number;
  originalLanguage?: string;
  status?: string;
}

function MovieInfo({
  budget = 0,
  revenue = 0,
  originalLanguage = '-',
  status,
}: MovieInfoProps) {
  const { t } = useTranslation('details');
  return (
    <div>
      <h6>{t('status')}</h6>
      <p>{t(`statuses.${status ?? 'NoStatus'}`)}</p>
      <h6>{t('origLanguage')}</h6>
      <p>{originalLanguage}</p>
      <h6>{t('budget')}</h6>
      <p>$ {budget}</p>
      <h6>{t('revenue')}</h6>
      <p>$ {revenue}</p>
    </div>
  );
}

export default MovieInfo;
