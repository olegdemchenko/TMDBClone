import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { TVApi } from '../../../../app/store/api';
import { RootState } from '../../../../app/store/store';
import { useRetrieveIdFromLocation } from '../../../../common/hooks';
import Logo from '../../../Logo';
import Heading from '../../../Heading';
import UserRating from '../../../UserRating';
import Overview from '../../../Overview';
import { imagePaths } from '../../../../routes';
import Background from '../../../Background';
import CenteredContainer from '../../../CenteredContainer';

function MainInformation() {
  const tvShowId = useRetrieveIdFromLocation();
  const { data: tvShowDetails } = useSelector((state: RootState) =>
    TVApi.endpoints.getTVDetails.select(tvShowId)(state)
  );
  if (!tvShowDetails) {
    return null;
  }
  return (
    <Background imagePath={tvShowDetails.backdrop_path}>
      <CenteredContainer>
        <div className='d-flex text-light'>
          <div className='flex-shrink-0' css={css({ width: 300, height: 450 })}>
            <Logo
              type='media'
              path={imagePaths.moviePosters.detailsDescription}
              imgName={tvShowDetails.poster_path}
              borderRadius='all'
            />
          </div>
          <div className='flex-grow-1 ps-4'>
            <Heading
              title={tvShowDetails.name}
              releaseDate={tvShowDetails.first_air_date}
              genres={tvShowDetails.genres}
              duration={tvShowDetails.episode_run_time[0] ?? 0}
            />
            <UserRating rating={tvShowDetails.vote_average} />
            <Overview
              tagline={tvShowDetails.tagline}
              overview={tvShowDetails.overview}
            />
          </div>
        </div>
      </CenteredContainer>
    </Background>
  );
}

export default MainInformation;
