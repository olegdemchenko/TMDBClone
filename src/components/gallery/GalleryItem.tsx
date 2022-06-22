import React from 'react';
import { css } from '@emotion/react';
import Progressbar from 'react-js-progressbar';
import notFound from '../../assets/img/notFound.png';
import { imagePaths } from '../../routes/routes';
import { ThemeColors } from '../../common/styles';

interface GalleryItemProps {
  data: {
    poster?: string | null;
    title?: string;
    date?: string;
    rate?: number;
    alt: string;
  },
  size: 'medium' | 'large'
}

const slideStyles = css({
  position: 'relative',
  width: 154,
});

const iconStyles = css({
  borderRadius: 10,
});

const progressbarContainerStyles = css({
  position: 'absolute',
  transform: 'translate(30%, -50%)',
  width: 40,
  height: 40,
  padding: 2,
  backgroundColor: ThemeColors.darkBlue,
  borderRadius: '50%',
});

function GalleryItem({
  data: {
    poster,
    title,
    date,
    rate = 0,
    alt,
  },
  size,
}: GalleryItemProps) {
  const icon = poster ? `${imagePaths.carouselSlidePoster}${poster}` : notFound;
  return (
    <div css={size === 'medium' ? slideStyles : {}}>
      <div>
        <img src={icon} alt={alt} css={iconStyles} />
      </div>
      <div css={progressbarContainerStyles}>
        <Progressbar
          input={Math.round(rate * 10)}
          backgroundColor={ThemeColors.darkBlue}
          pathColor={['#1eb068', '#cccf30']}
          textStyle={{
            fontSize: '4.5rem',
            fill: 'white',
          }}
        />
      </div>
      <p className="m-0 mt-4 fw-bolder">{title}</p>
      <p className="m-0 text-secondary">{date}</p>
    </div>
  );
}

export default GalleryItem;
