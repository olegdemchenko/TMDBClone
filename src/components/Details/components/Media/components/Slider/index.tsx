import React from 'react';
import _ from 'lodash';
import { css } from '@emotion/react';

interface SliderProps {
  children: React.ReactNode[];
  slideSize: keyof typeof slideTypesSizes;
}

const sliderStyles = css({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowY: 'hidden',
});

export type SlideTypes = 'video' | 'backdrop' | 'poster';

const slideTypesSizes = {
  video: 300,
  backdrop: 450,
  poster: 200,
};

function Slider({ children, slideSize }: SliderProps) {
  return (
    <div css={sliderStyles}>
      {children.map((elem) => (
        <div
          key={_.uniqueId()}
          css={css({
            width: slideTypesSizes[slideSize],
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
