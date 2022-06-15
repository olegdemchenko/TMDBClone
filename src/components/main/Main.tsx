import React from 'react';
import { useTranslation } from 'react-i18next';
import Search from '../search/Search';
import Carousel from '../carousel/Carousel';
import routes from '../../routes/routes';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <>
      <Search mode="main" />
      <Carousel
        heading={t('movies.popular')}
        slidesDataLink={routes.getPopularMovies(1)}
      />
      <Carousel
        heading={t('movies.upcoming')}
        slidesDataLink={routes.getUpcomingMovies(1)}
      />
      <Carousel
        heading={t('movies.top')}
        slidesDataLink={routes.getTopRatedMovies(1)}
      />
      <Carousel
        heading={t('movies.playing')}
        slidesDataLink={routes.getNowPlayingMovies(1)}
      />
    </>
  );
}

export default MainPage;
