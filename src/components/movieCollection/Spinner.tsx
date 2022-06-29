import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { css } from '@emotion/react';
import Spinner from 'react-bootstrap/Spinner';

const modalStyles = css({
  '& .modal-content': {
    backgroundColor: 'transparent',
    alignItems: 'center',
    border: 'none',
  },
});

const spinnerSizeStyles = css({
  width: '5rem',
  height: '5rem',
});

function CollectionSpinner() {
  return (
    <Modal css={modalStyles} show centered>
      <Spinner css={spinnerSizeStyles} animation="border" variant="primary" />
    </Modal>
  );
}

export default CollectionSpinner;
