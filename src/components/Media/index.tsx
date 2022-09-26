import React, { useState } from 'react';
import TabsList from './components/TabsList';
import Videos from './components/Videos';
import ShadowWrapper from '../ShadowWrapper';
import Images from './components/Images';

interface MediaProps {
  mediaType: 'tv' | 'movie';
}

function Media({ mediaType }: MediaProps) {
  const tabsKeys = ['videos', 'backdrops', 'posters'];
  const [selectedTab, setSelected] = useState<string>(tabsKeys[0]);

  const componentsMap = {
    videos: (
      <ShadowWrapper>
        <Videos mediaType={mediaType} />
      </ShadowWrapper>
    ),
    backdrops: <Images type='backdrops' mediaType={mediaType} />,
    posters: <Images type='posters' mediaType={mediaType} />,
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
