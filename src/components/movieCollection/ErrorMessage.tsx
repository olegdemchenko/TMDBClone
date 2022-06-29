import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Modal show centered>
      <Modal.Body>
        <h4>{message}</h4>
      </Modal.Body>
    </Modal>
  );
}

export default ErrorMessage;
