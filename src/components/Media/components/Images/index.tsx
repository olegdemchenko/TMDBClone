import React from 'react';
import _ from 'lodash';
import Alert from 'react-bootstrap/Alert';
import { css } from '@emotion/react';
import {
  useGetMovieImagesQuery,
  useGetTVImagesQuery,
} from '../../../../app/store/api';
import GrowingSpinner from '../../../GrowingSpinner';
import { ImagesResults } from '../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../routes';
import { containerStyles, imagesStyles } from '../commonStyles';
import Slider from '../../../MovieDetails/components/Slider';
import useRetrieveIdFromLocation from '../../../MovieDetails/hooks/useRetrieveIdFromLocation';

interface ImagesProps {
  type: Exclude<keyof ImagesResults, 'id'>;
  mediaType: 'tv' | 'movie';
}

export const slideSizes = {
  backdrops: css({ width: 500 }),
  posters: css({ width: 200 }),
};

function Images({ type, mediaType }: ImagesProps) {
  const entityId = useRetrieveIdFromLocation();
  const queries = {
    tv: useGetTVImagesQuery,
    movie: useGetMovieImagesQuery,
  };
  const { data, isLoading, isError, error } = queries[mediaType](entityId);

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
