import React from 'react'
import FitText from '@kennethormandy/react-fittext'

import useCurrentDay from './currentDay'
import LinkButton from './LinkButton'
import ClosingPrayersTabPanel from './ClosingPrayersTabPanel'

const ClosingPrayer = () => {
  const { todayIntention, incrementDay } = useCurrentDay()
  return (
    <div style={{
      display: 'grid',
      minHeight: '80%',
      gridTemplateRows: '1fr auto',
    }}>
      <FitText compressor={3}>
        <ClosingPrayersTabPanel todayIntention={todayIntention} />
      </FitText>
      <LinkButton to="/" onClick={incrementDay}>Done</LinkButton>
    </div>
  )
}

export default ClosingPrayer
