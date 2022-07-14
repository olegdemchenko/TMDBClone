import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  selectStyles,
  headingStyles,
  containerStyles,
  noBorderStyles,
} from '../styles';
import { SortAlg } from '../constants';
// eslint-disable-next-line import/no-cycle
import { ReducerAction } from './Filter';

interface SortTypesProps {
  dispatch: React.Dispatch<ReducerAction>
}

function SortTypes({ dispatch }: SortTypesProps) {
  const { t } = useTranslation('collection');

  return (
    <form
      css={[containerStyles, noBorderStyles]}
      onChange={(e) => {
        const target = e.target as (HTMLSelectElement & {
          value: SortAlg
        });
        dispatch({ type: 'SETSORTALG', payload: target.value });
      }}
    >
      <label css={headingStyles} htmlFor="sortOptions">{t('filter.sort.heading')}</label>
      <select id="sortOptions" css={selectStyles}>
        <option value={SortAlg.popularityDesc}>{t('filter.sort.options.popularityDesc')}</option>
        <option value={SortAlg.popularityAsc}>{t('filter.sort.options.popularityAsc')}</option>
        <option value={SortAlg.ratingDesc}>{t('filter.sort.options.rateDesc')}</option>
        <option value={SortAlg.ratingAsc}>{t('filter.sort.options.rateAsc')}</option>
        <option value={SortAlg.releaseDateDesc}>{t('filter.sort.options.releaseDateDesc')}</option>
        <option value={SortAlg.releaseDateAsc}>{t('filter.sort.options.releaseDateAsc')}</option>
        <option value={SortAlg.titleAZ}>{t('filter.sort.options.titleAZ')}</option>
        <option value={SortAlg.titleZA}>{t('filter.sort.options.titleZA')}</option>
      </select>
    </form>
  );
}

export default SortTypes;
