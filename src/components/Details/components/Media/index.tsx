import React, { useState } from 'react';
import TabsList from './components/TabsList';
import Videos from './components/Videos';
import ShadowWrapper from '../../../ShadowWrapper';

interface MediaProps {
  id: number;
}

function Media({ id }: MediaProps) {
  const tabsKeys = ['videos', 'backdrops', 'posters'];
  const [selectedTab, setSelected] = useState<string>(tabsKeys[0]);

  return (
    <div>
      <TabsList
        items={tabsKeys}
        selectItem={setSelected}
        selectedItem={selectedTab}
      />
      {selectedTab === 'videos' ? (
        <ShadowWrapper>
          <Videos entityId={id} />
        </ShadowWrapper>
      ) : null}
    </div>
  );
}

export default Media;
