import React from 'react';
import Alert from 'react-bootstrap/Alert';
import useUpdatePageAfterScroll from '../../common/hooks/useUpdatePageAfterScroll';
import { SendQuery } from '../../common/hooks/useStoredUseQuery';
import { isDataDefined } from '../../common/utils';
import { MovieListItem } from '../../app/APIInterfaces';
import Wrapper from '../gallery/GalleryWrapper';
import Spinner from './spinner';
import GalleryItemsList from '../gallery/GalleryItemsList';

interface MovieCollectionProps {
  heading: string,
  sendQuery: SendQuery
}

function MovieCollection({
  heading,
  sendQuery,
}: MovieCollectionProps) {
  const page = useUpdatePageAfterScroll();
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
        list={data as (MovieListItem)[]}
      />
    </Wrapper>
  );
}

export default MovieCollection;
