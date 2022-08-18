import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import notFound from './assets/img/notFound.png';
import { imagePaths } from '../../../routes/routes';
import { movieInfoStyle, logoWrapperStyle, infoWrapperStyle } from './styles';

interface ResultElemProps {
  title?: string;
  logo?: string | null;
  date?: string;
  description?: string;
}

function MovieInfo({ title, logo, date, description }: ResultElemProps) {
  const icon = logo ? `${imagePaths.searchResIcon}${logo}` : notFound;
  return (
    <div className='mb-3 d-flex overflow-hidden' css={movieInfoStyle}>
      <div className='flex-shrink-0' css={logoWrapperStyle}>
        <img src={icon} alt='logo' />
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
