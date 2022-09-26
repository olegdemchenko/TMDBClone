import React from 'react';
import { css } from '@emotion/react';
import { MovieDetails } from '../../../../app/TMDBAPIInterfaces';
import Cast from '../../../Cast';
import CenteredContainer from '../../../CenteredContainer';
import Background from '../../../Background';
import Description from '../Description';
import Media from '../Media';
import MovieInfo from '../MovieInfo';
import Recommendations from '../Recommendations';

interface ContentProps {
  info: MovieDetails;
}

function Content({ info }: ContentProps) {
  const infoWidth = 300;
  return (
    <div>
      <Background imagePath={info.backdrop_path}>
        <CenteredContainer>
          <Description details={info} />
        </CenteredContainer>
      </Background>
      <CenteredContainer>
        <div className='d-flex'>
          <div css={css({ width: `calc(100% - ${infoWidth}px)` })}>
            <Cast mediaType='movie' />
            <hr />
            <Media />
            <hr />
            <Recommendations />
          </div>
          <div className='px-4' css={css({ width: infoWidth })}>
            <MovieInfo
              revenue={info.revenue}
              originalLanguage={info.original_language}
              budget={info.budget}
              status={info.status}
            />
          </div>
        </div>
      </CenteredContainer>
    </div>
  );
}

export default Content;
