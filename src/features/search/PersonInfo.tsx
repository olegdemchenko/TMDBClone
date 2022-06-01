import React from 'react';
import {
  MovieSearchInfo,
  TVSearchInfo,
  MediaTypes,
} from '../../app/APIInterfaces';

interface PersonInfoProps {
  name: string;
  avatar: string | null;
  works: (MovieSearchInfo | TVSearchInfo)[];
}

function PersonInfo({
  name,
  avatar,
  works,
}: PersonInfoProps) {
  return (
    <div className="d-flex mb-3">
      <div className="photo flex-shrink-0">
        <img src="" alt="icon" />
      </div>
      <div className="d-flex flex-column info flex-grow-1 ps-3 justify-content-center">
        <h6 className="fw-bold m-0 name">{name}</h6>
        <div className="movies">
          Acting:
          {works.map((elem) => (
            elem.media_type === MediaTypes.movie ? elem.title : elem.name
          )).join(', ')}
        </div>
      </div>
    </div>
  );
}

export default PersonInfo;
