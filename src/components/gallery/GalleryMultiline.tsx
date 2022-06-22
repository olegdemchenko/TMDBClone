import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { SerializedError } from '@reduxjs/toolkit';
import { AxiosBaseQueryErr } from '../../app/store/axiosBaseQuery';
import { isDataDefined } from '../../common/utils';
import { MovieList } from '../../app/APIInterfaces';
import Wrapper from './GalleryWrapper';
import GallerySpinner from './GallerySpinner';
import GalleryItemsList from './GalleryItemsList';

interface GalleryMultilineProps {
  heading: string;
  setPage: (page: number) => void;
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
        <GallerySpinner />
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
    <Wrapper mode="screen">
      <h3>{heading}</h3>
      <GalleryItemsList
        mode="multiline"
        heading={heading}
        list={data.results}
      />
    </Wrapper>
  );
}

export default GalleryMultiline;
