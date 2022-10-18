import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from '../../../../components/Spinner';
import { useGetPersonCombinedCreditsQuery } from '../../../../app/store/api';
import { useRetrieveIdFromLocation } from '../../../../common/hooks';
import KnownFor from './components/KnownFor';
import Jobs from './components/Jobs';

function Works() {
  const personId = useRetrieveIdFromLocation();
  const { data, isFetching, isError, error } = useGetPersonCombinedCreditsQuery(
    Number(personId)
  );
  let renderedContent: React.ReactNode;
  if (isFetching) {
    renderedContent = <Spinner />;
  }
  if (isError) {
    renderedContent = (
      <Alert variant='danger'>
        {error?.message ?? 'Unknown error has happened.'}
      </Alert>
    );
  }
  if (data) {
    renderedContent = (
      <>
        <KnownFor />
        <Jobs />
      </>
    );
  }
  return <div>{renderedContent}</div>;
}

export default Works;
