import React from 'react';
import Progressbar from 'react-js-progressbar';
import notFound from '../../assets/img/notFound.png';
import { imagePaths } from '../../routes/routes';

interface CarouselSlideProps {
  poster?: string | null;
  title?: string;
  date?: string;
  rate?: number;
}

function CarouselSlide({
  poster,
  title,
  date,
  rate = 0,
}: CarouselSlideProps) {
  const icon = poster ? `${imagePaths.carouselSlidePoster}${poster}` : notFound;
  return (
    <div className="slide">
      <div>
        <img src={icon} alt={title} />
      </div>
      <div className="progressbarContainer">
        <Progressbar
          input={Math.round(rate * 10)}
          backgroundColor="#032541"
          pathColor={['#1eb068', '#cccf30']}
          textStyle={{
            fontSize: '4.5rem',
            fill: 'white',
          }}
        />
      </div>
      <p className="m-0 mt-4 fw-bolder">{title}</p>
      <p className="m-0 text-secondary">{date}</p>
    </div>
  );
}

export default CarouselSlide;
