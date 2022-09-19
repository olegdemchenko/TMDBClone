import React from 'react';
import _ from 'lodash';
import Alert from 'react-bootstrap/Alert';
import { useGetMovieImagesQuery } from '../../../../../../app/store/api';
import Slider, { SlideTypes } from '../Slider';
import GrowingSpinner from '../../../../../GrowingSpinner';
import { ImagesResults } from '../../../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../../../routes';
import { containerStyles, imagesStyles } from '../../styles';

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

  const slideSizes = {
    backdrops: 'backdrop',
    posters: 'poster',
  } as { [Key in ImagesProps['type']]: SlideTypes };

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
    <Slider slideSize={slideSizes[type]}>
      {(data as ImagesResults)[type].map(({ file_path }) =>
        file_path ? (
          <img
            css={imagesStyles}
            src={`${imagesSrc[type]}${file_path}`}
            alt='backdrop'
            key={_.uniqueId()}
          />
        ) : null
      )}
    </Slider>
  );
}

export default Images;
