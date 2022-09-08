import React from 'react';
import BootstrapSpinner from 'react-bootstrap/Spinner';

function GrowingSpinner() {
  return (
    <div className='d-flex justify-content-center align-items-center py-3 h-100'>
      <BootstrapSpinner animation='grow' />
    </div>
  );
}

export default GrowingSpinner;
