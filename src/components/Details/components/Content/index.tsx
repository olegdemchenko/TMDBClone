import React from 'react';
import { MovieDetails } from '../../../../app/TMDBAPIInterfaces';
import CenteredContainer from '../../../CenteredContainer';
import Background from '../Background';
import Description from '../Description';
import Media from '../Media';
import Recommendations from '../Recommendations';

interface ContentProps {
  info: MovieDetails;
}

function Content({ info }: ContentProps) {
  return (
    <div>
      <Background imagePath={info.backdrop_path}>
        <CenteredContainer>
          <Description details={info} />
        </CenteredContainer>
      </Background>
      <CenteredContainer>
        <div className='d-flex'>
          <div className='w-75'>
            <Media id={info.id} />
            <hr />
            <Recommendations movieId={info.id} />
          </div>
          <div className='w-25' />
        </div>
      </CenteredContainer>
    </div>
  );
}

export default Content;
