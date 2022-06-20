import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { MovieList } from '../../app/APIInterfaces';
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
  let components: React.ReactNode;
  if (state === FetchState.fetching) {
    components = <GallerySpinner />;
  }
  if (state === FetchState.error) {
    components = <Alert variant="danger">{error}</Alert>;
  }
  if (response) {
    components = (
      <GalleryItemsList
        heading={heading}
        list={response.results}
      />
    );
  }
  return (
    <Wrapper>
      <h4>{heading}</h4>
      {components}
    </Wrapper>
  );
}

export default Carousel;
