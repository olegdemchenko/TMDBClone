import React from 'react';
import _ from 'lodash';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import {
  headingStyles,
  containerStyles,
  buttonStyles,
  buttonSelectedStyles,
} from '../styles';
import { genres } from '../constants';

const buttonWrapperStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
});

const checkboxStyles = css({
  display: 'none',
});

interface GenresProps {
  selectedGenres: number[];
  addGenre: (genre: number) => void;
  deleteGenre: (genre: number) => void;
}

function Genres({ selectedGenres, addGenre, deleteGenre }: GenresProps) {
  const { t } = useTranslation('collection');
  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement & {
      value: number;
    };
    const genreId = Number(target.value);
    const isGenreAlreadySelected = selectedGenres.includes(genreId);
    if (isGenreAlreadySelected) {
      deleteGenre(genreId);
    } else {
      addGenre(genreId);
    }
  };

  return (
    <div css={containerStyles}>
      <p css={headingStyles}>{t('filter.filters.genres.name')}</p>
      <form css={buttonWrapperStyles} onChange={handleChange}>
        {Object.entries(genres).map(([genreKey, genreId]) => {
          const inputId = `${genreKey}-input`;
          const selectedStyle = selectedGenres.includes(genreId)
            ? buttonSelectedStyles
            : {};
          return (
            <div key={_.uniqueId()}>
              <label htmlFor={inputId} css={[buttonStyles, selectedStyle]}>
                {t(`filter.filters.genres.${genreKey}`)}
              </label>
              <input
                css={checkboxStyles}
                type='checkbox'
                id={inputId}
                value={genreId}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Genres;
