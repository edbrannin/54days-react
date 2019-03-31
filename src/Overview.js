import React from 'react'
import Button from './Button'
import { Link } from "@reach/router"
import useCurrentDay from './currentDay'
import LinkButton from './LinkButton'

import LATIN_MYSTERY_NAMES from '../data/mystery-links.json'

const Overview = () => { 
  const { currentDay, decrementDay, incrementDay, todayIntention, todayMysteries } = useCurrentDay()
  const latinMysteryName = LATIN_MYSTERY_NAMES[todayMysteries.toLowerCase()].toLowerCase()
  return (
    <div style={{
      textAlign: 'center',
    }}>
      <h2>Progress</h2>
      <h3>This is day {currentDay + 1}</h3>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
      }}>
        <Button style={{width: '45%'}} onClick={decrementDay}>
          &larr; Previous Day
        </Button>
        <Button style={{width: '45%'}} onClick={incrementDay}>
          Next Day &rarr;
        </Button>
      </div>
      <h3>Mysteries: {todayMysteries}</h3>
      <h3>Intention type: {todayIntention}</h3>
      <h2>Start</h2>
      <LinkButton to={`/pray/${todayMysteries}`}>Show Mysteries</LinkButton>
      <LinkButton to={`/pray/${todayMysteries}/1`}>Start</LinkButton>
      <a href={`rosary://${latinMysteryName}`} style={{
        color: 'white',
        textDecoration: 'none',
      }}>
        <Button>
          Launch in Rosary app
        </Button>
      </a>
    </div>
  )
}

export default Overview