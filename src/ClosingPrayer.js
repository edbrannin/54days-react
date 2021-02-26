import React from 'react'
import FitText from '@kennethormandy/react-fittext'
import styled from 'styled-components';

import useCurrentDay from './currentDay'
import LinkButton from './LinkButton'
import ClosingPrayersTabPanel from './ClosingPrayersTabPanel'

const Wrapper = styled.div`
  display: grid;
  min-height: 80vh;
  grid-template-rows: 1fr auto;
`;

const ClosingPrayer = () => {
  const { todayIntention, incrementDay } = useCurrentDay()
  return (
    <Wrapper>
      <FitText compressor={3}>
        <ClosingPrayersTabPanel todayIntention={todayIntention} />
      </FitText>
      <LinkButton to="/" onClick={incrementDay}>Done</LinkButton>
    </Wrapper>
  )
}

export default ClosingPrayer
