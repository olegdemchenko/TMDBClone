import React from 'react';
import { PersonSearchInfo, MediaTypes } from '../../app/APIInterfaces';

interface PersonInfoProps {
  info: PersonSearchInfo
}

function PersonInfo({ info }: PersonInfoProps) {
  return (
    <div className="d-flex mb-3">
      <div className="photo flex-shrink-0">
        <img src="" alt="icon" />
      </div>
      <div className="d-flex flex-column info flex-grow-1 ps-3 justify-content-center">
        <h6 className="fw-bold m-0 name">{info.name}</h6>
        <div className="movies">
          Acting:
          {info.known_for.map((elem) => (
            elem.media_type === MediaTypes.movie ? elem.title : elem.name
          )).join(', ')}
        </div>
      </div>
    </div>
  );
}

export default PersonInfo;
