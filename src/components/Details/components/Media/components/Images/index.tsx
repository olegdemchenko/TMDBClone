import React from 'react';
import { css } from '@emotion/react';
import Alert from 'react-bootstrap/Alert';
import { useGetMovieImagesQuery } from '../../../../../../app/store/api';
import Slider, { SlideTypes } from '../Slider';
import GrowingSpinner from '../../../../../GrowingSpinner';
import { ImagesResults } from '../../../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../../../routes';

interface ImagesProps {
  movieId: number;
  type: Exclude<keyof ImagesResults, 'id'>;
}

const containerStyles = css({
  height: '100%',
});

const imgStyles = css({
  width: '100%',
  height: '100%',
});

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
            css={imgStyles}
            src={`${imagesSrc[type]}${file_path}`}
            alt='backdrop'
          />
        ) : null
      )}
    </Slider>
  );
}

export default Images;
