import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { moviesApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import MovieCollection from '../collection';

function MoviesRoutes() {
  const { t } = useTranslation('movies');
  return (
    <Routes>
      <Route
        index
        element={(
          <MovieCollection
            heading={t('popular')}
            sendQuery={
              useCachedQueryData(
                moviesApi.endpoints.getPopularMovies,
              )
            }
          />
        )}
      />
      <Route
        path="upcoming"
        element={(
          <MovieCollection
            heading={t('upcoming')}
            sendQuery={
              useCachedQueryData(
                moviesApi.endpoints.getUpcomingMovies,
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
                moviesApi.endpoints.getTopRatedMovies,
              )
            }
          />
        )}
      />
      <Route
        path="now-playing"
        element={(
          <MovieCollection
            heading={t('playing')}
            sendQuery={
              useCachedQueryData(
                moviesApi.endpoints.getNowPlayingMovies,
              )
            }
          />
        )}
      />
    </Routes>
  );
}

export default MoviesRoutes;
