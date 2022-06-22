import React from 'react';
import cn from 'classnames';
import { MovieListResults } from '../../app/APIInterfaces';
import GalleryItem from './GalleryItem';

interface GalleryListItemsProps {
  list: MovieListResults[];
  heading: string,
  mode: 'row' | 'multiline',
}

function GalleryItemsList({
  list,
  heading,
  mode,
}: GalleryListItemsProps) {
  return (
    <div className={cn(
      'pt-3',
      {
        'd-flex': mode === 'row',
        'flex-no-wrap': mode === 'row',
      },
    )}
    >
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
