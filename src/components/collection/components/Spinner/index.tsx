import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { modalStyles, spinnerSizeStyles } from './styles';

function CollectionSpinner() {
  return (
    <Modal css={modalStyles} show centered>
      <Spinner
        css={spinnerSizeStyles}
        animation='border'
        variant='primary'
        data-testid='collectionSpinner'
      />
    </Modal>
  );
}

export default CollectionSpinner;
