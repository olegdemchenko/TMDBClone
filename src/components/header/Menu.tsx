import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import DropdownMenu from './DropdownMenu';

function Menu() {
  const { t } = useTranslation('header');
  const menu = t('menu', { returnObjects: true }) as { [key: string]: string[] };
  return (
    <div className="d-flex">
      {Object.entries(menu).map(([name, list]) => (
        <DropdownMenu key={_.uniqueId()} name={name} list={list} />
      ))}
    </div>
  );
}

export default Menu;
