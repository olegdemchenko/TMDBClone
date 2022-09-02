import React from 'react';
import { MovieDetails } from '../../../../app/TMDBAPIInterfaces';
import {
  dateToStringWithSlash,
  extractYearFromDate,
} from '../../../../common/utils';

interface HeadingProps {
  title?: string;
  releaseDate?: string;
  genres?: MovieDetails['genres'];
  duration?: number;
}

function convertDurationToHrs(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}h ${minutes}m`;
}

function Heading({
  title = '',
  releaseDate = new Date().toISOString(),
  genres = [],
  duration = 0,
}: HeadingProps) {
  return (
    <div>
      <h3 className='fw-bold m-0'>
        {title}
        <span className='fw-normal ps-2 fs-4'>{`(${extractYearFromDate(
          new Date(releaseDate)
        )})`}</span>
      </h3>
      <p className='m-0'>
        {dateToStringWithSlash(new Date(releaseDate))}
        <span className='fw-bold'> · </span>
        {genres.map(({ name }) => name).join(', ')}
        <span className='fw-bold'> · </span>
        {convertDurationToHrs(duration)}
      </p>
    </div>
  );
}

export default Heading;
