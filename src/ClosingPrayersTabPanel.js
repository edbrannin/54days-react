import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CLOSING_PRAYERS from '../data/closing_prayer'

const ClosingPrayersTabPanel = ({ todayIntention }) => (
  <Tabs>
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

export default ClosingPrayersTabPanel
