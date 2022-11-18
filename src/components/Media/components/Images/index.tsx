import React from 'react';
import _ from 'lodash';
import Alert from 'react-bootstrap/Alert';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import {
  useGetMovieImagesQuery,
  useGetTVImagesQuery,
} from '../../../../app/store/api';
import GrowingSpinner from '../../../GrowingSpinner';
import { ImagesResults } from '../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../routes';
import { imagesStyles } from '../commonStyles';
import Slider from '../../../../features/MovieDetails/components/Slider';
import { useRetrieveIdFromLocation } from '../../../../common/hooks';
import { isDataDefined } from '../../../../common/utils';

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
  const { t } = useTranslation('details');
  const { data, isLoading, isError, error } = queries[mediaType](entityId);

  const imagesSrc = {
    backdrops: imagePaths.moviePosters.detailsBackdrops,
    posters: imagePaths.moviePosters.detailsPosters,
  };

  if (isLoading) {
    return (
      <div>
        <GrowingSpinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <Alert variant='danger'>
          {error?.message ?? 'Unknown error has happened.'}
        </Alert>
      </div>
    );
  }
  isDataDefined(data);
  const images = data[type] ?? [];
  return (
    <Slider>
      {images.length > 0 ? (
        images.map(({ file_path }) =>
          file_path ? (
            <div
              className='flex-shrink-0'
              css={[slideSizes[type]]}
              key={_.uniqueId()}
            >
              <img
                css={imagesStyles}
                src={`${imagesSrc[type]}${file_path}`}
                alt='backdrop'
              />
            </div>
          ) : null
        )
      ) : (
        <div>
          <p>
            {t('noImages', {
              mediaType: mediaType === 'movie' ? t('movie') : t('tv'),
            })}
          </p>
        </div>
      )}
    </Slider>
  );
}

export default Images;
