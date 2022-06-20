import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { MovieList } from '../../app/APIInterfaces';
import { isDataDefined } from '../../common/utils';
import GallerySpinner from './GallerySpinner';
import { useFetch, FetchState } from '../../common/hooks';
import GalleryItemsList from './GalleryItemsList';
import Wrapper from './GalleryWrapper';

interface CarouselProps {
  heading: string,
  slidesDataLink: string
}

function Carousel({
  heading,
  slidesDataLink,
}: CarouselProps) {
  const [state, response, error] = useFetch<MovieList>(slidesDataLink);
  if (state === FetchState.fetching) {
    return (
      <Wrapper>
        <GallerySpinner />
      </Wrapper>
    );
  }
  if (state === FetchState.error) {
    return (
      <Wrapper>
        <Alert variant="danger">{error}</Alert>
      </Wrapper>
    );
  }
  isDataDefined(response);
  return (
    <Wrapper>
      <h4>{heading}</h4>
      <GalleryItemsList
        heading={heading}
        list={response.results}
      />
    </Wrapper>
  );
}

export default Carousel;
