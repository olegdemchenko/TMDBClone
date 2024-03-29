import React from 'react';
import { useTranslation } from 'react-i18next';
import { moviesApi } from '../../app/store/api';
import { useCachedQueryData } from '../../common/hooks/useCachedQueryData';
import Search from '../Search';
import Carousel from '../Carousel';
import FooterContainer from '../FooterContainer';
import Header from '../Header';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
}

export default MainPage;
