import React from 'react';
import { useTranslation } from 'react-i18next';
import Search from '../search/Search';
import Gallery from '../gallery/Gallery';
import routes from '../../routes/routes';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <>
      <Search mode="main" />
      <Gallery
        heading={t('movies.popular')}
        slidesDataLink={routes.getPopularMovies(1)}
      />
      <Gallery
        heading={t('movies.upcoming')}
        slidesDataLink={routes.getUpcomingMovies(1)}
      />
      <Gallery
        heading={t('movies.top')}
        slidesDataLink={routes.getTopRatedMovies(1)}
      />
      <Gallery
        heading={t('movies.playing')}
        slidesDataLink={routes.getNowPlayingMovies(1)}
      />
    </>
  );
}

export default MainPage;
