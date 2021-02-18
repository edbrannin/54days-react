import React from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import FitText from '@kennethormandy/react-fittext'

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

const Wrapper = styled.div`
  display: grid;
  min-height: 80%;
  grid-template-rows: auto 1fr auto;
`;

const PrayMystery = () => {
  const { mysteryCategory, decade } = useParams();
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
    <Wrapper>
      <div>The {decadeLabels[decade - 1]} {mysteryCategory} Mystery</div>
      <FitText compressor={3}>
        <MysteryDetail {...ALL_MYSTERIES[mysteryCategory][decadeNumber]} />
      </FitText>
      <ButtonBar>
        {prevButton}
        {nextButton}
      </ButtonBar>
    </Wrapper>
  )
}

export default PrayMystery
