import React from 'react';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import {
  headingStyles,
  containerStyles,
  buttonStyles,
} from '../styles';

const buttonWrapperStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
});

function Genres() {
  const { t } = useTranslation('collection');
  return (
    <div css={containerStyles}>
      <p css={headingStyles}>{t('filter.filters.genres.name')}</p>
      <div css={buttonWrapperStyles}>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.action')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.adventure')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.animation')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.western')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.war')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.mystery')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.documentary')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.drama')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.history')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.comedy')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.crime')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.romance')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.musical')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.family')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.tvMovie')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.thriller')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.horror')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.sci-fi')}</button>
        <button css={buttonStyles} type="button">{t('filter.filters.genres.fantasy')}</button>
      </div>
    </div>
  );
}

export default Genres;
