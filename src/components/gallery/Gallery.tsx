import React from 'react';

import { SerializedError } from '@reduxjs/toolkit';
import { AxiosBaseQueryErr } from '../../app/store/axiosBaseQuery';
import { MovieList } from '../../app/APIInterfaces';
import GalleryRow from './GalleryRow';

type UseQueryResult = {
  data?: MovieList;
  currentData?: MovieList;
  error?: AxiosBaseQueryErr | SerializedError;
  isFetching: boolean;
  isError: boolean;
};

type UseQuery = () => UseQueryResult;

interface CarouselProps {
  heading: string;
  mode: 'row' | 'multiline';
  sendQuery: UseQuery;
}

function Carousel({
  heading,
  mode,
  sendQuery,
}: CarouselProps) {
  const {
    isError,
    isFetching,
    error,
    data,
  } = sendQuery();
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
  return null;
}

export default Carousel;
