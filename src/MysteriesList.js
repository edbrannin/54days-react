import React from 'react'
import MysteryDetail from './MysteryDetail'

const MysteriesList = ({ mysteries }) => (
  <ol>
    {mysteries.map(mystery => (
      <li key={mystery.name} style={{
        marginBottom: '1em',
      }}>
        <MysteryDetail {...mystery} />
      </li>
    ))}
  </ol>
)


export default MysteriesList
