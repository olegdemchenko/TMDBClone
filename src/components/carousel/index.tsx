import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { css } from '@emotion/react';
import { SendQuery } from '../../common/hooks/useCachedQueryData';
import { isDataDefined } from '../../common/utils';
import Spinner from '../GrowingSpinner';
import Gallery from '../Gallery';
import ShadowWrapper from '../ShadowWrapper';

interface CarouselProps {
  heading: string;
  sendQuery: SendQuery;
}

function Carousel({ heading, sendQuery }: CarouselProps) {
  const { isError, isFetching, error, data } = sendQuery(1);
  if (isFetching) {
    return (
      <Container fluid='lg' className='p-4 pe-0'>
        <Spinner />
      </Container>
    );
  }
  if (isError) {
    return (
      <Container fluid='lg' className='p-4 pe-0'>
        <Alert variant='danger'>
          {error?.message ?? 'Unknown error has happened.'}
        </Alert>
      </Container>
    );
  }
  isDataDefined(data);
  return (
    <Container fluid='lg' className='p-4 pe-0'>
      <h4>{heading}</h4>
      <ShadowWrapper>
        <div css={css({ paddingBottom: 20, overflowY: 'hidden' })}>
          <Gallery mode='row' list={data} />
        </div>
      </ShadowWrapper>
    </Container>
  );
}

export default Carousel;
