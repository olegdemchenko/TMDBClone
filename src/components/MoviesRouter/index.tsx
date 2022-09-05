import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { moviesApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { pathsSegments } from '../../routes';
import MovieCategoryContent from '../CategoryContent';
import MovieDetails from '../Details';

function MoviesRouter() {
  const { t } = useTranslation('movies');
  return (
    <Routes>
      <Route
        path={pathsSegments.popularMovies}
        element={
          <MovieCategoryContent
            heading={t('popular')}
            sendQuery={useCachedQueryData(moviesApi.endpoints.getPopularMovies)}
          />
        }
      />
      <Route
        path={pathsSegments.upcomingMovies}
        element={
          <MovieCategoryContent
            heading={t('upcoming')}
            sendQuery={useCachedQueryData(
              moviesApi.endpoints.getUpcomingMovies
            )}
          />
        }
      />
      <Route
        path={pathsSegments.topRatedMovies}
        element={
          <MovieCategoryContent
            heading={t('top')}
            sendQuery={useCachedQueryData(
              moviesApi.endpoints.getTopRatedMovies
            )}
          />
        }
      />
      <Route
        path={pathsSegments.nowPlayingMovies}
        element={
          <MovieCategoryContent
            heading={t('playing')}
            sendQuery={useCachedQueryData(
              moviesApi.endpoints.getNowPlayingMovies
            )}
          />
        }
      />
      <Route path=':movieCredentials' element={<MovieDetails />} />
    </Routes>
  );
}

export default MoviesRouter;
