import { calculatePace } from '../src/ProgressTracker';
import expect from 'expect';

describe('getTargetPerDay', () => {
  it('should be 1/day when caught up', () => {
    const { makeupDays, targetPerDay } = calculatePace({ currentDay: 1, targetCurrentDay: 1 });
    expect(targetPerDay).toBe(1, `should be one per day, but was ${targetPerDay}`);
    expect(makeupDays).toBe(1, `Should be 1 day, but was ${makeupDays}`);
  });

  it('should be 2/day for 1 day when behind 1 day', () => {
    const { makeupDays, targetPerDay } = calculatePace({ currentDay: 1, targetCurrentDay: 2 });
    expect(targetPerDay).toBe(2);
    expect(makeupDays).toBe(1);
  });

  it('should be 2/day for 2 days when behind 2 days', () => {
    const { makeupDays, targetPerDay } = calculatePace({ currentDay: 1, targetCurrentDay: 3 });
    expect(targetPerDay).toBe(2, `should be 2 per day, but was ${targetPerDay}`);
    expect(makeupDays).toBe(2, `should be for 2 days, but was ${makeupDays}`);
  });


  it('should be 54/day for 1 day when you have not started on the last day', () => {
    const { makeupDays, targetPerDay } = calculatePace({ currentDay: 0, targetCurrentDay: 53 });
    expect(targetPerDay).toBe(54);
    expect(makeupDays).toBe(1);
  });


});
