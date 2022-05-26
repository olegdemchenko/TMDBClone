import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SearchUIProps } from './MainPageRepresentation';

function ResultsPageRepresentation({
  onChange,
  onSubmit,
  error,
}: SearchUIProps) {
  return (
    <div className="border-bottom">
      <Container className="px-4">
        <Form className="position-relative search-results" onSubmit={onSubmit}>
          <Form.Control
            className="border-0 ps-4"
            name="search input"
            onChange={onChange}
            isInvalid={!!error}
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
          <Button variant="light" className="border-0 p-0 position-absolute fs-4 top-0 start-0" type="submit">{'\u2315'}</Button>
        </Form>
      </Container>
    </div>
  );
}

export default ResultsPageRepresentation;
