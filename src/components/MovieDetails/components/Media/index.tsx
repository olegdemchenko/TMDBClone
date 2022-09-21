import React, { useState } from 'react';
import TabsList from './components/TabsList';
import Videos from './components/Videos';
import ShadowWrapper from '../../../ShadowWrapper';
import Images from './components/Images';

function Media() {
  const tabsKeys = ['videos', 'backdrops', 'posters'];
  const [selectedTab, setSelected] = useState<string>(tabsKeys[0]);

  const componentsMap = {
    videos: (
      <ShadowWrapper>
        <Videos />
      </ShadowWrapper>
    ),
    backdrops: <Images type='backdrops' />,
    posters: <Images type='posters' />,
  } as { [key: string]: React.ReactNode };

  return (
    <div className='py-4'>
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
