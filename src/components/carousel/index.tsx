import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query';
import axiosBaseQuery from '../../app/store/api/axiosBaseQuery';
import { isDataDefined } from '../../common/utils';
import { MovieList } from '../../app/APIInterfaces';
import Spinner from '../spinner';
import GalleryItemsList from '../gallery/GalleryItemsList';
import Wrapper from '../gallery/GalleryWrapper';

interface CarouselProps {
  heading: string,
  sendQuery: UseQuery<QueryDefinition<number, typeof axiosBaseQuery, any, MovieList>>
}

function Carousel({
  heading,
  sendQuery,
}:CarouselProps) {
  const {
    isError,
    isFetching,
    error,
    data,
  } = sendQuery(1);
  if (isFetching) {
    return (
      <Wrapper mode="row">
        <Spinner />
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

export default Carousel;
