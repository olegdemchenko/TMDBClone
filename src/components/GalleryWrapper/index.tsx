import React from 'react';
import Container from 'react-bootstrap/Container';

interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <Container fluid='lg' className='p-4'>
      {children}
    </Container>
  );
}

export default Wrapper;
