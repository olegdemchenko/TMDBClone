import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
} from '../../app/store/api';
import useStoredUseQuery from '../../common/hooks/useStoredUseQuery';
import {
  selectPopularMovies,
  selectNowPlayingMovies,
  selectTopRatedMovies,
  selectUpcomingMovies,
} from '../../app/store/slices/movies';
import Search from '../search/Search';
import Carousel from '../carousel';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <>
      <Search mode="main" />
      <Carousel
        heading={t('movies.popular')}
        sendQuery={useStoredUseQuery(useGetPopularMoviesQuery, selectPopularMovies)}
      />
      <Carousel
        heading={t('movies.upcoming')}
        sendQuery={useStoredUseQuery(useGetUpcomingMoviesQuery, selectUpcomingMovies)}
      />
      <Carousel
        heading={t('movies.top')}
        sendQuery={useStoredUseQuery(useGetTopRatedMoviesQuery, selectTopRatedMovies)}
      />
      <Carousel
        heading={t('movies.playing')}
        sendQuery={useStoredUseQuery(useGetNowPlayingMoviesQuery, selectNowPlayingMovies)}
      />
    </>
  );
}

export default MainPage;
