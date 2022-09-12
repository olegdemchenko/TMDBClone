import React from 'react';
import _ from 'lodash';
import { css } from '@emotion/react';

interface SliderProps {
  children: React.ReactNode[];
  slideWidth: 'small' | 'medium';
}

const sliderStyles = css({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'scroll',
});

function Slider({ children, slideWidth }: SliderProps) {
  return (
    <div css={sliderStyles}>
      {children.map((elem) => (
        <div
          key={_.uniqueId()}
          css={css({
            width: slideWidth === 'small' ? 150 : 300,
            height: 200,
            flexShrink: 0,
          })}
        >
          {elem}
        </div>
      ))}
    </div>
  );
}

export default Slider;
