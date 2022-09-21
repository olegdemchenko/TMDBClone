import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { detailsPaths, imagePaths } from '../../../../../../routes';
import Logo from '../../../../../Logo';

import { dateToStringWithSlash } from '../../../../../../common/utils';
import { BorderRadiuses } from '../../../../../../common/styles';
import { posterWrapperStyles, nameStyles } from './styles';

interface RecommendationProps {
  id: number;
  name?: string;
  posterPath?: string | null;
  date?: string;
  popularity?: number;
}

function Recommendation({
  id,
  name = '',
  posterPath,
  date = new Date().toDateString(),
  popularity = 0,
}: RecommendationProps) {
  const dateStyles = css({
    '&:hover:after': {
      position: 'absolute',
      content: `"🗉 ${dateToStringWithSlash(new Date(date))}"`,
      width: '100%',
      padding: '10px 20px',
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(255,255,255, 0.9)',
      borderRadius: `0 0 ${BorderRadiuses.medium}px ${BorderRadiuses.medium}px`,
    },
  });
  return (
    <Link to={detailsPaths.movie(id, name ?? '')}>
      <div className='pe-4'>
        <div css={[posterWrapperStyles, dateStyles]}>
          <Logo
            path={imagePaths.moviePosters.recommendations}
            imgName={posterPath}
            borderRadius='all'
            type='media'
          />
        </div>
        <p className='d-flex justify-content-between'>
          <span css={nameStyles}>{name}</span>
          <span>{Math.floor(popularity * 10)}%</span>
        </p>
      </div>
    </Link>
  );
}

export default Recommendation;
