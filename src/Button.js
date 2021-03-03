
import React from 'react'
import styled from 'styled-components';

// TODO https://styled-components.com/docs/basics#attaching-additional-props
const ButtonWrapper = styled.div`
  text-align: center;
  border: 1px solid gray;
  background-color: #222;
  border-radius: 1em;
  padding: 1em;
  margin: 1em;
  flex: 1;
  cursor: pointer;
`;

const Button = ({ onClick, children }) => (
  <ButtonWrapper onClick={onClick}>
    {children}
  </ButtonWrapper>
)

export default Button
