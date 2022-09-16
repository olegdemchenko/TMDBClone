import React from 'react';
import _ from 'lodash';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('details');
  const messages = {
    video: t('noVideos'),
    backdrop: t('noBackdrops'),
    poster: t('noPosters'),
  };
  return (
    <div css={[sliderStyles, containerStyles]}>
      {children.length > 0 ? (
        children.map((elem) => (
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
        ))
      ) : (
        <div className='d-flex align-items-center'>
          <p className='fs-5'>{messages[slideSize]}</p>
        </div>
      )}
    </div>
  );
}

export default Slider;
