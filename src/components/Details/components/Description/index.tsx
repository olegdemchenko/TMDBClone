import React from 'react';
import { css } from '@emotion/react';
import { MovieDetails } from '../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../routes';
import Logo from '../../../Logo';
import Heading from './components/Heading';
import UserRating from './components/UserRating';
import Overview from './components/Overview';
import ProductionInfo from './components/ProductionInfo';

interface DescriptionProps {
  details: MovieDetails;
}

function Description({ details }: DescriptionProps) {
  return (
    <div className='d-flex text-light'>
      <div className='flex-shrink-0' css={css({ width: 300, height: 450 })}>
        <Logo
          type='media'
          path={imagePaths.moviePosters.detailsDescription}
          imgName={details.poster_path}
          borderRadius='all'
        />
      </div>
      <div className='flex-grow-1 ps-4'>
        <Heading
          title={details.title}
          releaseDate={details.release_date}
          genres={details.genres}
          duration={details.runtime}
        />
        <UserRating rating={details.vote_average} />
        <Overview tagline={details.tagline} overview={details.overview} />
        <ProductionInfo
          countries={details.production_countries}
          companies={details.production_companies}
        />
      </div>
    </div>
  );
}

export default Description;
