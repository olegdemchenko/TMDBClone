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
import DateInput from './DateInput';

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
      <DateInput
        label={t('filter.filters.dates.from')}
        date={dates.from}
        setDate={(date: Date) => dispatch({ type: ActionTypes.dates, payload: { from: date } })}
      />
      <div className="pb-2" />
      <DateInput
        label={t('filter.filters.dates.to')}
        date={dates.to}
        setDate={(date: Date) => dispatch({ type: ActionTypes.dates, payload: { to: date } })}
      />
    </div>
  );
}
