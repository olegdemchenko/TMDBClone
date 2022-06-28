import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useCashedUseQuery from '../../common/hooks/useCashedUseQuery';
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
            sendQuery={useCashedUseQuery(useGetPopularMoviesQuery, selectPopularMovies)}
          />
        )}
      />
      <Route
        path="upcoming"
        element={(
          <MovieCollection
            heading={t('upcoming')}
            sendQuery={useCashedUseQuery(useGetUpcomingMoviesQuery, selectUpcomingMovies)}
          />
        )}
      />
      <Route
        path="top-rated"
        element={(
          <MovieCollection
            heading={t('top')}
            sendQuery={useCashedUseQuery(useGetTopRatedMoviesQuery, selectTopRatedMovies)}
          />
        )}
      />
      <Route
        path="now-playing"
        element={(
          <MovieCollection
            heading={t('playing')}
            sendQuery={useCashedUseQuery(useGetNowPlayingMoviesQuery, selectNowPlayingMovies)}
          />
        )}
      />
    </Routes>
  );
}

export default MoviesRoutes;
