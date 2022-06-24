import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query';
import axiosBaseQuery from '../../app/store/axiosBaseQuery';
import { isDataDefined } from '../../common/utils';
import { MovieList, MovieListResults } from '../../app/APIInterfaces';
import Wrapper from '../gallery/GalleryWrapper';
import Spinner from '../spinner';
import GalleryItemsList from '../gallery/GalleryItemsList';

interface MovieCollectionProps {
  heading: string,
  sendQuery: UseQuery<QueryDefinition<number, typeof axiosBaseQuery, any, MovieListResults[]>>
}

function MovieCollection({
  heading,
  sendQuery,
}: MovieCollectionProps) {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    function fetchExtraMovies() {
      setPage((currPage: number) => currPage + 1);
    }

    window.addEventListener('scroll', fetchExtraMovies);
    return () => window.removeEventListener('scroll', fetchExtraMovies);
  }, []);
  const {
    isError,
    isFetching,
    error,
    data,
  } = sendQuery(page);

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
    <Wrapper mode="screen">
      <h3 className="m-0 pb-4">{heading}</h3>
      <GalleryItemsList
        mode="multiline"
        heading={heading}
        list={data}
      />
    </Wrapper>
  );
}

export default MovieCollection;
