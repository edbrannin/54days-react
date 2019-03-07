import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./react-tabs-pill.css";

import './App.css'
import './site.css'
import ALL_MYSTERIES from '../data/mysteries'
import CLOSING_PRAYERS from '../data/closing_prayer'
import { currentDay, intentionType, mysteriesFor } from './helpers'

class App extends Component {
  render() {
    const categories = [
      "Joyful",
      "Luminous",
      "Sorrowful",
      "Glorious",
    ]

    const day = currentDay()
    const todayMysteries = mysteriesFor(day)
    const todayIntention = intentionType(day)

    return (
      <div className="App">
        <h1 style={{
          textAlign: 'center',
        }}>54-Day Rosary Novena</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          paddingBottom: '1em',
          // backgroundColor: 'lightgray',
          // color: '#111',
        }}>
          <div>Day {day + 1}</div>
          <div>Mysteries: {todayMysteries}</div>
          <div>Intention type: {todayIntention}</div>
        </div>

        <Tabs defaultIndex={categories.indexOf(todayMysteries)}>
          <TabList>
            {categories.map(category => (
              <Tab>{category}</Tab>
            ))}
          </TabList>
          {categories.map(category => (
            <TabPanel>
              <h2>{category}</h2>
              <ol>
                {ALL_MYSTERIES[category].map(mystery => (
                  <li style={{
                    marginBottom: '1em',
                  }}>
                    <div style={{
                      fontWeight: 'bold',
                    }}>The {mystery.name}</div>
                    <div style={{ fontStyle: 'italic', }}>Fruit of the mystery: {mystery.fruit}</div>
                    {/*SmartyPants for refelction?*/}
                    <div>{mystery.reflection}</div>
                  </li>
                ))}
              </ol>
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
        <div>
          &nbsp;
        </div>
      </div>
    )
  }
}

export default App
