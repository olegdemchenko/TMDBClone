import React from 'react';
import { css } from '@emotion/react';
import { MovieListItem, TVListItem } from '../../app/TMDBAPIInterfaces';
import { getReleaseDate, getTitle } from '../../common/utils';
import GalleryItem from './components/Item';
import { commonStyles, rowListStyles, multilineListStyles } from './styles';

interface GalleryProps {
  list: MovieListItem[] | TVListItem[];
  heading: string;
  mode: 'row' | 'multiline';
}

function Gallery({ list, heading, mode }: GalleryProps) {
  const changeableStyles = mode === 'row' ? rowListStyles : multilineListStyles;
  return (
    <div css={css(commonStyles, changeableStyles)}>
      {list.map((elem) => (
        <GalleryItem
          key={elem.id}
          data={{
            poster: elem.poster_path,
            title: getTitle(elem),
            date: getReleaseDate(elem),
            rate: elem.vote_average,
            alt: `${heading}: ${getTitle(elem) ?? ''}`,
          }}
          size={mode === 'row' ? 'medium' : 'large'}
        />
      ))}
    </div>
  );
}

export default Gallery;
