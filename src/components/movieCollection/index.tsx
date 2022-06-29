import React from 'react';
import useUpdatePageAfterScroll from '../../common/hooks/useUpdatePageAfterScroll';
import { SendQuery } from '../../common/hooks/useStoredUseQuery';
import Wrapper from '../gallery/GalleryWrapper';
import Spinner from './spinner';
import ErrorMessage from './ErrorMessage';
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
  return (
    <Wrapper mode="screen">
      { isFetching ? <Spinner /> : null }
      { isError ? <ErrorMessage message={error?.message ?? 'Unknown error has happened.'} /> : null }
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
