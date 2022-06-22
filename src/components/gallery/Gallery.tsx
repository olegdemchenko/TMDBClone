import React, { useState } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { AxiosBaseQueryErr } from '../../app/store/axiosBaseQuery';
import { MovieList } from '../../app/APIInterfaces';
import GalleryRow from './GalleryRow';
import GalleryMultiline from './GalleryMultiline';

type UseQueryResult = {
  data?: MovieList;
  currentData?: MovieList;
  error?: AxiosBaseQueryErr | SerializedError;
  isFetching: boolean;
  isError: boolean;
};

type UseQuery = (page: number) => UseQueryResult;

interface GalleryProps {
  heading: string;
  mode: 'row' | 'multiline';
  sendQuery: UseQuery;
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
  if (mode === 'row') {
    return (
      <GalleryRow
        heading={heading}
        contentState={{
          isError,
          isFetching,
          error,
          data,
        }}
      />
    );
  }
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
