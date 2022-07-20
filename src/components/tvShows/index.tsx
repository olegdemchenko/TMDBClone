import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TVApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import MovieCollection from '../collection';

function TVShowsRoutes() {
  const { t } = useTranslation('shows');
  return (
    <Routes>
      <Route
        index
        element={(
          <MovieCollection
            heading={t('popular')}
            sendQuery={
              useCachedQueryData(
                TVApi.endpoints.getPopularTVShows,
              )
            }
          />
        )}
      />
      <Route
        path="airing-today"
        element={(
          <MovieCollection
            heading={t('airing')}
            sendQuery={
              useCachedQueryData(
                TVApi.endpoints.getAiringTVShows,
              )
            }
          />
        )}
      />
      <Route
        path="on-the-air"
        element={(
          <MovieCollection
            heading={t('onTv')}
            sendQuery={
              useCachedQueryData(
                TVApi.endpoints.getOnTVShows,
              )
            }
          />
        )}
      />
      <Route
        path="top-rated"
        element={(
          <MovieCollection
            heading={t('top')}
            sendQuery={
              useCachedQueryData(
                TVApi.endpoints.getTopRatedTVShows,
              )
            }
          />
        )}
      />
    </Routes>
  );
}

export default TVShowsRoutes;
