import React from 'react'

const StatusBar = ({ day, todayIntention, todayMysteries, onSetDay }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingBottom: '1em',
    // backgroundColor: 'lightgray',
    // color: '#111',
  }}>
    <div>
      <button onClick={() => onSetDay(day - 1)}>&larr;</button>
      <span>Day {day + 1}</span>
      <button onClick={() => onSetDay(day + 1)}>&rarr;</button>
    </div>
    <div>Mysteries: {todayMysteries}</div>
    <div>Intention type: {todayIntention}</div>
  </div>
)

export default StatusBar