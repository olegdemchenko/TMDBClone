import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useGetMovieDetailsQuery } from '../../app/store/api/movies';
import CenteredContainer from '../CenteredContainer';
import Spinner from '../Spinner';
import Content from './components/Content';
import { MovieDetails } from '../../app/TMDBAPIInterfaces';
import FooterContainer from '../FooterContainer';
import Header from '../Header';
import { useRetrieveIdFromLocation } from '../../common/hooks';

function Details() {
  const movieId = useRetrieveIdFromLocation();
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
      <Content info={data as MovieDetails} />
    </FooterContainer>
  );
}

export default Details;
