import React from 'react';
import _ from 'lodash';
import { PopularPerson } from '../../../../app/TMDBAPIInterfaces';
import ListItem from '../ListItem';
import { listStyles } from './styles';

interface ListProps {
  people: PopularPerson[];
}

function List({ people }: ListProps) {
  return (
    <div css={listStyles}>
      {people.map(({ name, known_for, profile_path }) => (
        <ListItem
          key={_.uniqueId()}
          name={name}
          knownFor={known_for}
          photo={profile_path}
        />
      ))}
    </div>
  );
}

export default List;