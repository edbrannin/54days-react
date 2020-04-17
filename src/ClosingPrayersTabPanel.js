import React from 'react'
import useLocalstorage from "@rooks/use-localstorage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CLOSING_PRAYERS from '../data/closing_prayer'

const ClosingPrayersTabPanel = ({ todayIntention }) =>{
  const { set: setDefaultIndex, value: defaultIndex } = useLocalstorage('closing-prayer-tab-index', 0);
  return (
    <Tabs defaultIndex={defaultIndex} onSelect={index => setDefaultIndex(index)}>
      <TabList>
        <Tab>Singular</Tab>
        <Tab>Plural</Tab>
      </TabList>
      <TabPanel>
        {CLOSING_PRAYERS[todayIntention].Singular}
      </TabPanel>
      <TabPanel>
        {CLOSING_PRAYERS[todayIntention].Plural}
      </TabPanel>
    </Tabs>
  )
};

export default ClosingPrayersTabPanel
