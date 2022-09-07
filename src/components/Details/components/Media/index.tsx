import React, { useState } from 'react';
import TabsList from './components/TabsList';

interface MediaProps {
  id: number;
}

function Media({ id }: MediaProps) {
  const tabsKeys = ['videos', 'backdrops', 'posters'];
  const [selectedTab, setSelected] = useState<typeof tabsKeys[number]>(
    tabsKeys[0]
  );
  return (
    <TabsList
      items={tabsKeys}
      selectItem={setSelected}
      selectedItem={selectedTab}
    />
  );
}

export default Media;
