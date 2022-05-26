import React from 'react';
import Container from 'react-bootstrap/Container';
import Search from '../search/Search';

function SearchResults() {
  return (
    <div>
      <div className="border-bottom">
        <Container className="px-4">
          <Search mode="results" />
        </Container>
      </div>
    </div>
  );
}

export default SearchResults;
