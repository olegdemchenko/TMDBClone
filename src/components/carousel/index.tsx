import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { SendQuery } from '../../common/hooks/useCachedQueryData';
import { isDataDefined } from '../../common/utils';
import Spinner from '../Spinner';
import GalleryItemsList from '../Gallery';
import CarouselContainerProps from './components/Container';

interface CarouselProps {
  heading: string;
  sendQuery: SendQuery;
}

function Carousel({ heading, sendQuery }: CarouselProps) {
  const { isError, isFetching, error, data } = sendQuery(1);
  if (isFetching) {
    return (
      <CarouselContainerProps>
        <Spinner />
      </CarouselContainerProps>
    );
  }
  if (isError) {
    return (
      <CarouselContainerProps>
        <Alert variant='danger'>
          {error?.message ?? 'Unknown error has happened.'}
        </Alert>
      </CarouselContainerProps>
    );
  }
  isDataDefined(data);
  return (
    <CarouselContainerProps>
      <h4>{heading}</h4>
      <GalleryItemsList mode='row' heading={heading} list={data} />
    </CarouselContainerProps>
  );
}

export default Carousel;
