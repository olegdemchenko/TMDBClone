import { css } from '@emotion/react';

export const pageItemStyles = css({
  '&.active .page-link': {
    border: '2px solid black',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'normal',
  },
  '&:first-child .page-link': {
    borderRadius: 0,
  },
});

export const pageLinkStyles = css({
  '& .page-link': {
    border: 'none',
    color: 'black',
    fontWeight: 'bold',
  },
});
