import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { MovieListResults } from '../../app/APIInterfaces';
import { useFetch, FetchState } from '../../common/hooks';
import CarouselSlide from './CarouselSlide';

interface CarouselProps {
  heading: string,
  slidesDataLink: string
}

function Carousel({
  heading,
  slidesDataLink,
}: CarouselProps) {
  const [state, response, error] = useFetch<MovieListResults>(slidesDataLink);
  let components: React.ReactNode;
  if (state === FetchState.fetching) {
    components = <div className="d-flex justify-content-center py-3"><Spinner animation="grow" /></div>;
  }
  if (state === FetchState.error) {
    components = <Alert variant="danger">{error}</Alert>;
  }
  if (response) {
    components = (
      <div className="pt-3 gallery">
        {response.results.map((elem) => (
          <CarouselSlide
            key={elem.id}
            poster={elem.poster_path}
            title={elem.title}
            date={elem.release_date}
            rate={elem.vote_average}
          />
        ))}
      </div>
    );
  }
  return (
    <Container fluid="lg" className="p-4 pe-0 shadow-inner">
      <div className="pb-4 hide-scrollbar-y">
        <h4>{heading}</h4>
        {components}
      </div>
    </Container>
  );
}

export default Carousel;
