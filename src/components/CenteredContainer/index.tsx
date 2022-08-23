import React from 'react';
import Container from 'react-bootstrap/Container';

interface CenteredContainerProps {
  children: React.ReactNode;
}

function CenteredContainer({ children }: CenteredContainerProps) {
  return (
    <Container fluid='lg' className='p-4'>
      {children}
    </Container>
  );
}

export default CenteredContainer;
