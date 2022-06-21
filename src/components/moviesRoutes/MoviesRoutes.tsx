import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  useGetPopularMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from '../../app/store/tmdbServices';
import Gallery from '../gallery/Gallery';

function MoviesRoutes() {
  const { t } = useTranslation('movies');
  return (
    <Routes>
      <Route
        index
        element={(
          <Gallery
            heading={t('popular')}
            sendQuery={useGetPopularMoviesQuery}
          />
        )}
      />
      <Route
        path="upcoming"
        element={(
          <Gallery
            heading={t('upcoming')}
            sendQuery={useGetUpcomingMoviesQuery}
          />
        )}
      />
      <Route
        path="top-rated"
        element={(
          <Gallery
            heading={t('top')}
            sendQuery={useGetTopRatedMoviesQuery}
          />
        )}
      />
      <Route
        path="now-playing"
        element={(
          <Gallery
            heading={t('playing')}
            sendQuery={useGetNowPlayingMoviesQuery}
          />
        )}
      />
    </Routes>
  );
}

export default MoviesRoutes;
