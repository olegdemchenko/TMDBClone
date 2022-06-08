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
    </>
  );
}

export default MainPage;
