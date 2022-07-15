import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ReducerAction,
  ActionTypes,
} from '../state';
import {
  headingStyles,
  containerStyles,
} from '../styles';
import DateInput from './DateInput';

interface DatesProps {
  dispatch: React.Dispatch<ReducerAction>
}

function Dates({ dispatch }: DatesProps) {
  const { t } = useTranslation('collection');
  return (
    <div css={containerStyles}>
      <p css={headingStyles}>{t('filter.filters.dates.name')}</p>
      <DateInput label={t('filter.filters.dates.from')} />
      <div className="pb-2" />
      <DateInput label={t('filter.filters.dates.to')} />
    </div>
  );
}

export default Dates;
