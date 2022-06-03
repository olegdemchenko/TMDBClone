import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SearchUIProps } from './MainPageSearch';

function ResultsPageSearch({
  onSubmit,
}: SearchUIProps) {
  return (
    <Form className="position-relative search-results" onSubmit={onSubmit}>
      <Form.Control
        className="border-0 ps-4"
        name="searchInput"
        placeholder="Search for a movie, tv show, person..."
      />
      <Button variant="light" className="border-0 p-0 position-absolute fs-4 top-0 start-0" type="submit">{'\u2315'}</Button>
    </Form>
  );
}

export default ResultsPageSearch;
