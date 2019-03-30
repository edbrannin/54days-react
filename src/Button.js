
import React from 'react'

const Button = ({ onClick, children, style = {} }) => (
  <div onClick={onClick} style={{
    textAlign: 'center',
    border: '1px solid gray',
    backgroundColor: '#222',
    borderRadius: '1em',
    padding: '1em',
    margin: '1em',
    ...style,
  }}>
    {children}
  </div>
)

export default Button