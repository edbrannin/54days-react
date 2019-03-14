import React, { Fragment } from 'react'

const MysteriesPanel = ({ name, mysteries }) => (
  <Fragment>
    <h2>{name}</h2>
    <ol>
      {mysteries.map(mystery => (
        <li style={{
          marginBottom: '1em',
        }}>
          <div style={{
            fontWeight: 'bold',
          }}>The {mystery.name}</div>
          <div style={{ fontStyle: 'italic', }}>Fruit of the mystery: {mystery.fruit}</div>
          {/* SmartyPants for refelction? */}
          <div>{mystery.reflection}</div>
        </li>
      ))}
    </ol>
  </Fragment>
)

export default MysteriesPanel