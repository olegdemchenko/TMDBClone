import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetPopularPeopleQuery } from '../../app/store/api';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import CustomPagination from '../Pagination';
import CenteredContainer from '../CenteredContainer';
import List from './components/List/index.';
import FooterContainer from '../FooterContainer';
import Header from '../Header';

function People() {
  const { t } = useTranslation('people');
  const [searchParams] = useSearchParams();
  const selectedPage = Number(searchParams.get('page')) || 1;
  const { data, isLoading, isError, error } =
    useGetPopularPeopleQuery(selectedPage);
  if (isLoading) {
    return (
      <FooterContainer>
        <Header />
        <Spinner />
      </FooterContainer>
    );
  }
  if (isError) {
    return (
      <FooterContainer>
        <Header />
        <ErrorMessage
          message={error?.message ?? 'Unknown error has happened.'}
        />
      </FooterContainer>
    );
  }
  return (
    <FooterContainer>
      <Header />
      <CenteredContainer>
        <h3 className='m-0 pb-4'>{t('mainHeading')}</h3>
        <List people={data?.results ?? []} />
        <div className='d-flex justify-content-center'>
          <CustomPagination
            selectedPage={selectedPage}
            total={data?.total_pages ?? 1}
          />
        </div>
      </CenteredContainer>
    </FooterContainer>
  );
}

export default People;
