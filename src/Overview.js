import React from 'react'
import useLocalstorage from "@rooks/use-localstorage";
import Button from './Button'
import moment from 'moment-easter'
import useCurrentDay from './currentDay'
import LinkButton from './LinkButton'

import LATIN_MYSTERY_NAMES from '../data/mystery-links.json'
import ButtonBar from './ButtonBar';
import ProgressTracker from './ProgressTracker';

const getMysteries = (mysteriesByWeekday, { todayMysteries }) => {
  if (!mysteriesByWeekday) {
    return todayMysteries;
  }

  // Weekday
  const weekday = moment().day()
  if (weekday === 1 || weekday === 6) {
    return 'Joyful'
  }
  if (weekday === 4) {
    return 'Luminous';
  }
  if (weekday === 2 || weekday === 5) {
    return 'Sorrowful'
  }
  if (weekday === 0 || weekday === 3) {
    return 'Glorious';
  }

  return 'UNKNOWN';
}

const useMysteries = ({ todayMysteries }) => {
  const { value, set: setMysteriesByWeekday } = useLocalstorage("mysteries-by-weekday", "false");
  const mysteriesByWeekday = JSON.parse(value)
  const actualMysteries = getMysteries(mysteriesByWeekday, { todayMysteries });
  const toggleMysteriesByWeekday = () => setMysteriesByWeekday(JSON.stringify(!mysteriesByWeekday));
  return { actualMysteries, mysteriesByWeekday, toggleMysteriesByWeekday };
}

const Overview = () => {
  const { currentDay, decrementDay, incrementDay, todayIntention, todayMysteries, targetCurrentDay } = useCurrentDay()
  const { actualMysteries, mysteriesByWeekday, toggleMysteriesByWeekday } = useMysteries({ todayMysteries });
  const latinMysteryName = LATIN_MYSTERY_NAMES[actualMysteries.toLowerCase()].toLowerCase()
  return (
    <div style={{
      textAlign: 'center',
    }}>
      <ProgressTracker currentDay={currentDay} targetCurrentDay={targetCurrentDay} />
      <ButtonBar>
        <Button style={{ width: '45%' }} onClick={decrementDay}>
          &larr; Previous Day
        </Button>
        <Button style={{ width: '45%' }} onClick={incrementDay}>
          Next Day &rarr;
        </Button>
      </ButtonBar>
      <h3>Mysteries: {actualMysteries}</h3>
      <h3>Intention type: {todayIntention}</h3>
      <h2>Time to pray</h2>
      <LinkButton to={`/pray/${actualMysteries}/1`}>Start</LinkButton>
      <LinkButton to={`/pray/${actualMysteries}`}>Show Mysteries</LinkButton>
      <a href={`rosary://${latinMysteryName}`} style={{
        color: 'white',
        textDecoration: 'none',
      }}>
        <Button>
          Launch in Rosary app
        </Button>
      </a>
      <Button onClick={toggleMysteriesByWeekday}>
        Mystery mode: {mysteriesByWeekday ? 'By Weekday' : 'Round Robin'}
      </Button>
    </div>
  )
}

export default Overview
