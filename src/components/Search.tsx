import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search() {
  return (
    <Container fluid="lg" className="px-4 search">
      <h1 className="fw-bold mb-0">Welcome.</h1>
      <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      <Form>
        <Form.Group className="position-relative">
          <Form.Control className="p-2 border-0 rounded-pill" />
          <Button className="py-2 px-4 border-0 position-absolute top-0 end-0 rounded-pill fw-bold">Search</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Search;
