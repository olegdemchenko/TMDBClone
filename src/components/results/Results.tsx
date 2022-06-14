import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { MultiSearchResults } from '../../app/APIInterfaces';
import routes from '../../routes/routes';
import { useFetch, FetchState } from '../../common/hooks';
import Search from '../search/Search';
import Statistics from './Statistics';
import ResultsList from './ResultsList';
import Pagination from './Pagination';

function Results() {
  const [params] = useSearchParams();
  const searchQuery = params.get('query');
  const page = params.get('page');
  const url = routes.getMultiSearch(searchQuery, page);
  const [state, response, error] = useFetch<MultiSearchResults>(url);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchQuery, page]);

  if (state === FetchState.fetching) {
    return (
      <Container fluid="lg" className="d-flex vh-100 justify-content-center align-items-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (state === FetchState.error) {
    return (
      <Container fluid="lg" className="py-4">
        <Alert className="m-0" variant="danger">{`Error: ${error}`}</Alert>
      </Container>
    );
  }

  if (response) {
    return (
      <div>
        <div className="border-bottom">
          <Container fluid="lg" className="px-4">
            <Search mode="results" />
          </Container>
        </div>
        <Container fluid="lg" className="p-4 d-flex">
          <div className="statistics-wrapper flex-shrink-0">
            <Statistics searchData={response.results} />
          </div>
          <div className="flex-grow-1 overflow-hidden">
            <ResultsList
              results={response.results}
              page={response.page}
              total_pages={response.total_pages}
              total_results={response.total_results}
            />
            <div className="d-flex justify-content-center">
              <Pagination
                currentPage={response.page}
                total={response.total_pages}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return null;
}

export default Results;
