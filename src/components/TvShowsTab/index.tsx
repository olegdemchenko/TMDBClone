import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TVApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { tvShowsPaths } from '../../common/constants';
import ShowsCategoryContent from '../CategoryContent';

function TVShowsRoutes() {
  const { t } = useTranslation('shows');
  return (
    <Routes>
      <Route
        path={tvShowsPaths.popular}
        element={
          <ShowsCategoryContent
            heading={t('popular')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getPopularTVShows)}
          />
        }
      />
      <Route
        path={tvShowsPaths['airing today']}
        element={
          <ShowsCategoryContent
            heading={t('airing')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getAiringTVShows)}
          />
        }
      />
      <Route
        path={tvShowsPaths['on tv']}
        element={
          <ShowsCategoryContent
            heading={t('onTv')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getOnTVShows)}
          />
        }
      />
      <Route
        path={tvShowsPaths['top rated']}
        element={
          <ShowsCategoryContent
            heading={t('top')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getTopRatedTVShows)}
          />
        }
      />
    </Routes>
  );
}

export default TVShowsRoutes;
