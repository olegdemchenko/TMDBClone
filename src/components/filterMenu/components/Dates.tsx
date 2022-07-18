import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ReducerAction,
  ActionTypes,
  Dates,
} from '../state';
import {
  headingStyles,
  containerStyles,
} from '../styles';
import DateForm from './DateForm';

interface DatesProps {
  dispatch: React.Dispatch<ReducerAction>
  dates: Dates
}

export default function ({
  dispatch,
  dates,
}: DatesProps) {
  const { t } = useTranslation('collection');
  return (
    <div css={containerStyles}>
      <p css={headingStyles}>{t('filter.filters.dates.name')}</p>
      <DateForm
        label={t('filter.filters.dates.from')}
        date={dates.from}
        setDate={(newDate: Date) => {
          dispatch({ type: ActionTypes.dates, payload: { from: newDate } });
        }}
      />
      <div className="pb-2" />
      <DateForm
        label={t('filter.filters.dates.to')}
        date={dates.to}
        setDate={(newDate: Date) => {
          dispatch({ type: ActionTypes.dates, payload: { to: newDate } });
        }}
      />
    </div>
  );
}
