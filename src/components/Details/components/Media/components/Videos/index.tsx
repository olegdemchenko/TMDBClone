import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { css } from '@emotion/react';
import { useGetMovieVideosQuery } from '../../../../../../app/store/api';
import GrowingSpinner from '../../../../../GrowingSpinner';
import Slider from '../Slider';
import { VideosResults } from '../../../../../../app/TMDBAPIInterfaces';
import YoutubePlayer from '../YoutubePlayer';

interface VideosProps {
  entityId: number;
}

const containerStyles = css({
  height: 300,
});

function Videos({ entityId }: VideosProps) {
  const { data, isLoading, isError, error } = useGetMovieVideosQuery(entityId);
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
    <Slider slideSize='video'>
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
