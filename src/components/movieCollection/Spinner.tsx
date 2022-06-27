import React from 'react';
import { css } from '@emotion/react';
import Spinner from 'react-bootstrap/Spinner';

const collectionSpinnerStyles = css({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(3, 37, 65, 0.5)',
  zIndex: 10000,
});

const spinnerSizeStyles = css({
  width: '5rem',
  height: '5rem',
});

function CollectionSpinner() {
  return <div css={collectionSpinnerStyles} data-testid="collectionSpinner"><Spinner css={spinnerSizeStyles} animation="border" variant="primary" /></div>;
}

export default CollectionSpinner;
