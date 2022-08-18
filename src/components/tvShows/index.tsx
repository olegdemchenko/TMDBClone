import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TVApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { tvShowsPaths } from '../../common/constants';
import MovieCollection from '../Collection';

function TVShowsRoutes() {
  const { t } = useTranslation('shows');
  return (
    <Routes>
      <Route
        path={tvShowsPaths.popular}
        element={
          <MovieCollection
            heading={t('popular')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getPopularTVShows)}
          />
        }
      />
      <Route
        path={tvShowsPaths['airing today']}
        element={
          <MovieCollection
            heading={t('airing')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getAiringTVShows)}
          />
        }
      />
      <Route
        path={tvShowsPaths['on tv']}
        element={
          <MovieCollection
            heading={t('onTv')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getOnTVShows)}
          />
        }
      />
      <Route
        path={tvShowsPaths['top rated']}
        element={
          <MovieCollection
            heading={t('top')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getTopRatedTVShows)}
          />
        }
      />
    </Routes>
  );
}

export default TVShowsRoutes;
