import React from 'react'

import MysteryDetail from './MysteryDetail';
import LinkButton from './LinkButton'
import ButtonBar from './ButtonBar';

import ALL_MYSTERIES from '../data/mysteries'

const decadeLabels = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
]


const PrayMystery = ({ mysteryCategory, decade }) => {
  const decadeNumber = Number(decade) - 1
  const prevButton = decadeNumber === 0 ? (
    <LinkButton to="..">Back</LinkButton>
  ) : (
    <LinkButton to={`./${decadeNumber}`}>Previous</LinkButton>
  )
  const nextButton = decadeNumber === 4 ? (
    <LinkButton to="/pray/closing">Closing</LinkButton>
  ) : (
    <LinkButton to={`./${decadeNumber + 2}`}>Next</LinkButton>
  )
  return (
    <div>
      <p>The {decadeLabels[decade]} {mysteryCategory} Mystery</p>
      <MysteryDetail {...ALL_MYSTERIES[mysteryCategory][decadeNumber]} />
      <ButtonBar>
        {prevButton}
        {nextButton}
      </ButtonBar>
    </div>
  )
}

export default PrayMystery
