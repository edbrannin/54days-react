import React from 'react'
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
      <ClosingPrayersTabPanel todayIntention={todayIntention} />
      <LinkButton to="/" onClick={incrementDay}>Done</LinkButton>
    </div>
  )
}

export default ClosingPrayer
