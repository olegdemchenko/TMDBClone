import React from 'react';
import { Link } from 'react-router-dom';
import Progressbar from 'react-js-progressbar';
import notFound from './assets/img/notFound.png';
import { imagePaths } from '../../../../routes';
import { ThemeColors } from '../../../../common/styles';
import {
  containerStyles,
  iconStyles,
  textStyles,
  progressbarContainerStyles,
} from './styles';
import { getMovieDetailsPath } from '../../../../common/utils';

type MediaTypes = 'tv' | 'movie';

interface GalleryItemProps {
  data: {
    id: number;
    poster?: string | null;
    title?: string;
    date?: string;
    rate?: number;
    alt: string;
  };
  size: 'medium' | 'large';
  contentType: MediaTypes;
}

function getLinkToDetails(contentType: MediaTypes, id: number, title = '') {
  const detailsPath = getMovieDetailsPath(id, title || '');
  return contentType === 'movie'
    ? `/movie/${detailsPath}`
    : `/tv/${detailsPath}`;
}

function GalleryItem({
  data: { id, poster, title, date, rate = 0, alt },
  size,
  contentType,
}: GalleryItemProps) {
  const icon = poster
    ? `${imagePaths.gallerySlidePoster[size]}${poster}`
    : notFound;
  return (
    <Link to={getLinkToDetails(contentType, id, title)}>
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
    </Link>
  );
}

export default GalleryItem;
