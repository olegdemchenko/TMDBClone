import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { SerializedError } from '@reduxjs/toolkit';
import { AxiosBaseQueryErr } from '../../app/store/axiosBaseQuery';
import { MovieList } from '../../app/APIInterfaces';
import { isDataDefined } from '../../common/utils';
import GallerySpinner from './GallerySpinner';
import GalleryItemsList from './GalleryItemsList';
import Wrapper from './GalleryWrapper';

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
  sendQuery: UseQuery;
}

function Carousel({
  heading,
  sendQuery,
}: CarouselProps) {
  const {
    isFetching,
    isError,
    data,
    error,
  } = sendQuery();
  if (isFetching) {
    return (
      <Wrapper>
        <GallerySpinner />
      </Wrapper>
    );
  }
  if (isError) {
    return (
      <Wrapper>
        <Alert variant="danger">{ error?.message ?? 'Unknown error has happened.' }</Alert>
      </Wrapper>
    );
  }
  isDataDefined(data);
  return (
    <Wrapper>
      <h4>{heading}</h4>
      <GalleryItemsList
        heading={heading}
        list={data.results}
      />
    </Wrapper>
  );
}

export default Carousel;
