import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useGetTVDetailsQuery } from '../../app/store/api';
import useRetrieveIdFromLocation from '../MovieDetails/hooks/useRetrieveIdFromLocation';
import FooterContainer from '../FooterContainer';
import Header from '../Header';
import Spinner from '../Spinner';
import CenteredContainer from '../CenteredContainer';
import MainInformation from './components/MainInformation';
import MediaContent from './components/MediaContent';

function TVShowDetails() {
  const tvShowId = useRetrieveIdFromLocation();
  const { isLoading, isError, error } = useGetTVDetailsQuery(tvShowId);
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
      <MainInformation />
      <MediaContent />
    </FooterContainer>
  );
}

export default TVShowDetails;
