import React from 'react'
import { useHistory } from "react-router-dom";
import Button from './Button';

const LinkButton = ({ to, children, onClick, style }) => {
  const history = useHistory();

  const myOnClick = () => {
    console.log('in myOnClick')
    if (onClick) {
      console.log('Running onClick:', onClick)
      onClick()
    }
    history.push(to)
  }
  return <Button onClick={myOnClick} style={style}>{children}</Button>
}

export default LinkButton
