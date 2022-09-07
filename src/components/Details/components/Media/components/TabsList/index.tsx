import React from 'react';
import { useTranslation } from 'react-i18next';
import { selectedTabStyles } from './styles';

interface TabsListProps {
  items: string[];
  selectedItem: string;
  selectItem: (item: string) => void;
}

function TabsList({ items, selectedItem, selectItem }: TabsListProps) {
  const { t } = useTranslation('details');

  return (
    <div>
      <h4 className='d-inline-block'>{t('media')}</h4>
      <div className='d-inline-block' css={selectedTabStyles}>
        {items.map((item) => (
          <button
            type='button'
            className='ms-5 border-0'
            key={item}
            data-selected={item === selectedItem ? true : undefined}
            onClick={() => selectItem(item)}
          >
            <h5>{t(item)}</h5>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TabsList;
