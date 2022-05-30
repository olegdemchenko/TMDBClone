import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import routes from '../../routes/routes';
import Search from '.';
import Statistics from './Statistics';
import ResultsList from './ResultsList';

enum SearchResultsState {
  fetching = 'fetching',
  success = 'success',
  error = 'error',
}
function Results() {
  const [state, setState] = useState<SearchResultsState>(SearchResultsState.fetching);

  const [results, setResults] = useState({});

  const [error, setError] = useState<string | null>(null);

  const [params] = useSearchParams();
  const searchQuery = params.get('query');

  useEffect(() => {
    async function fetchSearchQueryRes() {
      const url = routes.getMultiSearch(searchQuery);
      setState(SearchResultsState.fetching);
      try {
        const { data } = await axios.get(url);
        console.log(data);
        setState(SearchResultsState.success);
        setResults(data);
      } catch (err) {
        if (err instanceof AxiosError) {
          setState(SearchResultsState.error);
          setError(err.response?.data?.status_message);
        }
        throw err;
      }
    }
    fetchSearchQueryRes();
  }, [searchQuery]);

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
        <Alert className="m-0" variant="danger">{error}</Alert>
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
          <Statistics />
        </div>
        <div className="flex-grow-1 overflow-hidden">
          <ResultsList />
        </div>
      </Container>
    </div>
  );
}

export default Results;
