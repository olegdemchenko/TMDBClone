import React, { useState } from 'react';
import TabsList from './components/TabsList';
import Videos from './components/Videos';

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
      {selectedTab === 'videos' ? <Videos entityId={id} /> : null}
    </div>
  );
}

export default Media;
