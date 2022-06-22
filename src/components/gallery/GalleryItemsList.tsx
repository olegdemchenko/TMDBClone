import React from 'react';
import { css } from '@emotion/react';
import { MovieListResults } from '../../app/APIInterfaces';
import GalleryItem from './GalleryItem';

interface GalleryListItemsProps {
  list: MovieListResults[];
  heading: string,
  mode: 'row' | 'multiline',
}

const commonStyles = css({
  display: 'flex',
  gap: 25,
});

const RowListStyles = css({
  paddingTop: '3rem',
  flexWrap: 'nowrap',
});

const multilineListStyles = css({
  flexWrap: 'wrap',
});

function GalleryItemsList({
  list,
  heading,
  mode,
}: GalleryListItemsProps) {
  const changeableStyles = mode === 'row' ? RowListStyles : multilineListStyles;
  return (
    <div css={css(commonStyles, changeableStyles)}>
      {list.map((elem) => (
        <GalleryItem
          key={elem.id}
          data={{
            poster: elem.poster_path,
            title: elem.title,
            date: elem.release_date,
            rate: elem.vote_average,
            alt: `${heading}: ${elem.title ?? ''}`,
          }}
          size={mode === 'row' ? 'medium' : 'large'}
        />
      ))}
    </div>
  );
}

export default GalleryItemsList;
