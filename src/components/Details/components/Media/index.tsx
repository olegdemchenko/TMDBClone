import React, { useState } from 'react';
import TabsList from './components/TabsList';
import Videos from './components/Videos';
import ShadowWrapper from '../../../ShadowWrapper';
import Images from './components/Images';

interface MediaProps {
  id: number;
}

function Media({ id }: MediaProps) {
  const tabsKeys = ['videos', 'backdrops', 'posters'];
  const [selectedTab, setSelected] = useState<string>(tabsKeys[0]);

  const componentsMap = {
    videos: (
      <ShadowWrapper>
        <Videos entityId={id} />
      </ShadowWrapper>
    ),
    backdrops: <Images movieId={id} type='backdrops' />,
    posters: <Images movieId={id} type='posters' />,
  } as { [key: string]: React.ReactNode };

  return (
    <div className='pb-4'>
      <TabsList
        items={tabsKeys}
        selectItem={setSelected}
        selectedItem={selectedTab}
      />
      {componentsMap[selectedTab]}
    </div>
  );
}

export default Media;
