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
        mode="row"
        heading={t('movies.popular')}
        sendQuery={useGetPopularMoviesQuery}
      />
      <Gallery
        mode="row"
        heading={t('movies.upcoming')}
        sendQuery={useGetUpcomingMoviesQuery}
      />
      <Gallery
        mode="row"
        heading={t('movies.top')}
        sendQuery={useGetTopRatedMoviesQuery}
      />
      <Gallery
        mode="row"
        heading={t('movies.playing')}
        sendQuery={useGetNowPlayingMoviesQuery}
      />
    </>
  );
}

export default MainPage;
