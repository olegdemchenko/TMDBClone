import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TVApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { tvPathsNames } from '../../routes';
import ShowsCategoryContent from '../CategoryContent';

function TVShowsTab() {
  const { t } = useTranslation('shows');
  return (
    <Routes>
      <Route
        path={tvPathsNames.popularShows}
        element={
          <ShowsCategoryContent
            heading={t('popular')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getPopularTVShows)}
          />
        }
      />
      <Route
        path={tvPathsNames.airingTodayShows}
        element={
          <ShowsCategoryContent
            heading={t('airing')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getAiringTVShows)}
          />
        }
      />
      <Route
        path={tvPathsNames.onTVShows}
        element={
          <ShowsCategoryContent
            heading={t('onTv')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getOnTVShows)}
          />
        }
      />
      <Route
        path={tvPathsNames.topRatedShows}
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

export default TVShowsTab;
