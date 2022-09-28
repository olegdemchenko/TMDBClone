import React from 'react';
import { css } from '@emotion/react';
import { MovieDetails } from '../../../../app/TMDBAPIInterfaces';
import Cast from '../../../../components/Cast';
import CenteredContainer from '../../../../components/CenteredContainer';
import Background from '../../../../components/Background';
import Description from '../Description';
import Media from '../../../../components/Media';
import MovieInfo from '../MovieInfo';
import Recommendations from '../../../../components/Recommendations';
import Keywords from '../../../../components/Keywords';

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
            <Media mediaType='movie' />
            <hr />
            <Recommendations mediaType='movie' />
          </div>
          <div className='px-4' css={css({ width: infoWidth })}>
            <MovieInfo
              revenue={info.revenue}
              originalLanguage={info.original_language}
              budget={info.budget}
              status={info.status}
            />
            <Keywords mediaType='movie' />
          </div>
        </div>
      </CenteredContainer>
    </div>
  );
}

export default Content;
