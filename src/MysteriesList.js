import React from 'react'
import MysteryDetail from './MysteryDetail'

const MysteriesList = ({ mysteries }) => (
  <ol>
    {mysteries.map(mystery => (
      <li style={{
        marginBottom: '1em',
      }}>
        <MysteryDetail {...mystery} />
      </li>
    ))}
  </ol>
)


export default MysteriesList
