import React from 'react';
import Search from '../search/Search';
import Carousel from '../carousel/Carousel';
import routes from '../../routes/routes';

function MainPage() {
  return (
    <>
      <Search mode="main" />
      <Carousel
        heading="What's popular"
        slidesDataLink={routes.getPopularMovies(1)}
      />
      <Carousel
        heading="Upcoming movies"
        slidesDataLink={routes.getUpcomingMovies(1)}
      />
      <Carousel
        heading="Top rated movies"
        slidesDataLink={routes.getTopRatedMovies(1)}
      />
      <Carousel
        heading="Now playing movies"
        slidesDataLink={routes.getNowPlayingMovies(1)}
      />
    </>
  );
}

export default MainPage;
