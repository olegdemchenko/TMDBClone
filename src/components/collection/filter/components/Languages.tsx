import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { selectStyles, headingStyles, containerStyles } from '../styles';
import { languages } from '../constants';

interface LanguagesProps {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
}

function Languages({ currentLanguage, setLanguage }: LanguagesProps) {
  const { t } = useTranslation('collection');
  return (
    <form css={containerStyles}>
      <label css={headingStyles} htmlFor='languages'>
        {t('filter.filters.languages.name')}
      </label>
      <select
        id='languages'
        css={selectStyles}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
        value={currentLanguage}
      >
        {Object.entries(languages).map(([key, value]) => (
          <option key={_.uniqueId()} value={value}>
            {t(`filter.filters.languages.${key}`)}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Languages;
