import React from 'react';
import { MultiSearchResults, MediaTypes } from '../../../app/TMDBAPIInterfaces';
import MovieInfo from '../MovieInfo';
import PersonInfo from '../PersonInfo';

function ResultsList({ results }: Pick<MultiSearchResults, 'results'>) {
  return (
    <div className='ps-4'>
      {results.map((res) => {
        if (
          res.media_type === MediaTypes.movie ||
          res.media_type === MediaTypes.tv
        ) {
          return (
            <MovieInfo
              key={res.id}
              title={res.media_type === MediaTypes.movie ? res.title : res.name}
              logo={res.poster_path}
              date={
                res.media_type === MediaTypes.movie
                  ? res.release_date
                  : res.first_air_date
              }
              description={res.overview}
            />
          );
        }
        return (
          <PersonInfo
            key={res.id}
            name={res.name}
            avatar={res.profile_path}
            works={res.known_for}
          />
        );
      })}
    </div>
  );
}

export default ResultsList;
