import React from 'react';
import Modal from 'react-bootstrap/Modal';
import BootstrapSpinner from 'react-bootstrap/Spinner';
import { modalStyles, spinnerSizeStyles } from './styles';

function Spinner() {
  return (
    <Modal css={modalStyles} show centered>
      <BootstrapSpinner
        css={spinnerSizeStyles}
        animation='border'
        variant='primary'
        data-testid='collectionSpinner'
      />
    </Modal>
  );
}

export default Spinner;
