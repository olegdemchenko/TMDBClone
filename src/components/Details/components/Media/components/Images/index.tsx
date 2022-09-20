import React from 'react';
import _ from 'lodash';
import Alert from 'react-bootstrap/Alert';
import { useGetMovieImagesQuery } from '../../../../../../app/store/api';
import GrowingSpinner from '../../../../../GrowingSpinner';
import { ImagesResults } from '../../../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../../../routes';
import { containerStyles, imagesStyles } from '../../styles';
import { slideSizes, sliderStyles } from './styles';

interface ImagesProps {
  movieId: number;
  type: Exclude<keyof ImagesResults, 'id'>;
}

function Images({ movieId, type }: ImagesProps) {
  const { data, isLoading, isError, error } = useGetMovieImagesQuery(movieId);

  const imagesSrc = {
    backdrops: imagePaths.moviePosters.detailsBackdrops,
    posters: imagePaths.moviePosters.detailsPosters,
  };

  if (isLoading) {
    return (
      <div css={containerStyles}>
        <GrowingSpinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div css={containerStyles}>
        <Alert variant='danger'>
          {error?.message ?? 'Unknown error has happened.'}
        </Alert>
      </div>
    );
  }
  return (
    <div css={[sliderStyles, containerStyles]}>
      {(data as ImagesResults)[type].map(({ file_path }) =>
        file_path ? (
          <div
            className='flex-shrink-0'
            css={slideSizes[type]}
            key={_.uniqueId()}
          >
            <img
              css={imagesStyles}
              src={`${imagesSrc[type]}${file_path}`}
              alt='backdrop'
            />
          </div>
        ) : null
      )}
    </div>
  );
}

export default Images;
