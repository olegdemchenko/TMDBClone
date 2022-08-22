import React from 'react';
import { imagePaths } from '../../../../routes';
import {
  MovieListItemMedia,
  TVListItemMedia,
  MediaTypes,
} from '../../../../app/TMDBAPIInterfaces';
import {
  listItemStyles,
  photoWrapperStyles,
  worksListStyles,
  textWrapperStyles,
} from './styles';
import noAvatar from './assets/img/noAvatar.jpg';

interface ListItemProps {
  name?: string;
  knownFor?: (MovieListItemMedia | TVListItemMedia)[];
  photo?: string;
}

function ListItem({ name = 'unknown', knownFor = [], photo }: ListItemProps) {
  const iconPath = photo
    ? `${imagePaths.peoplePosters.medium}${photo}`
    : noAvatar;

  return (
    <div css={listItemStyles}>
      <div css={photoWrapperStyles}>
        <img src={iconPath} alt={name} />
      </div>
      <div className='p-2' css={textWrapperStyles}>
        <h6 className='fw-bold m-0'>{name}</h6>
        <p css={worksListStyles}>
          {knownFor
            .map((personWork) => {
              if (personWork.media_type === MediaTypes.movie) {
                return personWork.title ?? 'unknown';
              }
              return personWork.name ?? 'unknown';
            })
            .join(', ')}
        </p>
      </div>
    </div>
  );
}

export default ListItem;
