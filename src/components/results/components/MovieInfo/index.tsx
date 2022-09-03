import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { imagePaths } from '../../../../routes';
import { movieInfoStyle, logoWrapperStyle, infoWrapperStyle } from './styles';
import Logo from '../../../Logo';

interface ResultElemProps {
  title?: string;
  logo?: string | null;
  date?: string;
  description?: string;
}

function MovieInfo({ title, logo, date, description }: ResultElemProps) {
  return (
    <div className='mb-3 d-flex overflow-hidden' css={movieInfoStyle}>
      <div className='flex-shrink-0' css={logoWrapperStyle}>
        <Logo
          type='media'
          borderRadius='left'
          path={imagePaths.searchResIcon}
          imgName={logo}
        />
      </div>
      <div className='flex-grow-1' css={infoWrapperStyle}>
        <h6 className='m-0 fs-5 fw-bold'>{title}</h6>
        <p className='text-muted'>{date}</p>
        <LinesEllipsis
          text={description}
          maxLine='2'
          ellipsis='...'
          trimRight
          basedOn='words'
        />
      </div>
    </div>
  );
}

export default MovieInfo;
