import React from 'react';
import { css } from '@emotion/react';
import { MovieListItem } from '../../app/TMDBAPIInterfaces';
import GalleryItem from './GalleryItem';

interface GalleryListItemsProps {
  list: MovieListItem[];
  heading: string,
  mode: 'row' | 'multiline',
}

const listGap = 25;
const commonStyles = css({
  display: 'flex',
  gap: listGap,
  flexGrow: 1,
  alignContent: 'start',
});

const RowListStyles = css({
  paddingTop: '3rem',
  flexWrap: 'nowrap',
});

const multilineListStyles = css({
  display: 'grid',
  gridTemplateColumns: `repeat(5, calc((100% - ${4 * listGap}px) / 5))`,
  '@media (max-width: 1200px)': {
    gridTemplateColumns: `repeat(4, calc((100% - ${3 * listGap}px) / 4))`,
  },
  '@media (max-width: 1000px)': {
    gridTemplateColumns: `repeat(3, calc((100% - ${2 * listGap}px) / 3))`,
  },
  '@media (max-width: 850px)': {
    gridTemplateColumns: `repeat(2, calc((100% - ${listGap}px) / 2))`,
  },
  '@media (max-width: 700px)': {
    gridTemplateColumns: '100%',
  },
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
