import React from 'react'
import Button from './Button'
import { Link } from "@reach/router"
import useCurrentDay from './currentDay'
import LinkButton from './LinkButton'


const Overview = () => { 
  const { currentDay, decrementDay, incrementDay, todayIntention, todayMysteries } = useCurrentDay()
  return (
    <div style={{
      textAlign: 'center',
    }}>
      <h2>Progress</h2>
      <div>This is day {currentDay + 1}</div>
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
      <div>Mysteries: {todayMysteries}</div>
      <div>Intention type: {todayIntention}</div>
      <h2>Start</h2>
      <LinkButton to={`/pray/${todayMysteries}`}>Show Mysteries</LinkButton>
      <LinkButton to={`/pray/${todayMysteries}/1`}>Start</LinkButton>
    </div>
  )
}

export default Overview