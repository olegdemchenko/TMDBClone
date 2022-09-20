import { css } from '@emotion/react';
import close from './assets/img/close.png';

export const containerStyles = css({
  width: 500,
  position: 'relative',
});

export const modalStyles = css({
  '@media (min-width: 576px)': {
    '.modal-dialog': {
      maxWidth: '80%',
    },
  },
  '.modal-content': {
    backgroundColor: 'black',
    color: 'white',
    border: 0,
  },
  '.modal-body': {
    height: '70vh',
    padding: 0,
  },
  '.modal-header': {
    borderBottom: 0,
  },
  '.btn-close': {
    background: `transparent url(${close}) center/1em auto no-repeat`,
  },
});
