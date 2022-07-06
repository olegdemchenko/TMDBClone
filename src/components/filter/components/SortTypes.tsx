import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  selectStyles,
  headingStyles,
  containerStyles,
  noBorderStyles,
} from '../styles';

function SortTypes() {
  const { t } = useTranslation('collection');
  return (
    <form css={[containerStyles, noBorderStyles]}>
      <label css={headingStyles} htmlFor="sortOptions">{t('filter.sort.heading')}</label>
      <select id="sortOptions" css={selectStyles}>
        <option>{t('filter.sort.options.popularityDesc')}</option>
        <option>{t('filter.sort.options.popularityAsc')}</option>
        <option>{t('filter.sort.options.rateDesc')}</option>
        <option>{t('filter.sort.options.rateAsc')}</option>
        <option>{t('filter.sort.options.releaseDateDesc')}</option>
        <option>{t('filter.sort.options.releaseDateAsc')}</option>
        <option>{t('filter.sort.options.titleAZ')}</option>
        <option>{t('filter.sort.options.titleZA')}</option>
      </select>
    </form>
  );
}

export default SortTypes;
