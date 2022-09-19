import React from 'react';
import { MovieDetails } from '../../../../app/TMDBAPIInterfaces';
import CenteredContainer from '../../../CenteredContainer';
import Background from '../Background';
import Description from '../Description';
import Media from '../Media';
import Recommendations from '../Recommendations';

interface MovieInfoProps {
  info: MovieDetails;
}

function MovieInfo({ info }: MovieInfoProps) {
  return (
    <div>
      <Background imagePath={info.backdrop_path}>
        <CenteredContainer>
          <Description details={info} />
        </CenteredContainer>
      </Background>
      <CenteredContainer>
        <Media id={info.id} />
        <hr />
        <Recommendations movieId={info.id} />
      </CenteredContainer>
    </div>
  );
}

export default MovieInfo;
