import React from 'react';
import { css } from '@emotion/react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import { useGetMovieRecommendationsQuery } from '../../../../app/store/api';
import GrowingSpinner from '../../../GrowingSpinner';
import { MovieListResult } from '../../../../app/TMDBAPIInterfaces';
import Recommendation from './components/Recommendation';
import ShadowWrapper from '../../../ShadowWrapper';
import Slider from '../Slider';

interface RecommendationsProps {
  movieId: number;
}

const emptyContainerStyles = css({
  height: 200,
});

function Recommendations({ movieId }: RecommendationsProps) {
  const { t } = useTranslation('details');
  const { data, isLoading, isError, error } = useGetMovieRecommendationsQuery([
    movieId,
    1,
  ]);

  if (isLoading) {
    return (
      <div className='py-4' css={emptyContainerStyles}>
        <GrowingSpinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div className='py-4' css={emptyContainerStyles}>
        <Alert variant='danger'>
          {error?.message ?? 'Unknown error has happened.'}
        </Alert>
      </div>
    );
  }

  return (
    <div className='py-4'>
      <h4 className='pb-3'>{t('recommendations')}</h4>
      {(data?.results ?? []).length > 0 ? (
        <ShadowWrapper>
          <Slider>
            {(data as MovieListResult).results.map(
              ({ id, title, release_date, backdrop_path, vote_average }) => (
                <Recommendation
                  id={id}
                  name={title}
                  date={release_date}
                  posterPath={backdrop_path}
                  popularity={vote_average}
                  key={_.uniqueId()}
                />
              )
            )}
          </Slider>
        </ShadowWrapper>
      ) : (
        <div css={emptyContainerStyles}>
          <p>{t('noRecommendations')}</p>
        </div>
      )}
    </div>
  );
}

export default Recommendations;
