import React from 'react'

const Main = ({ children }) => {
  return (
    <div style={{
      margin: '1em',
    }}>
      <h1 style={{
        textAlign: 'center',
      }}>54-Day Rosary Novena</h1>
      {children}
    </div>
  )
}

export default Main
