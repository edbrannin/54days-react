import React from 'react'

const ButtonBar = ({ children, style }) => (
  <div style={{
    display: 'flex',
    flex: 'auto',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingBottom: '1em',
    ...style,
  }}>
    {children}
  </div>
)

export default ButtonBar