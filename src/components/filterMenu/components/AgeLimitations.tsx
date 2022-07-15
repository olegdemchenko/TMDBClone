import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  headingStyles,
  containerStyles,
  buttonStyles,
} from '../styles';

function AgeLimitations() {
  const { t } = useTranslation('collection');
  return (
    <div css={containerStyles}>
      <p css={headingStyles}>{t('filter.filters.age.name')}</p>
      <div>
        <button css={buttonStyles} type="button">{t('filter.filters.age.adult')}</button>
      </div>
    </div>
  );
}

export default AgeLimitations;
