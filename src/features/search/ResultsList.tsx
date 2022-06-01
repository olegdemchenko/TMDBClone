import React from 'react';
import { MultiSearchResults, MediaTypes, PersonSearchInfo } from '../../app/APIInterfaces';
import MovieInfo from './MovieInfo';
import PersonInfo from './PersonInfo';

function ResultsList({ results }: MultiSearchResults) {
  return (
    <div className="ps-4">
      {results.map((res) => {
        if (res.media_type === MediaTypes.movie || res.media_type === MediaTypes.tv) {
          return (
            <MovieInfo
              title={res.media_type === MediaTypes.movie ? res.title : res.name}
              logo={res.poster_path}
              date={res.media_type === MediaTypes.movie ? res.original_date : res.first_air_date}
              description={res.overview}
            />
          );
        }
        return (
          <PersonInfo
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
