import useLocalstorage from "@rooks/use-localstorage";

import { currentDay, intentionType, mysteriesFor } from './helpers'

const useCurrentDay = () => {
  const targetCurrentDay = currentDay()
  const { value, set } = useLocalstorage("current-day", targetCurrentDay)
  const day = Number(value) % 54
  const todayMysteries = mysteriesFor(day)
  const todayIntention = intentionType(day)
  const incrementDay = () => set(day + 1)
  const decrementDay = () => set(day - 1)
  return {
    day,
    currentDay: day,
    setCurrentDay: set,
    todayMysteries,
    todayIntention,
    incrementDay,
    decrementDay,
    targetCurrentDay,
  };
}

export default useCurrentDay;
