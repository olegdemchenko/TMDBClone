import React from 'react';
import { Link } from 'react-router-dom';
import {
  MultiSearchResults,
  MediaTypes,
  MovieListItemMedia,
  TVListItemMedia,
} from '../../../../app/TMDBAPIInterfaces';
import { detailsPaths } from '../../../../routes';
import MovieInfo from '../MovieInfo';
import PersonInfo from '../PersonInfo';

function isMediaMovie(
  media: MovieListItemMedia | TVListItemMedia
): media is MovieListItemMedia {
  return (media as MovieListItemMedia).media_type === MediaTypes.movie;
}

function ResultsList({ results }: Pick<MultiSearchResults, 'results'>) {
  return (
    <div className='ps-4'>
      {results.map((res) => {
        if (
          res.media_type === MediaTypes.movie ||
          res.media_type === MediaTypes.tv
        ) {
          return (
            <Link
              to={
                isMediaMovie(res)
                  ? detailsPaths.movie(res.id, res.title ?? '')
                  : detailsPaths.tv(res.id, res.name ?? '')
              }
            >
              <MovieInfo
                key={res.id}
                title={isMediaMovie(res) ? res.title : res.name}
                logo={res.poster_path}
                date={isMediaMovie(res) ? res.release_date : res.first_air_date}
                description={res.overview}
              />
            </Link>
          );
        }
        return (
          <Link to={detailsPaths.people(res.id, res.name ?? '')}>
            <PersonInfo
              key={res.id}
              name={res.name}
              avatar={res.profile_path}
              works={res.known_for}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default ResultsList;
