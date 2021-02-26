import React from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import FitText from '@kennethormandy/react-fittext'

import MysteryDetail from './MysteryDetail';
import LinkButton from './LinkButton'

import ALL_MYSTERIES from '../data/mysteries'
import ButtonBar from './ButtonBar';

const decadeLabels = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
]

const Wrapper = styled.div`
  display: grid;
  min-height: 80vh;
  grid-template-rows: auto 1fr auto;
`;

const WideLinkButton = styled(LinkButton)`
  flex: 1;
`;

const PrayMystery = () => {
  const { mysteryCategory, decade } = useParams();
  const decadeNumber = Number(decade) - 1
  const prevButton = decadeNumber === 0 ? (
    <WideLinkButton to="..">Back</WideLinkButton>
  ) : (
      <WideLinkButton to={`./${decadeNumber}`}>Previous</WideLinkButton>
  )
  const nextButton = decadeNumber === 4 ? (
    <WideLinkButton to="/pray/closing">Closing</WideLinkButton>
  ) : (
      <WideLinkButton to={`./${decadeNumber + 2}`}>Next</WideLinkButton>
  )
  return (
    <Wrapper>
      <div>The {decadeLabels[decade - 1]} {mysteryCategory} Mystery</div>
      <FitText minFontSize={16} maxFontSize={54} compressor={3}>
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
