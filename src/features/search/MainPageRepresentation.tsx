import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export interface SearchUIProps {
  onSubmit: (e: React.SyntheticEvent) => void;
  onChange: () => void;
  error: string | null;
}

export default function ({
  onSubmit,
  onChange,
  error,
}: SearchUIProps) {
  return (
    <Container fluid="lg" className="px-4 search">
      <h1 className="fw-bold mb-0">Welcome.</h1>
      <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group className="position-relative">
          <Form.Control
            name="search input"
            className="p-2 ps-3 border-0 rounded-pill"
            placeholder="Search for a movie, tv show, person..."
            onChange={onChange}
            isInvalid={!!error}
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
          <Button type="submit" className="py-2 px-4 border-0 position-absolute top-0 end-0 rounded-pill fw-bold">Search</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
