import React from 'react'
import useLocalstorage from "@rooks/use-localstorage";

import "./react-tabs-pill.css";

import './App.css'
import './site.css'
import { currentDay, intentionType, mysteriesFor } from './helpers'
import StatusBar from './StatusBar'
import ClosingPrayersTabPanel from './ClosingPrayersTabPanel'
import MysteriesTabPanel from './MysteriesTabPanel'
import Button from './Button'

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

      <MysteriesTabPanel todayMysteries={todayMysteries} />

      <ClosingPrayersTabPanel todayIntention={todayIntention} />

      <Button onClick={() => setDay(day + 1)}>
        Done
      </Button>

    </div>
  )
}

export default App
