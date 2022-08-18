import React from 'react';
import Progressbar from 'react-js-progressbar';
import notFound from './assets/img/notFound.png';
import { imagePaths } from '../../../routes/routes';
import { ThemeColors } from '../../../common/styles';
import {
  containerStyles,
  iconStyles,
  textStyles,
  progressbarContainerStyles,
} from './styles';

interface GalleryItemProps {
  data: {
    poster?: string | null;
    title?: string;
    date?: string;
    rate?: number;
    alt: string;
  };
  size: 'medium' | 'large';
}

function GalleryItem({
  data: { poster, title, date, rate = 0, alt },
  size,
}: GalleryItemProps) {
  const icon = poster
    ? `${imagePaths.gallerySlidePoster[size]}${poster}`
    : notFound;
  return (
    <div css={containerStyles[size]}>
      <div>
        <img src={icon} alt={alt} css={iconStyles[size]} />
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
      <div css={textStyles[size]}>
        <p className='m-0 mt-4 fw-bolder'>{title}</p>
        <p className='m-0 text-secondary'>{date}</p>
      </div>
    </div>
  );
}

export default GalleryItem;
