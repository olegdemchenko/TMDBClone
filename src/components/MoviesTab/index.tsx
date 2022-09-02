import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { moviesApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { moviesPathsSegments } from '../../routes';
import MovieCategoryContent from '../CategoryContent';
import MovieDetails from '../Details';

function MoviesTab() {
  const { t } = useTranslation('movies');
  return (
    <Routes>
      <Route
        path={moviesPathsSegments.popularMovies}
        element={
          <MovieCategoryContent
            heading={t('popular')}
            sendQuery={useCachedQueryData(moviesApi.endpoints.getPopularMovies)}
          />
        }
      />
      <Route
        path={moviesPathsSegments.upcomingMovies}
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
        path={moviesPathsSegments.topRatedMovies}
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
        path={moviesPathsSegments.nowPlayingMovies}
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

export default MoviesTab;
