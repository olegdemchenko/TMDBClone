import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useTranslation } from 'react-i18next';
import {
  useGetTVVideosQuery,
  useGetMovieVideosQuery,
} from '../../../../app/store/api';
import GrowingSpinner from '../../../GrowingSpinner';
import YoutubePlayer from '../YoutubePlayer';
import { containerStyles } from '../commonStyles';
import Slider from '../../../../features/MovieDetails/components/Slider';
import { useRetrieveIdFromLocation } from '../../../../common/hooks';
import { isDataDefined } from '../../../../common/utils';

interface VideosProps {
  mediaType: 'tv' | 'movie';
}

function Videos({ mediaType }: VideosProps) {
  const entityId = useRetrieveIdFromLocation();
  const { t } = useTranslation('details');
  const queries = {
    movie: useGetMovieVideosQuery,
    tv: useGetTVVideosQuery,
  };

  const { data, isLoading, isError, error } = queries[mediaType](entityId);
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
  isDataDefined(data);
  const videos = data.results ?? [];
  return (
    <Slider>
      {videos.length > 0 ? (
        videos.map(({ id, key, site, name }) => {
          if (key && site === 'YouTube') {
            return <YoutubePlayer key={id} videoKey={key} name={name} />;
          }
          return null;
        })
      ) : (
        <div css={containerStyles}>
          <p>
            {t('noVideos', {
              mediaType: mediaType === 'movie' ? t('movie') : t('tv'),
            })}
          </p>
        </div>
      )}
    </Slider>
  );
}

export default Videos;
