import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetPopularPeopleQuery } from '../../app/store/api';
import CustomPagination from '../Pagination';

function People() {
  const [searchParams] = useSearchParams();
  const selectedPage = Number(searchParams.get('page')) || 1;
  const { data, isLoading, error } = useGetPopularPeopleQuery(selectedPage);
  if (isLoading) {
    return <h3>Please wait!</h3>;
  }
  return (
    <div>
      <p>{JSON.stringify(data?.results)}</p>
      <CustomPagination
        selectedPage={selectedPage}
        total={data?.total_pages ?? 1}
      />
    </div>
  );
}

export default People;
