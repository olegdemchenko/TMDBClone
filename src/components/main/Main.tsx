import React from 'react';
import { useTranslation } from 'react-i18next';
import { moviesApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import Search from '../search/Search';
import Carousel from '../carousel';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <>
      <Search mode='main' />
      <Carousel
        heading={t('movies.popular')}
        sendQuery={useCachedQueryData(moviesApi.endpoints.getPopularMovies)}
      />
      <Carousel
        heading={t('movies.upcoming')}
        sendQuery={useCachedQueryData(moviesApi.endpoints.getUpcomingMovies)}
      />
      <Carousel
        heading={t('movies.top')}
        sendQuery={useCachedQueryData(moviesApi.endpoints.getTopRatedMovies)}
      />
      <Carousel
        heading={t('movies.playing')}
        sendQuery={useCachedQueryData(moviesApi.endpoints.getNowPlayingMovies)}
      />
    </>
  );
}

export default MainPage;
