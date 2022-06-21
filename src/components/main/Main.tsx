import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
} from '../../app/store/tmdbServices';
import Search from '../search/Search';
import Gallery from '../gallery/Gallery';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <>
      <Search mode="main" />
      <Gallery
        heading={t('movies.popular')}
        sendQuery={useGetPopularMoviesQuery}
      />
      <Gallery
        heading={t('movies.upcoming')}
        sendQuery={useGetUpcomingMoviesQuery}
      />
      <Gallery
        heading={t('movies.top')}
        sendQuery={useGetTopRatedMoviesQuery}
      />
      <Gallery
        heading={t('movies.playing')}
        sendQuery={useGetNowPlayingMoviesQuery}
      />
    </>
  );
}

export default MainPage;
