import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { moviesApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import { moviesPathNames } from '../../routes';
import MovieCategoryContent from '../CategoryContent';
import MovieDetails from '../MovieDetails';

function MoviesTab() {
  const { t } = useTranslation('movies');
  return (
    <Routes>
      <Route
        path={moviesPathNames.popularMovies}
        element={
          <MovieCategoryContent
            heading={t('popular')}
            sendQuery={useCachedQueryData(moviesApi.endpoints.getPopularMovies)}
          />
        }
      />
      <Route
        path={moviesPathNames.upcomingMovies}
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
        path={moviesPathNames.topRatedMovies}
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
        path={moviesPathNames.nowPlayingMovies}
        element={
          <MovieCategoryContent
            heading={t('playing')}
            sendQuery={useCachedQueryData(
              moviesApi.endpoints.getNowPlayingMovies
            )}
          />
        }
      />
      <Route path=':movieId' element={<MovieDetails />} />
    </Routes>
  );
}

export default MoviesTab;
