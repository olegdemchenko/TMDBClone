import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useGetPersonDetailsQuery } from '../../app/store/api';
import CenteredContainer from '../../components/CenteredContainer';
import Spinner from '../../components/Spinner';
import { useRetrieveIdFromLocation } from '../../common/hooks';
import FooterContainer from '../FooterContainer';
import Header from '../Header';
import About from './components/About';

function PersonDetails() {
  const personId = useRetrieveIdFromLocation();
  const { isLoading, isError, error } = useGetPersonDetailsQuery(
    Number(personId)
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
      <CenteredContainer>
        <About />
      </CenteredContainer>
    </FooterContainer>
  );
}

export default PersonDetails;
