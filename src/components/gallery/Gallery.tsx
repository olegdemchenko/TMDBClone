import React, { useState } from 'react';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query';
import axiosBaseQuery from '../../app/store/axiosBaseQuery';
import { MovieList } from '../../app/APIInterfaces';
import GalleryMultiline from './GalleryMultiline';

interface GalleryProps {
  heading: string;
  mode: 'row' | 'multiline';
  sendQuery: UseQuery<QueryDefinition<number, typeof axiosBaseQuery, any, MovieList>>;
}

function Gallery({
  heading,
  mode,
  sendQuery,
}: GalleryProps) {
  const [page, setPage] = useState<number>(1);
  const {
    isError,
    isFetching,
    error,
    data,
  } = sendQuery(page);
  if (mode === 'multiline') {
    return (
      <GalleryMultiline
        heading={heading}
        setPage={setPage}
        contentState={{
          isError,
          isFetching,
          error,
          data,
        }}
      />
    );
  }
  return null;
}

export default Gallery;
