import React from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { useGetMovieDetailsQuery } from '../../app/store/api/movies';
import { extractIDFromMediaPath } from '../../routes';
import CenteredContainer from '../CenteredContainer';
import Spinner from '../Spinner';
import MovieInfo from './components/MovieInfo';
import { MovieDetails } from '../../app/TMDBAPIInterfaces';
import FooterContainer from '../FooterContainer';
import Header from '../Header';

function Details() {
  const { movieCredentials } = useParams<'movieCredentials'>();
  const movieId = extractIDFromMediaPath(movieCredentials);
  const { data, isLoading, isError, error } = useGetMovieDetailsQuery(
    Number(movieId)
  );
  if (isLoading) {
    return (
      <FooterContainer>
        <Header />
        <Spinner />
      </FooterContainer>
    );
  }
  if (isError) {
    <FooterContainer>
      <Header />
      <CenteredContainer>
        <Alert variant='danger'>
          {error?.message ?? 'Unknown error has happened.'}
        </Alert>
      </CenteredContainer>
    </FooterContainer>;
  }
  return (
    <FooterContainer>
      <Header />
      <MovieInfo info={data as MovieDetails} />
    </FooterContainer>
  );
}

export default Details;
