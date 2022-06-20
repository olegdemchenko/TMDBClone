import React from 'react';
import Container from 'react-bootstrap/Container';
import { css } from '@emotion/react';

interface WrapperProps {
  children: React.ReactNode
}

const innerShadowStyles = css({
  position: 'relative',
  '&::after': {
    position: 'absolute',
    content: '""',
    top: 0,
    left: 0,
    right: 0,
    bottom: '4rem',
    backgroundImage: 'linear-gradient(to right, transparent 93%, white)',
  },
});

const hiddenVerticalScrollbarStyles = css({
  overflowY: 'hidden',
});

function Wrapper({ children }: WrapperProps) {
  return (
    <Container
      fluid="lg"
      className="p-4 pe-0"
      css={innerShadowStyles}
    >
      <div
        className="pb-4"
        css={hiddenVerticalScrollbarStyles}
      >
        {children}
      </div>
    </Container>
  );
}

export default Wrapper;
