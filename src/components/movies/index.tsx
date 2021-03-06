import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { moviesApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { moviesPaths } from '../../common/constants';
import MovieCollection from '../collection';

function MoviesRoutes() {
  const { t } = useTranslation('movies');
  return (
    <Routes>
      <Route
        path={moviesPaths.popular}
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
        path={moviesPaths.upcoming}
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
        path={moviesPaths['top rated']}
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
        path={moviesPaths['now playing']}
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
