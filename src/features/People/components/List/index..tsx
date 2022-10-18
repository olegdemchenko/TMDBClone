import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { PopularPerson } from '../../../../app/TMDBAPIInterfaces';
import ListItem from '../ListItem';
import { listStyles } from './styles';
import { detailsPaths } from '../../../../routes';

interface ListProps {
  people: PopularPerson[];
}

function List({ people }: ListProps) {
  return (
    <div css={listStyles}>
      {people.map(({ id, name, known_for, profile_path }) => (
        <Link to={detailsPaths.people(id, name ?? '')}>
          <ListItem
            key={_.uniqueId()}
            name={name}
            knownFor={known_for}
            photo={profile_path}
          />
        </Link>
      ))}
    </div>
  );
}

export default List;
