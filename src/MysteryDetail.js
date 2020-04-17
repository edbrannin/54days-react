import React from 'react'

const MysteryDetail = ({ name, fruit, reflection }) => (
  <div>
    <h3 style={{
      fontWeight: 'bold',
    }}>The {name}</h3>
    {/* Markdown, SmartyPants for refelction? */}
    <p>{reflection}</p>
    <p style={{ fontStyle: 'italic', }}>Fruit of the mystery: {fruit}</p>
  </div>
)

export default MysteryDetail
