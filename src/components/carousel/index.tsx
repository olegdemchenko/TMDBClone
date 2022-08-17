import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { SendQuery } from '../../common/hooks/useCachedQueryData';
import { isDataDefined } from '../../common/utils';
import Spinner from '../spinner';
import GalleryItemsList from '../gallery/GalleryItemsList';
import Wrapper from '../gallery/GalleryWrapper';

interface CarouselProps {
  heading: string;
  sendQuery: SendQuery;
}

function Carousel({ heading, sendQuery }: CarouselProps) {
  const { isError, isFetching, error, data } = sendQuery(1);
  if (isFetching) {
    return (
      <Wrapper mode='row'>
        <Spinner />
      </Wrapper>
    );
  }
  if (isError) {
    return (
      <Wrapper mode='row'>
        <Alert variant='danger'>
          {error?.message ?? 'Unknown error has happened.'}
        </Alert>
      </Wrapper>
    );
  }
  isDataDefined(data);
  return (
    <Wrapper mode='row'>
      <h4>{heading}</h4>
      <GalleryItemsList mode='row' heading={heading} list={data} />
    </Wrapper>
  );
}

export default Carousel;
