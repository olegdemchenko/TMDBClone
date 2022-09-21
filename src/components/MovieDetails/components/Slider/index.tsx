import React from 'react';
import { css } from '@emotion/react';

interface SliderProps {
  children: React.ReactNode | React.ReactNode[];
}

const sliderStyles = css({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowY: 'hidden',
});

function Slider({ children }: SliderProps) {
  return <div css={sliderStyles}>{children}</div>;
}

export default Slider;
