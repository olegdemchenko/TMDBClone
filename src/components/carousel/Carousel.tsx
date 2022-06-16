import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { css } from '@emotion/react';
import { MovieList } from '../../app/APIInterfaces';
import { useFetch, FetchState } from '../../common/hooks';
import CarouselSlide from './CarouselSlide';

interface CarouselProps {
  heading: string,
  slidesDataLink: string
}

const innerShadowStyles = css({
  position: 'relative',
  '&::after': {
    position: 'absolute',
    content: '""',
    top: 0,
    left: 0,
    right: 0,
    bottom: '4rem',
    backgroundImage: 'linear-gradient(to right, transparent 93%, white)',
  },
});

const hiddenVerticalScrollbarStyles = css({
  overflowY: 'hidden',
});

function Carousel({
  heading,
  slidesDataLink,
}: CarouselProps) {
  const [state, response, error] = useFetch<MovieList>(slidesDataLink);
  let components: React.ReactNode;
  if (state === FetchState.fetching) {
    components = <div className="d-flex justify-content-center py-3"><Spinner animation="grow" /></div>;
  }
  if (state === FetchState.error) {
    components = <Alert variant="danger">{error}</Alert>;
  }
  if (response) {
    components = (
      <div className="pt-3 d-flex flex-no-wrap">
        {response.results.map((elem) => (
          <CarouselSlide
            key={elem.id}
            poster={elem.poster_path}
            title={elem.title}
            date={elem.release_date}
            rate={elem.vote_average}
            alt={`${heading}: ${elem.title ?? ''}`}
          />
        ))}
      </div>
    );
  }
  return (
    <Container
      fluid="lg"
      className="p-4 pe-0"
      css={innerShadowStyles}
    >
      <div
        className="pb-4"
        css={hiddenVerticalScrollbarStyles}
      >
        <h4>{heading}</h4>
        {components}
      </div>
    </Container>
  );
}

export default Carousel;
