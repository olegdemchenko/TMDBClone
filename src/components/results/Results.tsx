import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { css } from '@emotion/react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { useGetMultiSearchQuery } from '../../app/store/api';
import { isDataDefined } from '../../common/utils';
import Search from '../search/Search';
import Statistics from './Statistics';
import ResultsList from './ResultsList';
import Pagination from './pagination';
import { MultiSearchResults } from '../../app/APIInterfaces';

const statisticsWrapperStyles = css({
  width: 260,
});

function Results() {
  const [params] = useSearchParams();
  const searchQuery = params.get('query');
  const page = params.get('page');
  const {
    data,
    error,
    isFetching,
    isError,
  } = useGetMultiSearchQuery({ query: searchQuery as string, page: Number(page) as number });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchQuery, page]);

  if (isFetching) {
    return (
      <Container fluid="lg" className="d-flex vh-100 justify-content-center align-items-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container fluid="lg" className="py-4">
        <Alert className="m-0" variant="danger">{`Error: ${error}`}</Alert>
      </Container>
    );
  }

  isDataDefined<MultiSearchResults>(data);
  return (
    <div>
      <div className="border-bottom">
        <Container fluid="lg" className="px-4">
          <Search mode="results" />
        </Container>
      </div>
      <Container fluid="lg" className="p-4 d-flex">
        <div className="flex-shrink-0" css={statisticsWrapperStyles}>
          <Statistics searchData={data.results} />
        </div>
        <div className="flex-grow-1 overflow-hidden">
          <ResultsList
            results={data.results}
          />
          <div className="d-flex justify-content-center">
            <Pagination
              currentPage={data.page}
              total={data.total_pages}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Results;
