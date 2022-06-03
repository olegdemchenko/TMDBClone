import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SearchUIProps } from './MainPageSearch';

function ResultsPageSearch({
  handleChange,
  handleSubmit,
  errors,
}: SearchUIProps) {
  return (
    <Form className="position-relative search-results" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className="border-0 ps-4"
          name="searchQuery"
          placeholder="Search for a movie, tv show, person..."
          onChange={handleChange}
          isInvalid={!!errors.searchQuery}
        />
        <Form.Control.Feedback type="invalid">
          {errors.searchQuery}
        </Form.Control.Feedback>
        <Button variant="light" className="border-0 p-0 position-absolute fs-4 top-0 start-0" type="submit">{'\u2315'}</Button>
      </Form.Group>
    </Form>
  );
}

export default ResultsPageSearch;
