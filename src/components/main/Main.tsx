import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
} from '../../app/store/api';
import Search from '../search/Search';
import Carousel from '../carousel';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <>
      <Search mode="main" />
      <Carousel
        heading={t('movies.popular')}
        sendQuery={useGetPopularMoviesQuery}
      />
      <Carousel
        heading={t('movies.upcoming')}
        sendQuery={useGetUpcomingMoviesQuery}
      />
      <Carousel
        heading={t('movies.top')}
        sendQuery={useGetTopRatedMoviesQuery}
      />
      <Carousel
        heading={t('movies.playing')}
        sendQuery={useGetNowPlayingMoviesQuery}
      />
    </>
  );
}

export default MainPage;
