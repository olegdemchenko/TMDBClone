import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { SerializedError } from '@reduxjs/toolkit';
import { AxiosBaseQueryErr } from '../../app/store/axiosBaseQuery';
import { isDataDefined } from '../../common/utils';
import { MovieList } from '../../app/APIInterfaces';
import Wrapper from './GalleryWrapper';
import Spinner from '../spinner';
import GalleryItemsList from './GalleryItemsList';
import GalleryScroll from './GalleryScroll';

interface GalleryMultilineProps {
  heading: string;
  setPage: (setState:(page: number) => number) => void;
  contentState: {
    data?: MovieList;
    error?: AxiosBaseQueryErr | SerializedError;
    isFetching: boolean;
    isError: boolean;
  }
}
function GalleryMultiline({
  heading,
  setPage,
  contentState: {
    data,
    error,
    isFetching,
    isError,
  },
}: GalleryMultilineProps) {
  if (isFetching) {
    return (
      <Wrapper mode="screen">
        <Spinner />
      </Wrapper>
    );
  }
  if (isError) {
    return (
      <Wrapper mode="screen">
        <Alert variant="danger">{ error?.message ?? 'Unknown error has happened.' }</Alert>
      </Wrapper>
    );
  }
  isDataDefined(data);
  return (
    <GalleryScroll callback={() => setPage((page: number) => page + 1)}>
      <Wrapper mode="screen">
        <h3 className="m-0 pb-4">{heading}</h3>
        <GalleryItemsList
          mode="multiline"
          heading={heading}
          list={data.results}
        />
      </Wrapper>
    </GalleryScroll>
  );
}

export default GalleryMultiline;
