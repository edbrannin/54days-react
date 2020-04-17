import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./react-tabs-pill.css";
import './App.css'
import './site.css'

import Pray from './Pray'
import PrayMystery from './PrayMystery'
import ClosingPrayer from './ClosingPrayer'

import Overview from './Overview'

const App = () => (
  <Router>
    <div style={{
      margin: '1em',
      height: '100%',
    }}>
      <h1 style={{
        textAlign: 'center',
      }}>54-Day Rosary Novena</h1>
      <Switch>
        <Route exact path="/">
          <Overview/>
        </Route>
        <Route path="/pray/closing">
          <ClosingPrayer/>
        </Route>
        <Route path="/pray/:mysteryCategory/:decade">
          <PrayMystery/>
        </Route>
        <Route path="/pray/:mysteryCategory">
          <Pray/>
        </Route>
      </Switch>

    </div>
  </Router>
)

export default App
