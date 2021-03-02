import React from 'react'
import styled from 'styled-components';

const Name = styled.h3`
  font-weight: bold;
  margin-top: 0;
`;

const MysteryDetail = ({ name, fruit, reflection }) => (
  <div>
    <Name>The {name}</Name>
    {/* Markdown, SmartyPants for refelction? */}
    <p>{reflection}</p>
    <p style={{ fontStyle: 'italic', }}>Fruit of the mystery: {fruit}</p>
  </div>
)

export default MysteryDetail
