import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { SendQuery } from '../../common/hooks/useCachedQueryData';
import { isDataDefined } from '../../common/utils';
import Spinner from './components/Spinner';
import Gallery from '../Gallery';
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
      <Gallery mode='row' list={data} />
    </CarouselContainerProps>
  );
}

export default Carousel;
