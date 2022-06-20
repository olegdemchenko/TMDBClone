import React from 'react';
import { MovieListResults } from '../../app/APIInterfaces';
import GalleryItem from './GalleryItem';

interface GalleryListItemsProps {
  list: MovieListResults[];
  heading: string,
}

function GalleryItemsList({
  list,
  heading,
}: GalleryListItemsProps) {
  return (
    <div className="pt-3 d-flex flex-no-wrap">
      {list.map((elem) => (
        <GalleryItem
          key={elem.id}
          poster={elem.poster_path}
          title={elem.title}
          date={elem.release_date}
          rate={elem.vote_average}
          alt={`${heading}: ${elem.title ?? ''}`}
        />
      ))}
    </div>
  );
}

export default GalleryItemsList;
