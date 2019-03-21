import React from 'react'

const MysteryDetail = ({ name, fruit, reflection }) => (
  <div>
    <div style={{
      fontWeight: 'bold',
    }}>The {name}</div>
    <div style={{ fontStyle: 'italic', }}>Fruit of the mystery: {fruit}</div>
    {/* SmartyPants for refelction? */}
    <div>{reflection}</div>
  </div>
)

export default MysteryDetail
