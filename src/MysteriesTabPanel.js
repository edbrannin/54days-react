import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ALL_MYSTERIES from '../data/mysteries'
import MysteriesPanel from './MysteriesPanel'

const categories = [
  "Joyful",
  "Luminous",
  "Sorrowful",
  "Glorious",
]

const MysteriesTabPanel = ({ todayMysteries }) => (
  <Tabs defaultIndex={categories.indexOf(todayMysteries)}>
    <TabList>
      {categories.map(category => (
        <Tab key={category}>{category}</Tab>
      ))}
    </TabList>
    {categories.map(category => (
      <TabPanel key={category}>
        <MysteriesPanel name={category} mysteries={ALL_MYSTERIES[category]} />
      </TabPanel>
    ))}
  </Tabs>
);

export default MysteriesTabPanel;