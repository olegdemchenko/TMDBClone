import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStoredUseQuery from '../../common/hooks/useStoredUseQuery';
import {
  useGetPopularMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from '../../app/store/api';
import {
  selectPopularMovies,
  selectNowPlayingMovies,
  selectTopRatedMovies,
  selectUpcomingMovies,
} from '../../app/store/slices/movies';
import MovieCollection from '../movieCollection';

function MoviesRoutes() {
  const { t } = useTranslation('movies');
  return (
    <Routes>
      <Route
        index
        element={(
          <MovieCollection
            heading={t('popular')}
            sendQuery={useStoredUseQuery(useGetPopularMoviesQuery, selectPopularMovies)}
          />
        )}
      />
      <Route
        path="upcoming"
        element={(
          <MovieCollection
            heading={t('upcoming')}
            sendQuery={useStoredUseQuery(useGetUpcomingMoviesQuery, selectUpcomingMovies)}
          />
        )}
      />
      <Route
        path="top-rated"
        element={(
          <MovieCollection
            heading={t('top')}
            sendQuery={useStoredUseQuery(useGetTopRatedMoviesQuery, selectTopRatedMovies)}
          />
        )}
      />
      <Route
        path="now-playing"
        element={(
          <MovieCollection
            heading={t('playing')}
            sendQuery={useStoredUseQuery(useGetNowPlayingMoviesQuery, selectNowPlayingMovies)}
          />
        )}
      />
    </Routes>
  );
}

export default MoviesRoutes;
