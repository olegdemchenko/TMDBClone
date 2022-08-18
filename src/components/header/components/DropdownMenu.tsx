import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import _ from 'lodash';
import { capitalize } from '../../../common/utils';
import { dropdownPaths } from '../../../common/constants';

interface DropdownProps {
  name: keyof typeof dropdownPaths;
}

function DropdownMenu({ name }: DropdownProps) {
  const navigate = useNavigate();
  return (
    <Dropdown>
      <Dropdown.Toggle className='border-0 pb-0 shadow-none bg-transparent dropdown-btn'>
        {capitalize(name)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.entries(dropdownPaths[name]).map(([menuItem, path]) => (
          <Dropdown.Item key={_.uniqueId()} onClick={() => navigate(path)}>
            {capitalize(menuItem)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
