import React from 'react';
import { css } from '@emotion/react';
import { MovieListItem } from '../../app/APIInfo';
import GalleryItemsList from '../gallery/GalleryItemsList';
import Filter from '../filter/components/Filter';

interface ContentProps {
  heading: string
  list: MovieListItem[]
}

const filterWrapperStyles = css({
  width: 300,
  paddingRight: 25,
  flexShrink: 0,
});

function Content({
  heading,
  list,
}: ContentProps) {
  return (
    <>
      <h3 className="m-0 pb-4">{heading}</h3>
      <div className="d-flex">
        <div css={filterWrapperStyles}>
          <Filter />
        </div>
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
