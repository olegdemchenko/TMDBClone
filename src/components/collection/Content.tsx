import React from 'react';
import { MovieListItem } from '../../app/APIInterfaces';
import GalleryItemsList from '../gallery/GalleryItemsList';

interface ContentProps {
  heading: string
  list: MovieListItem[]
}

function Content({
  heading,
  list,
}: ContentProps) {
  return (
    <>
      <h3 className="m-0 pb-4">{heading}</h3>
      <div>
        <GalleryItemsList
          mode="multiline"
          heading={heading}
          list={list}
        />
      </div>
    </>
  );
}

export default Content;
