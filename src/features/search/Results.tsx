import React, { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import routes from '../../routes/routes';
import Search from '.';
import Statistics from './Statistics';
import ResultsList from './ResultsList';

function Results() {
  const [params] = useSearchParams();
  const searchQuery = params.get('query');

  useEffect(() => {
    async function fetchSearchQueryRes() {
      const url = routes.getMultiSearch(searchQuery);
      try {
        const { data } = await axios.get(url);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchSearchQueryRes();
  }, [searchQuery]);

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
