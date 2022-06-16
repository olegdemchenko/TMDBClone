import React from 'react';
import { css } from '@emotion/react';
import LinesEllipsis from 'react-lines-ellipsis';
import notFound from '../../assets/img/notFound.png';
import { imagePaths } from '../../routes/routes';
import { ThemeColors } from '../../common/styles';

interface ResultElemProps {
  title?: string;
  logo?: string | null;
  date?: string;
  description?: string;
}

const movieInfoStyle = css({
  borderRadius: 10,
  border: `2px solid ${ThemeColors.lightGray}`,
});

const logoWrapperStyle = css({
  width: 92,
  height: 138,
  borderRadius: '10px 0 0 10px',
});

const infoWrapperStyle = css({
  padding: '15px 15px 0 15px',
});

function MovieInfo({
  title,
  logo,
  date,
  description,
}: ResultElemProps) {
  const icon = logo ? `${imagePaths.searchResIcon}${logo}` : notFound;
  return (
    <div className="mb-3 d-flex overflow-hidden" css={movieInfoStyle}>
      <div className="flex-shrink-0" css={logoWrapperStyle}>
        <img src={icon} alt="logo" />
      </div>
      <div className="flex-grow-1" css={infoWrapperStyle}>
        <h6 className="m-0 fs-5 fw-bold">{title}</h6>
        <p className="text-muted">{date}</p>
        <LinesEllipsis
          text={description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="words"
        />
      </div>
    </div>
  );
}

export default MovieInfo;
