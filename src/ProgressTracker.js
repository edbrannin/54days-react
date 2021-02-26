import React from 'react';

export const calculatePace = ({ currentDay, targetCurrentDay }) => {
  const targetPerDay = Math.ceil((54 - currentDay) / (54 - targetCurrentDay));
  const makeupDays = Math.ceil((targetCurrentDay - currentDay + 1) / targetPerDay);
  return {
    targetPerDay,
    makeupDays,
  };
};

const ProgressTracker = ({ currentDay, targetCurrentDay }) => {
  const behind = currentDay < targetCurrentDay
  const { makeupDays, targetPerDay } = calculatePace({ currentDay, targetCurrentDay });

  const makeUpNote = (makeupDays === 1) ? (
    <p>To catch up, say { targetPerDay } rosaries today.</p>
  ) : (
    <p>To catch up, say { targetPerDay } rosaries per day for { makeupDays } days.</p>
  );
  return (
    <>
      <h2>Progress</h2>
      <h3>This is day {currentDay + 1}</h3>
      {behind && (
        <React.Fragment>
          <p>
            If you started with Lent and want to end on Mercy Sunday,
            you should be on day {targetCurrentDay}.
          </p>
          {makeUpNote}
        </React.Fragment>
      )}
    </>
  )
};

export default ProgressTracker;
