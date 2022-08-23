import React from 'react';
import Container from 'react-bootstrap/Container';
import { innerShadowStyles, hiddenVerticalScrollbarStyles } from './styles';

interface CarouselContainerProps {
  children: React.ReactNode;
}

function CarouselContainer({ children }: CarouselContainerProps) {
  return (
    <Container fluid='lg' className='p-4 pe-0' css={innerShadowStyles}>
      <div className='pb-4' css={hiddenVerticalScrollbarStyles}>
        {children}
      </div>
    </Container>
  );
}

export default CarouselContainer;
