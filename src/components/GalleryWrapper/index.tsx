import React from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import { innerShadowStyles, hiddenVerticalScrollbarStyles } from './styles';

interface WrapperProps {
  mode: 'row' | 'screen';
  children: React.ReactNode;
}

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
