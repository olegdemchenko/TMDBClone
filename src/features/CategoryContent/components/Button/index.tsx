import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import { buttonStyles } from './styles';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

function Button({ onClick, text }: ButtonProps) {
  return (
    <BootstrapButton
      variant='primary'
      css={buttonStyles}
      onClick={() => onClick()}
    >
      {text}
    </BootstrapButton>
  );
}

export default Button;
