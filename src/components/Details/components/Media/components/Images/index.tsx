import React from 'react';
import _ from 'lodash';
import Alert from 'react-bootstrap/Alert';
import { css } from '@emotion/react';
import { useGetMovieImagesQuery } from '../../../../../../app/store/api';
import GrowingSpinner from '../../../../../GrowingSpinner';
import { ImagesResults } from '../../../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../../../routes';
import { containerStyles, imagesStyles } from '../../styles';
import Slider from '../../../Slider';

interface ImagesProps {
  movieId: number;
  type: Exclude<keyof ImagesResults, 'id'>;
}

export const slideSizes = {
  backdrops: css({ width: 500 }),
  posters: css({ width: 200 }),
};

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
    <Slider>
      {(data as ImagesResults)[type].map(({ file_path }) =>
        file_path ? (
          <div
            className='flex-shrink-0'
            css={[containerStyles, slideSizes[type]]}
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
    </Slider>
  );
}

export default Images;
