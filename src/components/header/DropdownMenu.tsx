import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import _ from 'lodash';
import { capitalize } from '../../common/utils';

interface DropdownProps {
  path: string,
  name: string,
  list: string[],
}

function getDropdownItemPath(path: string, dropdownItem: string) {
  if (dropdownItem === 'popular') {
    return `/${path}/`;
  }
  return `/${path}/${dropdownItem.replace(/ /g, '-')}`;
}

function DropdownMenu({
  name,
  list,
  path,
}: DropdownProps) {
  const navigate = useNavigate();
  return (
    <Dropdown>
      <Dropdown.Toggle className="border-0 pb-0 shadow-none bg-transparent dropdown-btn">
        {capitalize(name)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {list.map((item) => (
          <Dropdown.Item
            key={_.uniqueId()}
            onClick={() => navigate(getDropdownItemPath(path, item))}
          >
            {capitalize(item)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
