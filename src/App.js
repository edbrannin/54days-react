import React from 'react'
import { Router } from "@reach/router"

import "./react-tabs-pill.css";
import './App.css'
import './site.css'

import Pray from './Pray'
import PrayMystery from './PrayMystery'
import ClosingPrayer from './ClosingPrayer'

import Overview from './Overview'
import Main from './Main'

const App = () => (
  <Router>
    <Main path="/">
      <Overview path="/" />
      <Pray path="/pray/:mysteryCategory" />
      <PrayMystery path="/pray/:mysteryCategory/:decade" />
      <ClosingPrayer path="/pray/closing" />
    </Main>
  </Router>
)

export default App


/*
    <div className="App">

      <MysteriesTabPanel todayMysteries={todayMysteries} />
      <ClosingPrayersTabPanel todayIntention={todayIntention} />

      <Button onClick={() => setDay(day + 1)}>
        Done
      </Button>

    </div>
    */
