import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import { css } from '@emotion/react';

import { ThemeColors } from '../../common/styles';

const ButtonStyles = css({
  width: '100%',
  margin: '25px 0 40px 0',
  backgroundColor: ThemeColors.lightBlue,
  color: 'white',
  fontSize: '2rem',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: ThemeColors.lightBlue,
    color: 'black',
  },
});

interface ButtonProps {
  onClick: () => void;
  text: string;
}

function LoadMore({ onClick, text }: ButtonProps) {
  return (
    <BootstrapButton
      variant='primary'
      css={ButtonStyles}
      onClick={() => onClick()}
    >
      {text}
    </BootstrapButton>
  );
}

export default LoadMore;
