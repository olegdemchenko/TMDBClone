import React from 'react';
import { useTranslation } from 'react-i18next';
import { moviesApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import Search from '../Search';
import Carousel from '../Carousel';
import AppContainer from '../AppContainer';
import Header from '../Header';
import Footer from '../Footer';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <AppContainer>
      <Header />
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
      <Footer />
    </AppContainer>
  );
}

export default MainPage;
