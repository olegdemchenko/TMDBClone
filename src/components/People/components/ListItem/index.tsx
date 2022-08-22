import React from 'react';
import { imagePaths } from '../../../../routes';
import {
  listItemStyles,
  photoWrapperStyles,
  worksListStyles,
  textWrapperStyles,
} from './styles';

interface ListItemProps {
  name: string;
  knownFor: string[];
  photo: string;
}

function ListItem({ name, knownFor, photo }: ListItemProps) {
  const iconPath = `${imagePaths.peoplePosters.medium}${photo}`;

  return (
    <div css={listItemStyles}>
      <div css={photoWrapperStyles}>
        <img src={iconPath} alt={name} />
      </div>
      <div className='p-2' css={textWrapperStyles}>
        <h6 className='fw-bold m-0'>{name}</h6>
        <p css={worksListStyles}>{knownFor.join(', ')}</p>
      </div>
    </div>
  );
}

export default ListItem;
