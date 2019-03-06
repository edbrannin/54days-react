import moment from 'moment-easter'

const mysteries = [
  "Joyful",
  "Sorrowful",
  "Glorious"
];

function currentDay() {
  const ashWeds = moment().easter().subtract(46, 'days');
  const today = moment();
  const dayIndex = today.diff(ashWeds, 'days') // 0
  return dayIndex;
}

function intentionType(dayIndex) {
  if (dayIndex < 26) {
    return "Petition";
  } else if (dayIndex < 54) {
    return "Thanksgiving";
  } else {
    return "Done";
  }
}

function mysteriesFor(dayIndex) {
  return mysteries[dayIndex % mysteries.length];
}

export {
  currentDay,
  intentionType,
  mysteriesFor,
}