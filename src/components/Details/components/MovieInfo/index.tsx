import React from 'react';
import { MovieDetails } from '../../../../app/TMDBAPIInterfaces';
import CenteredContainer from '../../../CenteredContainer';
import Background from '../Background';
import Description from '../Description';

interface MovieInfoProps {
  info: MovieDetails;
}

function MovieInfo({ info }: MovieInfoProps) {
  return (
    <Background imagePath={info.backdrop_path}>
      <CenteredContainer>
        <Description details={info} />
      </CenteredContainer>
    </Background>
  );
}

export default MovieInfo;
