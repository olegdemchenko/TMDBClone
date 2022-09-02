import React from 'react';
import { MovieDetails } from '../../../../app/TMDBAPIInterfaces';
import Logo from '../Logo';
import Heading from '../Heading';
import UserRating from '../UserRating';
import Overview from '../Overview';
import ProductionInfo from '../ProductionInfo';
import { imagePaths } from '../../../../routes';

interface DescriptionProps {
  details: MovieDetails;
}

function Description({ details }: DescriptionProps) {
  return (
    <div className='d-flex text-light'>
      <div className='flex-shrink-0'>
        <Logo
          path={imagePaths.detailsPosters.medium}
          imgName={details.poster_path}
          width={300}
          height={450}
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
