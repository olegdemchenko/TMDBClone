import React from 'react';
import { css } from '@emotion/react';
import Progressbar from 'react-js-progressbar';
import notFound from '../../assets/img/notFound.png';
import { imagePaths } from '../../routes/routes';
import {
  ThemeColors,
  BorderRadiuses,
} from '../../common/styles';

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

const containerStyles = {
  medium: css({
    position: 'relative',
    width: 154,
  }),
  large: css({
    position: 'relative',
    borderRadius: BorderRadiuses.medium,
    border: `2px solid ${ThemeColors.lightGray}`,
  }),
};

const iconStyles = {
  medium: css({
    borderRadius: BorderRadiuses.medium,
  }),
  large: css({
    width: '100%',
    borderRadius: `${BorderRadiuses.medium}px ${BorderRadiuses.medium}px 0 0`,
  }),
};

const textStyles = {
  medium: {},
  large: css({
    padding: 15,
  }),
};

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
  const icon = poster ? `${imagePaths.gallerySlidePoster[size]}${poster}` : notFound;
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
        <p className="m-0 mt-4 fw-bolder">{title}</p>
        <p className="m-0 text-secondary">{date}</p>
      </div>
    </div>
  );
}

export default GalleryItem;
