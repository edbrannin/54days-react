import React, { Fragment, useState } from 'react'
import MysteriesList from './MysteriesList';
import MysteryDetail from './MysteryDetail';
import Button from './Button';
import ButtonBar from './ButtonBar';

const MysteriesPanel = ({ name, mysteries }) => {
  const [focusIndex, setFocusIndex] = useState()
  const onClick = (delta) => () => {
    const newValue = (focusIndex + delta)
    if (newValue % 5 !== newValue) {
      setFocusIndex(undefined)
    } else {
      setFocusIndex(newValue)
    }
  }
  return (
    <Fragment>
      <h2>{name}</h2>
      {focusIndex === undefined ? (
        <div>
          <Button onClick={() => setFocusIndex(0)}>
            Start
          </Button>
          <MysteriesList mysteries={mysteries} />
        </div>
      ) : (
        <div>
          <ButtonBar>
            <Button onClick={onClick(-1)}>
              Previous
            </Button>
            <Button onClick={onClick(1)}>
              Next
          </Button>
          </ButtonBar>
          <MysteryDetail {...mysteries[focusIndex]} />
        </div>
      )}
    </Fragment>
  )
}

export default MysteriesPanel
