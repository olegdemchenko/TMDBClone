import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { MultiSearchResults, Error } from '../../app/APIInterfaces';
import routes from '../../routes/routes';
import Search from './Search';
import Statistics from './Statistics';
import ResultsList from './ResultsList';
import Pagination from './Pagination';

enum SearchResultsState {
  fetching = 'fetching',
  success = 'success',
  error = 'error',
}

const defaultSearchResults: MultiSearchResults = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
};

function Results() {
  const [state, setState] = useState<SearchResultsState>(SearchResultsState.fetching);

  const [results, setResults] = useState<MultiSearchResults>(defaultSearchResults);

  const [error, setError] = useState<string | null>(null);

  const [params] = useSearchParams();
  const searchQuery = params.get('query');
  const page = params.get('page');

  useEffect(() => {
    async function fetchSearchQueryRes() {
      const url = routes.getMultiSearch(searchQuery, page);
      setState(SearchResultsState.fetching);
      try {
        const { data } = await axios.get(url);
        setState(SearchResultsState.success);
        setResults(data);
      } catch (err) {
        if (err instanceof AxiosError) {
          const e = err.response?.data as Error;
          setState(SearchResultsState.error);
          setError(e.status_message ?? err.message);
          return;
        }
        throw err;
      }
    }
    fetchSearchQueryRes();
  }, [searchQuery, page]);

  if (state === SearchResultsState.fetching) {
    return (
      <Container fluid="lg" className="d-flex vh-100 justify-content-center align-items-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (state === SearchResultsState.error) {
    return (
      <Container fluid="lg" className="py-4">
        <Alert className="m-0" variant="danger">{`Error: ${error}`}</Alert>
      </Container>
    );
  }

  return (
    <div>
      <div className="border-bottom">
        <Container fluid="lg" className="px-4">
          <Search mode="results" />
        </Container>
      </div>
      <Container fluid="lg" className="p-4 d-flex">
        <div className="statistics-wrapper flex-shrink-0">
          <Statistics searchData={results.results} />
        </div>
        <div className="flex-grow-1 overflow-hidden">
          <ResultsList
            results={results.results}
            page={results.page}
            total_pages={results.total_pages}
            total_results={results.total_results}
          />
          <div className="d-flex justify-content-center">
            <Pagination
              currentPage={results.page}
              total={results.total_pages}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Results;
