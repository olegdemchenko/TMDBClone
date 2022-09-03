import React from 'react';
import { Link } from 'react-router-dom';
import Progressbar from 'react-js-progressbar';
import { imagePaths, detailsPaths } from '../../../../routes';
import { ThemeColors } from '../../../../common/styles';
import Logo from '../../../Logo';
import {
  containerStyles,
  textStyles,
  progressbarContainerStyles,
} from './styles';

type MediaTypes = 'tv' | 'movie';

interface GalleryItemProps {
  data: {
    id: number;
    poster?: string | null;
    title?: string;
    date?: string;
    rate?: number;
  };
  size: 'medium' | 'large';
  contentType: MediaTypes;
}

function GalleryItem({
  data: { id, poster, title, date, rate = 0 },
  size,
  contentType,
}: GalleryItemProps) {
  return (
    <Link to={detailsPaths[contentType](id, title ?? '')}>
      <div css={containerStyles[size]}>
        <div>
          <Logo path={imagePaths.gallerySlidePoster[size]} imgName={poster} />
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
    </Link>
  );
}

export default GalleryItem;
