import React from 'react';
import { css } from '@emotion/react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import {
  useGetMovieRecommendationsQuery,
  useGetTVRecommendationsQuery,
} from '../../app/store/api';
import GrowingSpinner from '../GrowingSpinner';
import {
  MovieListResult,
  TVListResult,
  MovieListItem,
  TVListItem,
} from '../../app/TMDBAPIInterfaces';
import Recommendation from './components/Recommendation';
import ShadowWrapper from '../ShadowWrapper';
import Slider from '../../features/MovieDetails/components/Slider';
import { useRetrieveIdFromLocation } from '../../common/hooks';
import { isDataDefined } from '../../common/utils';

const emptyContainerStyles = css({
  height: 200,
});

function isTVShow(result: MovieListItem | TVListItem): result is TVListItem {
  return (result as TVListItem).first_air_date !== undefined;
}

interface RecommendationsProps {
  mediaType: 'tv' | 'movie';
}

function Recommendations({ mediaType }: RecommendationsProps) {
  const entityId = useRetrieveIdFromLocation();
  const { t } = useTranslation('details');
  const queries = {
    movie: useGetMovieRecommendationsQuery,
    tv: useGetTVRecommendationsQuery,
  } as {
    [Key in RecommendationsProps['mediaType']]: (
      args: [number, number]
    ) => Omit<ReturnType<typeof useGetMovieRecommendationsQuery>, 'data'> & {
      data?: MovieListResult | TVListResult;
    };
  };
  const { data, isLoading, isError, error } = queries[mediaType]([entityId, 1]);

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
  isDataDefined(data);
  return (
    <div className='py-4'>
      <h4 className='m-0 pb-4'>{t('recommendations')}</h4>
      {(data.results ?? []).length > 0 ? (
        <ShadowWrapper>
          <Slider>
            {data.results.map((res) => (
              <Recommendation
                id={res.id}
                name={isTVShow(res) ? res.name : res.title}
                date={isTVShow(res) ? res.first_air_date : res.release_date}
                posterPath={res.backdrop_path}
                popularity={res.vote_average}
                key={_.uniqueId()}
              />
            ))}
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
