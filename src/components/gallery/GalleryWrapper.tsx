import React from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import { css } from '@emotion/react';

interface WrapperProps {
  mode: 'row' | 'screen';
  children: React.ReactNode;
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

function Wrapper({ children, mode }: WrapperProps) {
  return (
    <Container
      fluid='lg'
      className={cn('p-4', { 'pe-0': mode === 'row' })}
      css={mode === 'row' ? innerShadowStyles : {}}
    >
      {mode === 'row' ? (
        <div className='pb-4' css={hiddenVerticalScrollbarStyles}>
          {children}
        </div>
      ) : (
        children
      )}
    </Container>
  );
}

export default Wrapper;
