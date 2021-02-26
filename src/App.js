import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';

import "./react-tabs-pill.css";
import './App.css'
import './site.css'

import Pray from './Pray'
import PrayMystery from './PrayMystery'
import ClosingPrayer from './ClosingPrayer'

import Overview from './Overview'

const PaddingWrapper = styled.div`
  min-height: 95vh;
  padding: 1em;
`;

const App = () => (
  <Router>
    <PaddingWrapper>
      <h1 style={{
        textAlign: 'center',
      }}>54-Day Rosary Novena</h1>
      <Switch>
        <Route exact path="/">
          <Overview />
        </Route>
        <Route path="/pray/closing">
          <ClosingPrayer />
        </Route>
        <Route path="/pray/:mysteryCategory/:decade">
          <PrayMystery />
        </Route>
        <Route path="/pray/:mysteryCategory">
          <Pray />
        </Route>
      </Switch>
    </PaddingWrapper>
  </Router>
)

export default App
