import React, { useState } from 'react';
import { css } from '@emotion/react';
import { MovieListItem } from '../../app/APIInfo';
import GalleryItemsList from '../gallery/GalleryItemsList';
import Filter from '../filterMenu/components/Filter';
import {
  FilterState,
  initialState,
} from '../filterMenu/state';
import filter from './filter';

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
  const [filterState, setFilterState] = useState<FilterState>(initialState);
  return (
    <>
      <h3 className="m-0 pb-4">{heading}</h3>
      <div className="d-flex">
        <div css={filterWrapperStyles}>
          <Filter setState={setFilterState} />
        </div>
        <GalleryItemsList
          mode="multiline"
          heading={heading}
          list={filter(filterState, list)}
        />
      </div>
    </>
  );
}

export default Content;
