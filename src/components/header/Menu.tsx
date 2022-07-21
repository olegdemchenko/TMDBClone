import React from 'react';
import _ from 'lodash';
import {
  dropdownPaths,
} from '../../common/constants';
import DropdownMenu from './DropdownMenu';

function Menu() {
  return (
    <div className="d-flex">
      {Object.keys(dropdownPaths).map((name: keyof typeof dropdownPaths) => (
        <DropdownMenu
          key={_.uniqueId()}
          name={name}
        />
      ))}
    </div>
  );
}

export default Menu;
