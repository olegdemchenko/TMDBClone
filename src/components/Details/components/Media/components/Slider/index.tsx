import React from 'react';
import _ from 'lodash';
import { css } from '@emotion/react';
import { containerStyles } from '../../styles';

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
  video: 400,
  backdrop: 500,
  poster: 200,
};

function Slider({ children, slideSize }: SliderProps) {
  return (
    <div css={[sliderStyles, containerStyles]}>
      {children.map((elem) => (
        <div
          key={_.uniqueId()}
          css={css({
            width: slideTypesSizes[slideSize],
            height: '100%',
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
