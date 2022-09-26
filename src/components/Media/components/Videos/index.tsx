import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {
  useGetTVVideosQuery,
  useGetMovieVideosQuery,
} from '../../../../app/store/api';
import GrowingSpinner from '../../../GrowingSpinner';
import { VideosResults } from '../../../../app/TMDBAPIInterfaces';
import YoutubePlayer from '../YoutubePlayer';
import { containerStyles } from '../commonStyles';
import Slider from '../../../MovieDetails/components/Slider';
import useRetrieveIdFromLocation from '../../../MovieDetails/hooks/useRetrieveIdFromLocation';

interface VideosProps {
  mediaType: 'tv' | 'movie';
}

function Videos({ mediaType }: VideosProps) {
  const entityId = useRetrieveIdFromLocation();

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
  return (
    <Slider>
      {(data as VideosResults).results.map(({ id, key, site, name }) => {
        if (key && site === 'YouTube') {
          return <YoutubePlayer key={id} videoKey={key} name={name} />;
        }
        return null;
      })}
    </Slider>
  );
}

export default Videos;
