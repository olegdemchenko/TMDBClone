import { css } from '@emotion/react';

const defaultYearStyles = css({
  display: 'inline-block',
  width: 80,
  textAlign: 'center',
  fontWeight: 'bold',
});

const circleStyles = css({
  display: 'inline-block',
  fontSize: '0.7rem',
  transform: 'translateY(-10%)',
});

const emptyYearStyles = css({
  position: 'relative',
  '&:after': {
    position: 'absolute',
    content: '"—"',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%) translateY(-80%)',
  },
});

export { defaultYearStyles, emptyYearStyles, circleStyles };
