import React from 'react';

interface DropdownProps {
  name: string,
  list: string[],
}

function Dropdown({ name, list }: DropdownProps) {
  return (
    <div>
      <div>{name}</div>
      <ul>{list.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
}

export default Dropdown;
