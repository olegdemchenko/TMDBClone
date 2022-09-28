import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TVApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { pathsSegments } from '../../routes';
import ShowsCategoryContent from '../CategoryContent';
import TVShowDetails from '../TVShowDetails';

function TVShowsRouter() {
  const { t } = useTranslation('shows');
  return (
    <Routes>
      <Route
        path={pathsSegments.popularShows}
        element={
          <ShowsCategoryContent
            heading={t('popular')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getPopularTVShows)}
          />
        }
      />
      <Route
        path={pathsSegments.airingTodayShows}
        element={
          <ShowsCategoryContent
            heading={t('airing')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getAiringTVShows)}
          />
        }
      />
      <Route
        path={pathsSegments.onTVShows}
        element={
          <ShowsCategoryContent
            heading={t('onTv')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getOnTVShows)}
          />
        }
      />
      <Route
        path={pathsSegments.topRatedShows}
        element={
          <ShowsCategoryContent
            heading={t('top')}
            sendQuery={useCachedQueryData(TVApi.endpoints.getTopRatedTVShows)}
          />
        }
      />
      <Route path=':credentials' element={<TVShowDetails />} />
    </Routes>
  );
}

export default TVShowsRouter;
