import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  selectStyles,
  headingStyles,
  containerStyles,
} from './styles';

function Languages() {
  const { t } = useTranslation('collection');
  return (
    <form css={containerStyles}>
      <label css={headingStyles} htmlFor="languages">{t('filter.filters.languages.name')}</label>
      <select id="languages" css={selectStyles}>
        <option value="">{t('filter.filters.languages.none')}</option>
        <option value="">{t('filter.filters.languages.en')}</option>
        <option value="">{t('filter.filters.languages.zh')}</option>
        <option value="">{t('filter.filters.languages.hi')}</option>
        <option value="">{t('filter.filters.languages.es')}</option>
        <option value="">{t('filter.filters.languages.fr')}</option>
        <option value="">{t('filter.filters.languages.ar')}</option>
        <option value="">{t('filter.filters.languages.ru')}</option>
        <option value="">{t('filter.filters.languages.pt')}</option>
        <option value="">{t('filter.filters.languages.in')}</option>
      </select>
    </form>
  );
}

export default Languages;
