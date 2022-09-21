import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useGetMovieVideosQuery } from '../../../../../../app/store/api';
import GrowingSpinner from '../../../../../GrowingSpinner';
import { VideosResults } from '../../../../../../app/TMDBAPIInterfaces';
import YoutubePlayer from '../YoutubePlayer';
import { containerStyles } from '../commonStyles';
import Slider from '../../../Slider';
import useRetrieveIdFromLocation from '../../../../hooks/useRetrieveIdFromLocation';

function Videos() {
  const entityId = useRetrieveIdFromLocation();
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