import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { selectedTabStyles } from './styles';

interface MediaProps {
  id: number;
}

function Media({ id }: MediaProps) {
  const tabsKeys = ['videos', 'backdrops', 'posters'] as const;
  const [selectedTab, setSelected] = useState<typeof tabsKeys[number]>(
    tabsKeys[0]
  );
  const { t } = useTranslation('details');
  return (
    <div>
      <h4 className='d-inline-block'>{t('media')}</h4>
      <div className='d-inline-block' css={selectedTabStyles}>
        {tabsKeys.map((key) => (
          <button
            type='button'
            className='ms-5 border-0'
            key={key}
            data-selected={key === selectedTab ? true : undefined}
            onClick={() => setSelected(key)}
          >
            <h5>{t(key)}</h5>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Media;
