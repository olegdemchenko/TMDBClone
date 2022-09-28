import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useGetTVDetailsQuery } from '../../app/store/api';
import { useRetrieveIdFromLocation } from '../../common/hooks';
import FooterContainer from '../FooterContainer';
import Header from '../Header';
import Spinner from '../../components/Spinner';
import CenteredContainer from '../../components/CenteredContainer';
import MainInformation from './components/MainInformation';
import MediaContent from './components/MediaContent';

function TVShowDetails() {
  const tvShowId = useRetrieveIdFromLocation();
  const { isLoading, isError, error } = useGetTVDetailsQuery(tvShowId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tvShowId]);
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
