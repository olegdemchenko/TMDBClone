import React from 'react';
import Container from 'react-bootstrap/Container';
import Search from '../search';
import Statistics from './Statistics';
import ResultsList from './ResultsList';

function SearchResults() {
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

export default SearchResults;
