import React from 'react';
import cn from 'classnames';
import { css } from '@emotion/react';
import { MovieListResults } from '../../app/APIInterfaces';
import GalleryItem from './GalleryItem';

interface GalleryListItemsProps {
  list: MovieListResults[];
  heading: string,
  mode: 'row' | 'multiline',
}

const GalleryListStyles = css({
  paddingTop: '3rem',
  display: 'flex',
  flexWrap: 'nowrap',
  gap: 25,
});

function GalleryItemsList({
  list,
  heading,
  mode,
}: GalleryListItemsProps) {
  return (
    <div css={GalleryListStyles}>
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
          size="medium"
        />
      ))}
    </div>
  );
}

export default GalleryItemsList;
