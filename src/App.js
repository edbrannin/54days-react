import React, { Component, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useLocalstorage from "@rooks/use-localstorage";

import "./react-tabs-pill.css";

import './App.css'
import './site.css'
import ALL_MYSTERIES from '../data/mysteries'
import CLOSING_PRAYERS from '../data/closing_prayer'
import { currentDay, intentionType, mysteriesFor } from './helpers'
import StatusBar from './StatusBar'
import MysteriesPanel from './MysteriesPanel'


const categories = [
  "Joyful",
  "Luminous",
  "Sorrowful",
  "Glorious",
]

const useCurrentDay = () => {
  const { value, set } = useLocalstorage("current-day", currentDay())
  return [ Number(value) % 54, set ];
}

const App = () => {
  const [day, setDay] = useCurrentDay()

  const todayMysteries = mysteriesFor(day)
  const todayIntention = intentionType(day)



  return (
    <div className="App">
      <h1 style={{
        textAlign: 'center',
      }}>54-Day Rosary Novena</h1>
      <StatusBar day={day} todayIntention={todayIntention} todayMysteries={todayMysteries} onSetDay={setDay} />

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
      <div onClick={() => setDay(day + 1)} style={{
        textAlign: 'center',
        border: '1px solid gray',
        backgroundColor: 'blue',
        borderRadius: '1em',
        padding: '1em',
        margin: '1em',
      }}>
        Done
      </div>
    </div>
  )
}

export default App
