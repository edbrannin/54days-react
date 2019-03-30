import React from 'react'
import { navigate } from "@reach/router"

import Button from './Button';

const LinkButton = ({ to, children, onClick }) => {
  const myOnClick = () => {
    console.log('in myOnClick')
    if (onClick) {
      console.log('Running onClick:', onClick)
      onClick()
    }
    navigate(to)
  }
  return <Button onClick={myOnClick}>{children}</Button>
}

export default LinkButton