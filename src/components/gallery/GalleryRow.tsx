import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { SerializedError } from '@reduxjs/toolkit';
import { AxiosBaseQueryErr } from '../../app/store/axiosBaseQuery';
import { isDataDefined } from '../../common/utils';
import { MovieList } from '../../app/APIInterfaces';
import GallerySpinner from './GallerySpinner';
import GalleryItemsList from './GalleryItemsList';
import Wrapper from './GalleryWrapper';

interface GalleryRowProps {
  heading: string;
  contentState: {
    data?: MovieList;
    error?: AxiosBaseQueryErr | SerializedError;
    isFetching: boolean;
    isError: boolean;
  }
}

function GalleryRow({
  heading,
  contentState: {
    data,
    error,
    isError,
    isFetching,
  },
}:GalleryRowProps) {
  if (isFetching) {
    return (
      <Wrapper mode="row">
        <GallerySpinner />
      </Wrapper>
    );
  }
  if (isError) {
    return (
      <Wrapper mode="row">
        <Alert variant="danger">{ error?.message ?? 'Unknown error has happened.' }</Alert>
      </Wrapper>
    );
  }
  isDataDefined(data);
  return (
    <Wrapper mode="row">
      <h4>{heading}</h4>
      <GalleryItemsList
        mode="row"
        heading={heading}
        list={data.results}
      />
    </Wrapper>
  );
}

export default GalleryRow;
