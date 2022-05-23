import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import _ from 'lodash';
import capitalize from '../../utils';

interface DropdownProps {
  name: string,
  list: string[],
}

function DropdownMenu({ name, list }: DropdownProps) {
  return (
    <Dropdown>
      <Dropdown.Toggle className="border-0 pb-0 shadow-none bg-transparent dropdown-btn">
        {capitalize(name)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {list.map((item) => (
          <Dropdown.Item key={_.uniqueId()} href="#/action-1">{capitalize(item)}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
