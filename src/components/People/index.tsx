import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetPopularPeopleQuery } from '../../app/store/api';
import ErrorMessage from '../Collection/components/ErrorMessage';
import Spinner from '../Spinner';
import CustomPagination from '../Pagination';
import CenteredContainer from '../CenteredContainer';
import List from './components/List/index.';

function People() {
  const { t } = useTranslation('people');
  const [searchParams] = useSearchParams();
  const selectedPage = Number(searchParams.get('page')) || 1;
  const { data, isLoading, isError, error } =
    useGetPopularPeopleQuery(selectedPage);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return (
      <ErrorMessage message={error?.message ?? 'Unknown error has happened.'} />
    );
  }
  return (
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
  );
}

export default People;
